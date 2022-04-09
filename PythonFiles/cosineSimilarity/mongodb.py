import pandas as pd
from pymongo import MongoClient
import certifi

def _connect_mongo(db,prod=False):
    """ A util for making a connection to mongo """
    if (prod):
        conn = MongoClient("mongodb://fyp:fyp_admin@cluster0-shard-00-02.p0vx1.mongodb.net:27017/?ssl=true&replicaSet=atlas-iixcb4-shard-0&authSource=admin&retryWrites=true&w=majority", tlsCAFile=certifi.where())
    else:
        conn = MongoClient("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")
    return conn[db]

def read_mongo(db, collection,prod=False):
    """ Read from Mongo and Store into DataFrame """


    # Connect to MongoDB
    db = _connect_mongo(db,prod)

    # Make a query to the specific DB and Collection
    if (collection == "movies" or collection == "series"):
        pipeline = [
            {"$lookup":{"from": 'genres',"localField": 'genre_ids',"foreignField": 'tmdb',"as": 'genres'}},
            {"$project":{"_id":"$_id","tmdb":"$tmdb","title": "$title","overview": "$overview","genres":"$genres.name","vote_count":"$vote_count","vote_average":"$vote_average","popularity": "$popularity","release_date": "$release_date",}},
        ]
        cursor = db[collection].aggregate(pipeline)
    else:
        cursor = db[collection].find({}).limit(500)

    # Expand the cursor and construct the DataFrame
    df =  pd.DataFrame(list(cursor))

    return df


