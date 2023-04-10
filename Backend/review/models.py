# Create your models here.
from bson import ObjectId

from dao.database import MongoDBClient


class Review:
    _instance = None
    _collection = MongoDBClient.getDatabase()["review"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Review()
        return cls._instance

    def get_all(self):
        obj_list = list(self._collection.find({}))
        if obj_list:
            for obj in obj_list:
                obj['_id'] = str(obj['_id'])
        return obj_list

    def get_by_id(self, _id):
        obj_id = ObjectId(_id)
        obj_found = self._collection.find_one({'_id': obj_id})
        if obj_found:
            obj_found['_id'] = str(obj_found['_id'])
        return obj_found

    def insert_one(self, data):
        return self._collection.insert_one(data)

    def update_by_id(self, _id, data):
        obj_id = ObjectId(_id)
        self._collection.update_one({'_id': obj_id}, {'$set': data})

    def delete_by_id(self, _id):
        obj_id = ObjectId(_id)
        self._collection.delete_one({'_id': obj_id})