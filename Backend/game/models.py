import datetime
from dao.database import MongoDBClient


class Game:
    _instance = None

    _collection = MongoDBClient.getDatabase()["game"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = Game()
        return cls._instance

    # Insert games initially
    def insert_games(self):
        print("inserting game")
        d = datetime.datetime.strptime("2013-10-13T10:53:53.000Z", "%Y-%m-%dT%H:%M:%S.000Z")
        for i in range(100, 105):
            if self.get_game_by_id(i):
                print("already inserted")

            else:
                self._collection.insert_one({"id": i, "name": "Mario Kart",
                                             "description": "Mario Kart is a kart racing game featuring several "
                                                            "single and multiplayer modes. During the game, "
                                                            "players take control of one of eight Mario franchise "
                                                            "characters, each with differing capabilities, "
                                                            "and drive karts around tracks with a Mario franchise "
                                                            "theme.",
                                             "publisher": "nintendo",
                                             "release_date": d})

    def get_all_games(self):
        return list(self._collection.find({}))

    def get_game_by_id(self, game_id):
        return self._collection.find_one({"id": game_id})

    def get_game_fields(self, game_id):
        game_found = self._collection.find_one({"id": game_id})
        print(game_found)
        name = game_found.get("name")
        description = game_found.get("description")
        publisher = game_found.get("publisher")
        release_date = game_found.get("release_date")

        return name, description, publisher, release_date


if __name__ == "__main__":

    game_data = Game.getInstance()
    game_data.insert_games()
    # displaying all games in the collection "games" in the database
    games = game_data.get_all_games()
    for game in games:
        print(game)
