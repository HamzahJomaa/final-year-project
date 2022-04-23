from flask import Flask, request
import json
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import wordnet
from surprise import Reader, Dataset, SVD
import mongodb as md
from flask_jsonpify import jsonpify

from scipy.sparse import csr_matrix
from sklearn.decomposition import TruncatedSVD
from sklearn.neighbors import NearestNeighbors

# Flask constructor takes the name of
# current module (__name__) as argument
app = Flask(__name__)


def GetData(StreamType,hosting):
    if (hosting == "online"):
        return md.read_mongo("finalyearproject",StreamType,True)
    else:
        return md.read_mongo("finalyearproject",StreamType,False)


@app.route("/api/python/")
def Main():
    user = {"movies":{"data":"This is for moveis"} ,"series":{"data":"This is for series"} , }
    JSONP_data = jsonpify(user)
    return JSONP_data


@app.route("/api/python/qualified/genre/<StreamType>/<limit>/<db>")
def getTopGenres(StreamType,limit,db):
    movies = GetData(StreamType,db)
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    s = movies.apply(lambda x: pd.Series(x['genres']),axis=1).stack().reset_index(level=1, drop=True)
    s.name = 'genre'
    genre_movies = movies.drop('genres', axis=1).join(s)
    qualified = genre_movies.groupby(by="genre").sum("vote_average").sort_values(by=['vote_average'],ascending=False).head(int(limit))
    qualified_genres = list(qualified.index)
    JSONP_data = jsonpify(qualified_genres)
    return JSONP_data

@app.route("/api/python/<StreamType>/<string:title>/<db>")
def Get_Movie_Recommendation(StreamType,title,db):
    movies = GetData(StreamType,db)
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    movies['overview'] = movies['overview'].fillna("")
    tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
    tfidf_matrix = tf.fit_transform(movies['overview'])
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    moviesSIM = movies.reset_index()
    titles = moviesSIM['title']
    indices = pd.Series(moviesSIM.index, index=moviesSIM['title'])
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:10]
    movie_indices = [i[0] for i in sim_scores]
    JSONP_data = jsonpify(list(movies.iloc[movie_indices]["tmdb"]))
    return JSONP_data

@app.route("/api/python/genre/<StreamType>/<Genre>/<int:limit>/<string:db>")
def Get_Genre(StreamType,Genre,db,limit):
    genres = Genre.split(",")
    movies = GetData(StreamType,db)
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    s = movies.apply(lambda x: pd.Series(x['genres']),axis=1).stack().reset_index(level=1, drop=True)
    s.name = 'genre'
    genre_movies = movies.drop('genres', axis=1).join(s)
    results = []
    for genre in genres:
        result = { "genre": str(genre) ,  "data" : list(build_chart(genre=genre,genre_movies=genre_movies,limit=5))}
        results.append(result)
    JSONP_data = jsonpify(results)
    return JSONP_data




