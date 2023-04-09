# Create your models here.

from dao.database import MongoDBClient


class Club:
    _instance = None
    _collection = MongoDBClient.getDatabase()["club"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Club()
        return cls._instance

    def get_all(self):
        obj_list = list(self._collection.find({}))
        if obj_list:
            for obj in obj_list:
                obj['_id'] = str(obj['_id'])
        return obj_list

    def get_by_id(self, _id):
        obj_found = self._collection.find_one({'id': int(_id)})
        if obj_found:
            obj_found['_id'] = str(obj_found['_id'])
        return obj_found

    def insert_one(self, data):
        self._collection.insert_one(data)

    def update_by_id(self, _id, data):
        self._collection.update_one({'id': int(_id)}, {'$set': data})

    def delete_by_id(self, _id):
        self._collection.delete_one({'id': int(_id)})
