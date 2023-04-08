# Create your models here.
from pymongo import MongoClient


class Rule:
    _instance = None
    _client = MongoClient(
        "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority")

    _db = _client["GCM"]
    _collection = _db["rule"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Rule()
        return cls._instance

    def get_rule_by_id(self, rule_id):
        return self._collection.find_one({"id": rule_id})
