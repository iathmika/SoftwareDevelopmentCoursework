# Create your models here.
from dao.database import MongoDBClient
from django.contrib.sessions.backends.db import SessionStore


class User:
    _instance = None
    _collection = MongoDBClient.getDatabase()["user"]

    @classmethod
    def getInstance(cls):
        if cls._instance is None:
            cls._instance = User()
        return cls._instance

    def get_user_profile(self, user_id):
        user_details = self._collection.find_one({'id': int(user_id)})
        if user_details:
            user_details['_id'] = str(user_details['_id'])
        return user_details

    def update_user_profile(self, user_id, data):
        self._collection.update_one({'id': user_id}, {'$set': data})

    def authenticate_user(self, request, user_id, password):
        user_found = self._collection.find_one({'id': int(user_id), "password": password})
        if user_found:
            request.session['id'] = user_found['id']
            print("User authentication successful")
            return True
        else:
            print("Incorrect username or password")
            return False

    def delete_by_id(self, user_id):
        self._collection.delete_one({'id': user_id})

    def create_user(self, user_data):
        print("creating user with user data ", user_data)
        return self._collection.insert_one(user_data)


if __name__ == "__main__":
    user = User.getInstance()
    new_user = {"id": 102, "username": "athmika", "password": "secret", "games": [101, 103]}
    user.create_user(new_user)
    print(user.get_user_profile(102))
