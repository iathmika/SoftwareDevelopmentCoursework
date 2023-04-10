import datetime
import re

from bson import ObjectId

from dao.database import MongoDBClient


class Game:
    _instance = None

    _collection = MongoDBClient.getDatabase()["game"]

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

    def get_by_name_regex(self, _name):
        regex = re.compile(_name, re.IGNORECASE)
        query = {"name": {"$regex": regex}}
        obj_list = list(self._collection.find(query))
        if obj_list:
            for obj in obj_list:
                obj['_id'] = str(obj['_id'])
        return obj_list

    def insert_one(self, data):
        return self._collection.insert_one(data)

    def update_by_id(self, _id, data):
        obj_id = ObjectId(_id)
        self._collection.update_one({'_id': obj_id}, {'$set': data})

    def delete_by_id(self, _id):
        obj_id = ObjectId(_id)
        self._collection.delete_one({'_id': obj_id})

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Game()
        return cls._instance

    # Insert games initially
    def insert_games(self):
        d = datetime.datetime.strptime("2013-10-13T10:53:53.000Z", "%Y-%m-%dT%H:%M:%S.000Z")
        self._collection.insert_one({"name": "Mario Kart",
                                     "description": "Mario Kart is a kart racing game featuring several "
                                                    "single and multiplayer modes. During the game, "
                                                    "players take control of one of eight Mario franchise "
                                                    "characters, each with differing capabilities, "
                                                    "and drive karts around tracks with a Mario franchise "
                                                    "theme.",
                                     "publisher": "nintendo",
                                     "release_date": d})


if __name__ == "__main__":

    game_data = Game.getInstance()
    game_data.insert_games()
    # displaying all games in the collection "games" in the database
    games = game_data.get_all_games()
    for game in games:
        print(game)
