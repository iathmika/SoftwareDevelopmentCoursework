# Create your models here.
from pymongo import MongoClient

from dao.database import MongoDBClient


class Seller:
    _instance = None
    _collection = MongoDBClient.getDatabase()["seller"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Seller()
        return cls._instance

    def get_seller_by_id(self, seller_id):
        seller_found = self._collection.find_one({"id": int(seller_id)})
        if seller_found:
            seller_found['_id'] = str(game_found['_id'])
        return seller_found
