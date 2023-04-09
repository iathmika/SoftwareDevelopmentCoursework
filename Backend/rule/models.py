# Create your models here.
from pymongo import MongoClient

from dao.database import MongoDBClient


class Rule:
    _instance = None
    _collection = MongoDBClient.getDatabase()["rule"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Rule()
        return cls._instance

    def get_rule_by_id(self, rule_id):
        rule_found = self._collection.find_one({"id": int(rule_id)})
        if rule_found:
            rule_found['_id'] = str(rule_found['_id'])
        return rule_found
