# Create your models here.
from pymongo import MongoClient


class Review:
    _instance = None
    _client = MongoClient(
        "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority")

    _db = _client["GCM"]
    _collection = _db["review"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Review()
        return cls._instance

    def get_review_by_id(self, review_id):
        return self._collection.find_one({"id": review_id})