def build_chart(genre,genre_movies, percentile=0.85,limit=5):
    df = genre_movies[genre_movies['genre'] == genre]
    vote_counts = df[df['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = df[df['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(percentile)

    qualified = df[(df['vote_count'] >= m) & (df['vote_count'].notnull()) & (df['vote_average'].notnull())][['title','tmdb', 'year', 'vote_count', 'vote_average', 'popularity']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')

    qualified['wr'] = qualified.apply(lambda x: (x['vote_count']/(x['vote_count']+m) * x['vote_average']) + (m/(m+x['vote_count']) * C), axis=1)
    qualified = qualified.sort_values('wr', ascending=False)
    qualified = qualified.drop_duplicates(['tmdb']).dropna().head(limit)

    return qualified["tmdb"]

@app.route("/api/python/correlation/<StreamType>/<stream>/<int:limit>/<string:db>")
def getCorrelation(StreamType,stream,limit,db):
    movies = GetData(StreamType,db)
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    ratings = GetData("reviews",db)
    users = GetData("users",db)
    movies = movies.rename(columns={"_id":"on"})
    movie_ratings = pd.merge(movies,ratings,on="on")
    movies_ratings = movie_ratings.rename(columns={"title_x":"movieTitle","title_y":"rateTitle"})
    user_movie_rating = movies_ratings.pivot_table(index='userId', columns='tmdb', values='rate')
    ratings_mean_count = pd.DataFrame(movies_ratings.groupby('tmdb')['rate'].mean())
    ratings_mean_count['rating_counts'] = pd.DataFrame(movies_ratings.groupby('tmdb')['rate'].count())
    recommendation = []
    streams = stream.split(",")
    for stream_id in streams:
        movieSelected = user_movie_rating[int(stream_id)]
        movieCorrelation = user_movie_rating.corrwith(movieSelected,method="pearson")
        df_movieCorrelation = pd.DataFrame(movieCorrelation, columns=['Correlation'])
        df_movieCorrelation.dropna(inplace=True)
        df_movieCorrelation = df_movieCorrelation.join(ratings_mean_count['rating_counts'])
        df_movieCorrelation = df_movieCorrelation[df_movieCorrelation ['rating_counts']>10].sort_values('Correlation', ascending=False)
        df_movieCorrelation = df_movieCorrelation.reset_index()
        recommendation += list(df_movieCorrelation["tmdb"])
    JSONP_data = jsonpify(recommendation)
    return JSONP_data


@app.route("/api/python/qualified/<StreamType>/<limit>/<string:db>")
def getQualified(StreamType,limit,db):
    movies = GetData(StreamType,db)
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()

    m = vote_counts.quantile(0.95)


    qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())][['tmdb','title', 'year', 'vote_count', 'vote_average', 'popularity', 'genres']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')

    def weighted_rating(x):
        v = x['vote_count']
        R = x['vote_average']
        return (v/(v+m) * R) + (m/(m+v) * C)

    qualified['wr'] = qualified.apply(weighted_rating, axis=1)
    qualified = qualified.sort_values('wr', ascending=False)
    JSONP_data = jsonpify(list(qualified["tmdb"].head(int(limit))))
    return JSONP_data

@app.route("/api/python/knn/<StreamType>/<stream>/<int:limit>/<string:db>")
def getNN(StreamType,stream,limit,db):
    movies = GetData(StreamType,db)
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    ratings = GetData("reviews",db)
    users = GetData("users",db)
    movies = movies.rename(columns={"_id":"on"})
    movie_ratings = pd.merge(movies,ratings,on="on")
    
    knn_ratings = ratings[["userId","on","rate"]]
    knn_movies = movies[["on","tmdb"]]
    knn_movie_ratings = pd.merge(knn_movies,knn_ratings,on="on")
    movie_rating_count = (knn_movie_ratings.
                      groupby(by=["tmdb"])["rate"].
                      count().reset_index().
                      rename(columns={'rate':'totalRating'})
                      [["tmdb","totalRating"]]
                     )
    rating_with_totalRatingCount=knn_movie_ratings.merge(movie_rating_count,left_on='tmdb',right_on='tmdb',how="inner")
    popularity_threshold=3
    #rating_popular_book=rating_with_totalRatingCount.query('totalRatingCount>=@popularity_threshold')
    rating_popular_movie=rating_with_totalRatingCount[rating_with_totalRatingCount['totalRating']>popularity_threshold]
    combined = rating_popular_movie.merge(users,left_on='userId',right_on='_id',how="inner")
    combined = combined.drop_duplicates(['userId','tmdb'])
    knn_users = combined.pivot(index="tmdb",columns="_id",values="rate").fillna(0)
    knn_rating_user_csr = csr_matrix(knn_users.values)
    model_knn=NearestNeighbors(metric="cosine",algorithm="brute")
    model_knn.fit(knn_rating_user_csr)
    new_shape = knn_users.reset_index()

    recommendation = []
    streams = stream.split(",")
    for stream_id in streams:
        recommendation += list(getSingleKNN(new_shape,int(stream_id),knn_users,model_knn,limit))

    JSONP_data = jsonpify(list(recommendation))
    return JSONP_data


def getSingleKNN(new_shape,stream_id,knn_users,model_knn,limit):
    values = new_shape[new_shape["tmdb"] == stream_id].drop(columns=['tmdb']).values.reshape(1,-1)
    try:
        distances,indices=model_knn.kneighbors(values,n_neighbors=int(limit + 1))
        recommendation = []
        for i in range(0,len(distances.flatten())):
            if i!=0:
                recommendation.append(int(knn_users.index[indices.flatten()[i]]))
        return recommendation
    except ValueError:
        return ""
# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()