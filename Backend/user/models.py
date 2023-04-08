# Create your models here.
from pymongo import MongoClient

from Backend.dao.database import MongoDBClient


class User:
    _instance = None
    _collection = MongoDBClient.getDatabase()["user"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = User()
        return cls._instance

    def get_rule_by_id(self, user_id):
        return self._collection.find_one({"id": user_id})
