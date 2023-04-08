# Create your models here.
from pymongo import MongoClient

from Backend.dao.database import MongoDBClient


class Rule:
    _instance = None
    _collection = MongoDBClient.getDatabase()["rule"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Rule()
        return cls._instance

    def get_rule_by_id(self, rule_id):
        return self._collection.find_one({"id": rule_id})
