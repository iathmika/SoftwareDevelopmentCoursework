# Create your models here.
from pymongo import MongoClient

from dao.database import MongoDBClient


class User:
    _instance = None
    _collection = MongoDBClient.getDatabase()["user"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = User()
        return cls._instance

    def get_user_by_id(self, user_id):
        user_found = self._collection.find_one({'id': int(user_id)})
        if user_found:
            user_found['_id'] = str(user_found['_id'])
        return user_found

