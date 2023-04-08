# Create your models here.
from pymongo import MongoClient


class User:
    _instance = None
    _client = MongoClient(
        "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority")

    _db = _client["GCM"]
    _collection = _db["user"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = User()
        return cls._instance

    def get_rule_by_id(self, user_id):
        return self._collection.find_one({"id": user_id})
