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

import warnings; warnings.simplefilter('ignore')

# Setup flask server
app = Flask(__name__)

# Setup url route which will calculate
# total sum of array.
@app.route('/arraysum', methods = ['POST'])
def Movies():

    movies = ""
    ratings = ""
    movies = md.read_mongo("finalyearproject","movies")
    ratings = md.read_mongo("finalyearproject","reviews")
    movies = movies.rename(columns={"_id":"on"})
    movie_ratings = pd.merge(movies,ratings,on="on")
    movies['year'] = pd.to_datetime(movies['release_date'], errors='coerce').apply(lambda x: str(x).split('-')[0] if x != np.nan else np.nan)
    movies_ratings = movie_ratings.rename(columns={"title_x":"movieTitle","title_y":"rateTitle"})
    print(movies_ratings)
    data = request.get_json()
    print(data)

    # Data variable contains the
    # data from the node server
    ls = data['array']
    result = sum(ls) # calculate the sum

    # Return data in json format
    return json.dumps({"result":result})



@app.route("/movies", methods=["GET"])
def getMovie():
    movies = ""
    ratings = ""
    movies = md.read_mongo("finalyearproject","movies")
    ratings = md.read_mongo("finalyearproject","reviews")
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
    print(qualified)
    return json.dumps({"result":"Done"})




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

    qualified = df[(df['vote_count'] >= m) & (df['vote_count'].notnull()) & (df['vote_average'].notnull())][['title', 'year', 'vote_count', 'vote_average', 'popularity']]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')

    qualified['wr'] = qualified.apply(lambda x: (x['vote_count']/(x['vote_count']+m) * x['vote_average']) + (m/(m+x['vote_count']) * C), axis=1)
    qualified = qualified.sort_values('wr', ascending=False).head(20)
    print(list(qualified["title"])
    return json.dumps({"result":Genre})

if __name__ == "__main__":
    app.run(port=5000)