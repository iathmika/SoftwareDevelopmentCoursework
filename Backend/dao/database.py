from pymongo import MongoClient


class MongoDBClient:
    _client = None


    @classmethod
    def getInstance(cls):
        _url = "mongodb+srv://sdowner:123456sd@cluster0.cqxqh2d.mongodb.net/?retryWrites=true&w=majority"
        if cls._client is None:
            cls._client = MongoClient(_url)
        return cls._client

    @staticmethod
    def getDatabase():
        _db = MongoDBClient.getInstance()["GCM"]
        return _db


