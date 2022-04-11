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


# Flask constructor takes the name of
# current module (__name__) as argument
app = Flask(__name__)


@app.route("/api/python/")
def Main():
    user = md.read_mongo("finalyearproject","movies",True)
    JSONP_data = jsonpify(list(user["title"]))
    return JSONP_data

@app.route("/api/python/<type>/<title>/<db>")
def Get_Movie_Recommendation(type,title,db):
    movies = ""
    if (db == "online"):
         movies = md.read_mongo("finalyearproject",type,True)
    else:
         movies = md.read_mongo("finalyearproject",type,False)
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
    sim_scores = sim_scores[1:5]
    movie_indices = [i[0] for i in sim_scores]
    JSONP_data = jsonpify(list(movies.iloc[movie_indices]["tmdb"]))
    return JSONP_data

@app.route("/api/python/movie/genre/<string:Genre>")
def Get_Genre(Genre):
    percentile=0.85
    movies = ""
    movies = md.read_mongo("finalyearproject","movies")
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)

    s = movies.apply(lambda x: pd.Series(x['genres']),axis=1).stack().reset_index(level=1, drop=True)
    s.name = 'genre'
    genre_movies = movies.drop('genres', axis=1).join(s)


    df = genre_movies[genre_movies['genre'] == Genre]
    vote_counts = df[df['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = df[df['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(percentile)

    qualified = df[(df['vote_count'] >= m) & (df['vote_count'].notnull()) & (df['vote_average'].notnull())][['tmdb','title', 'year', 'vote_count', 'vote_average', 'popularity']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')

    qualified['wr'] = qualified.apply(lambda x: (x['vote_count']/(x['vote_count']+m) * x['vote_average']) + (m/(m+x['vote_count']) * C), axis=1)
    qualified = qualified.sort_values('wr', ascending=False).head(20)

    JSONP_data = jsonpify(list(qualified["tmdb"]))
    return JSONP_data

# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()