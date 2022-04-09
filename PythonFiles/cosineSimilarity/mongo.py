import pymongo

myclient = pymongo.MongoClient("mongodb://fyp:fyp_admin@cluster0-shard-00-02.p0vx1.mongodb.net:27017/?ssl=true&replicaSet=atlas-iixcb4-shard-0&authSource=admin&retryWrites=true&w=majority")
mydb = myclient["finalyearproject"]
mycol = mydb["genres"]

for x in mycol.find():
  print(x)
