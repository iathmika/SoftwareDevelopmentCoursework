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

    def get_club_by_id(self, club_id):
        club_found = self._collection.find_one({"id": int(club_id)})
        if club_found:
            club_found['_id'] = strclub_found['_id'])
        return club_found

