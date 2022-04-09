import sys
import pandas as pd


df_ratings = pd.read_csv("./PythonFiles/ratings.csv")
df_movies = pd.read_csv("./PythonFiles/movies.csv")
df_movie_data = pd.merge(df_ratings, df_movies, on='movieId')

user_movie_rating = df_movie_data.pivot_table(index='userId', columns='title', values='rating')

ratings_mean_count = pd.DataFrame(df_movie_data.groupby('title')['rating'].mean())

#Next, we need to add the number of ratings for a movie to the ratings_mean_count dataframe. Execute the following script to do so:
ratings_mean_count['rating_counts'] = pd.DataFrame(df_movie_data.groupby('title')['rating'].count())

movieSelected = user_movie_rating[sys.argv[1]]

movieCorrelation = user_movie_rating.corrwith(movieSelected,method="pearson")

df_movieCorrelation = pd.DataFrame(movieCorrelation, columns=['Correlation'])
df_movieCorrelation.dropna(inplace=True)
df_movieCorrelation = df_movieCorrelation.join(ratings_mean_count['rating_counts'])
df_movieCorrelation[df_movieCorrelation ['rating_counts']>50].sort_values('Correlation', ascending=False).head()
df_movieCorrelation = df_movieCorrelation.reset_index()

print(df_movieCorrelation.head(5).to_json())