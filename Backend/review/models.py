# Create your models here.
import datetime

from pymongo import MongoClient

from Backend.dao.database import MongoDBClient


class Review:
    _instance = None
    _collection = MongoDBClient.getDatabase()["review"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Review()
        return cls._instance

    def get_review_by_id(self, review_id):
        return self._collection.find_one({"id": review_id})

    def insert_reviews(self):
        print("inserting review")
        d = datetime.datetime.strptime("2013-10-13T10:53:53.000Z", "%Y-%m-%dT%H:%M:%S.000Z")
        for i in range(100, 105):
            if self.get_review_by_id(i):
                print("already inserted")
            else:
                self._collection.insert_one({"user_id": "0",
                                             "game_id": "100",
                                             "content": "Mario Kart is a kart racing game featuring several "
                                                        "single and multiplayer modes. During the game, "
                                                        "players take control of one of eight Mario franchise "
                                                        "characters, each with differing capabilities, "
                                                        "and drive karts around tracks with a Mario franchise "
                                                        "theme.",
                                             "rating": 5.0,
                                             "public": "false",
                                             "release_time": d})
