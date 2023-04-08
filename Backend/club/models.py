# Create your models here.
from pymongo import MongoClient

from Backend.dao.database import MongoDBClient


class Club:
    _instance = None
    _collection = MongoDBClient.getDatabase()["club"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Club()
        return cls._instance

    def get_club_by_id(self, club_id):
        return self._collection.find_one({"id": club_id})

