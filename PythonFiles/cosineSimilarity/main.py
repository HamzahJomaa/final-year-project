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
import mongodb

import argparse


import warnings; warnings.simplefilter('ignore')


movies = mongodb.read_mongo("finalyearproject","movies")
movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)

small_links = pd.read_csv("small_links.csv")
ratings = pd.read_csv("ratings_small.csv")
movies = movies.rename(columns={'tmdb':'tmdbId'})
movies["tmdbId"] = movies["tmdbId"].astype("int")
movies_small = pd.merge(movies,small_links)
movies_small_ratings = pd.merge(movies_small,ratings)



def return_quilified():
    vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()

    m = vote_counts.quantile(0.95)

    qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())][['_id','tmdbId','title', 'year', 'vote_count', 'vote_average', 'popularity', 'genres']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')


    def weighted_rating(x):
        v = x['vote_count']
        R = x['vote_average']
        return (v/(v+m) * R) + (m/(m+v) * C)

    qualified['wr'] = qualified.apply(weighted_rating, axis=1)

    qualified = qualified.sort_values('wr', ascending=False)
    qualified = qualified.drop(columns=["year","vote_average","popularity","genres","wr","vote_count"])
    return qualified

def return_genre_recommendation(genre,percentile=0.85):
    s = movies.apply(lambda x: pd.Series(x['genres']),axis=1).stack().reset_index(level=1, drop=True)
    s.name = 'genre'
    genre_movies = movies.drop('genres', axis=1).join(s)
    df = genre_movies[genre_movies['genre'] == genre]
    vote_counts = df[df['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = df[df['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(percentile)
    
    qualified = df[(df['vote_count'] >= m) & (df['vote_count'].notnull()) & (df['vote_average'].notnull())][['_id','tmdbId','title', 'year', 'vote_count', 'vote_average', 'popularity']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')
    
    qualified['wr'] = qualified.apply(lambda x: (x['vote_count']/(x['vote_count']+m) * x['vote_average']) + (m/(m+x['vote_count']) * C), axis=1)
    qualified = qualified.sort_values('wr', ascending=False).head(250)
    qualified = qualified.drop(columns=["year","vote_average","popularity","wr","vote_count"])

    return qualified



def return_cosine_recommendation(title):
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
    sim_scores = sim_scores[1:15]
    movie_indices = [i[0] for i in sim_scores]
    qualified = movies.iloc[movie_indices]

    return qualified[["_id","tmdbId","title"]]



def return_correlation_recommendation(title):
    user_movie_rating = movies_small_ratings.pivot_table(index='userId', columns='title', values='rating')
    ratings_mean_count = pd.DataFrame(movies_small_ratings.groupby('title')['rating'].mean())
    ratings_mean_count['rating_counts'] = pd.DataFrame(movies_small_ratings.groupby('title')['rating'].count())
    movieSelected = user_movie_rating[title]
    movieCorrelation = user_movie_rating.corrwith(movieSelected,method="pearson")

    df_movieCorrelation = pd.DataFrame(movieCorrelation, columns=['Correlation'])
    df_movieCorrelation.dropna(inplace=True)
    df_movieCorrelation = df_movieCorrelation.join(ratings_mean_count['rating_counts'])
    df_movieCorrelation[df_movieCorrelation ['rating_counts']>50].sort_values('Correlation', ascending=False).head()
    df_movieCorrelation = df_movieCorrelation.reset_index()
    return df_movieCorrelation.sort_values('Correlation', ascending=False)


def parse_args():
    parser = argparse.ArgumentParser(
        prog="Movie Recommender",
        description="Run KNN Movie Recommender")
    parser.add_argument('--type', nargs='?', default='',
                        help='input recommendation type')
    parser.add_argument('--title', nargs='?', default='',
                        help='input title')   

    return parser.parse_args()

if __name__ == '__main__':
    # get args
    args = parse_args()
    type = args.type
    title = args.title
    if (type == "qualified"):
        result = return_quilified()
    elif (type == "genre"):
        result = return_genre_recommendation(title,0.2)
    elif (type == "cosine"):
        result = return_cosine_recommendation(title)
    elif (type == "correlation"):
        result = return_correlation_recommendation(title)
    else:
        result = ""

    print(result)

