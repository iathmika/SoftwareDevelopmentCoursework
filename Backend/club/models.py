# Create your models here.
from pymongo import MongoClient


class Club:
    _instance = None
    _client = MongoClient(
        "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority")

    dblist = _client.list_database_names()
    _db = _client["GCM"]
    collection = _db["club"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Club()
        return cls._instance

    def get_club_by_id(self, club_id):
        return self.collection.find_one({"id": club_id})

