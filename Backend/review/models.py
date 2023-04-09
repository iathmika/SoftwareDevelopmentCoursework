# Create your models here.
import datetime

from pymongo import MongoClient

from dao.database import MongoDBClient


class Review:
    _instance = None
    _collection = MongoDBClient.getDatabase()["review"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Review()
        return cls._instance

