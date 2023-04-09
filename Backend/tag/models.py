# Create your models here.
from pymongo import MongoClient

from dao.database import MongoDBClient


class Tag:
    _instance = None
    _collection = MongoDBClient.getDatabase()["tag"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Tag()
        return cls._instance

    def get_tag_by_id(self, tag_id):
        tag_found = self._collection.find_one({'id': int(tag_id)})
        if tag_found:
            tag_found['_id'] = str(tag_found['_id'])
        return tag_found
