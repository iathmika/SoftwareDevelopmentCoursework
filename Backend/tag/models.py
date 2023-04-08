# Create your models here.
from pymongo import MongoClient


class Tag:
    _instance = None
    _client = MongoClient(
        "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority")

    _db = _client["GCM"]
    collection = _db["tag"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Tag()
        return cls._instance

    def get_tag_by_id(self, tag_id):
        return self.collection.find_one({"id": tag_id})
