from django.db import models

# Create your models here.
from pymongo import MongoClient
import pandas as pd
from django.db import models
import datetime

class GameCollectionsData:
    _instance = None
    _client = MongoClient("mongodb://localhost:27017/")
    dblist = _client.list_database_names()
    if "GCM" in dblist:
        print("The database exists.")
        
    else: 
        print("Database will be created")
    _db = _client["GCM"]
    _collection1 = _db["game"]
    _collection2 = _db["club"]
    _collection3 = _db["review"]
    _collection4 = _db["user"]
    _collection5 = _db["seller"]
    _collection6 = _db["rule"]
    _collection7 = _db["tag"]


    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = GameCollectionsData()
        return cls._instance
    
    #Insert games initially
    def insert_games(self):
        print("inserting game")
        d = datetime.datetime.strptime("2013-10-13T10:53:53.000Z", "%Y-%m-%dT%H:%M:%S.000Z")
        for i in range(100,105):
            if (self.get_game_by_id(i)):
                print("already inserted")
                
            else:
                self._collection1.insert_one({"id": i, "name": "Mario Kart", 
        "description": "Mario Kart is a kart racing game featuring several single and multiplayer modes. During the game, players take control of one of eight Mario franchise characters, each with differing capabilities, and drive karts around tracks with a Mario franchise theme.", "publisher" : "nintendo", 
        "release_date": d })

    # similarly insert into other collection

    #def insert_tags(self):

    #def insert_sellers(self):

    #def insert_reviews(self):

    #def insert_rules(self):


    def get_all_games(self):
        return list(self._collection1.find({}))
    
    def get_game_by_id(self, game_id):
        return self._collection1.find_one({"id": game_id})


    

    def get_club_by_id(self, club_id):
        return self._collection2.find_one({"id": club_id})
    
    def get_review_by_id(self, review_id):
        return self._collection3.find_one({"id": review_id})

    def get_user_by_id(self, user_id):
        return self._collection4.find_one({"id": user_id})
    
    def get_seller_by_id(self, seller_id):
        return self._collection5.find_one({"id": seller_id})
    
    def get_rule_by_id(self, rule_id):
        return self._collection6.find_one({"id": rule_id})

    def get_tag_by_id(self, tag_id):
        return self._collection7.find_one({"id": tag_id})

    def get_game_fields(self, game_id):
        game = self._collection.find_one({"id": game_id})
        print(game)
        name = game.get("name")
        description= game.get("description")
        publisher = game.get("publisher")
        release_date = game.get("release_date")
  
        return (name, description, publisher, release_date)
        

if __name__ == "__main__":
   
    game_data = GameCollectionsData.getInstance()
    print(game_data.insert_games())
    # displaying all games in the collection "games" in the database
    games = game_data.get_all_games()
    for game in games:
        print(game)
    
