# Create your models here.
from pymongo import MongoClient

from Backend.dao.database import MongoDBClient


class Seller:
    _instance = None
    _collection = MongoDBClient.getDatabase()["seller"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Seller()
        return cls._instance

    def get_rule_by_id(self, seller_id):
        return self.collection.find_one({"id": seller_id})
