# Create your models here.
from pymongo import MongoClient

from Backend.dao.database import MongoDBClient


class Tag:
    _instance = None
    _collection = MongoDBClient.getDatabase()["tag"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Tag()
        return cls._instance

    def get_tag_by_id(self, tag_id):
        return self.collection.find_one({"id": tag_id})
