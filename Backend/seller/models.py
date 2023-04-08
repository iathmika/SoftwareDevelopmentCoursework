# Create your models here.
from pymongo import MongoClient


class Seller:
    _instance = None
    _client = MongoClient(
        "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority")

    _db = _client["GCM"]
    collection = _db["seller"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Seller()
        return cls._instance

    def get_rule_by_id(self, seller_id):
        return self.collection.find_one({"id": seller_id})
