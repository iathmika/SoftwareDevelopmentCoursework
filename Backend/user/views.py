from bson import ObjectId
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from game.models import Game
from .models import User
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
import json


# Create your views here.

@csrf_exempt
def login(request):
    if request.method == 'GET':
        user_id = request.GET.get('id')
        password = request.GET.get('password')
        if user_id is None or password is None:
            return JsonResponse({'message': 'Invalid username or password'}, safe=False, status=400)

        user = User.getInstance()
        if user.authenticate_user(request, user_id, password):
            return JsonResponse({'message': 'login success!'}, safe=False, status=200)
        else:
            return JsonResponse({'message': 'Invalid username or password!'}, safe=False, status=404)


@csrf_exempt
def account(request):
    if request.method == "GET":
        user_id = request.session.get('id')
        if not user_id:
            return JsonResponse({'message': 'please login first'}, safe=False, status=401)

        user = User.getInstance()
        user_profile = user.get_user_profile(user_id)
        return JsonResponse(user_profile, safe=False, status=200)

    if request.method == "POST":
        user_id = request.POST.get('user_id')
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        confirm_password = request.POST.get('confirm_password')

        if not user_id or not password:
            return JsonResponse({'message': 'Essential: user id and password'}, safe=False, status=400)

        # Check if the passwords match
        if password != confirm_password:
            return JsonResponse({'message': 'password and confirm password not match'}, safe=False, status=403)

        user = User.getInstance()
        user_profile = user.get_user_profile(user_id)
        # Check if the user already exists
        if user_profile:
            return JsonResponse({'message': 'User id is already taken'}, safe=False, status=403)

        # Create the new user
        games_list = []
        tag_list = []
        userdata = {"id": int(user_id),
                    "username": username,
                    "password": password,
                    "email": email,
                    "games": games_list,
                    "tags": tag_list}
        user.create_user(userdata)

    return JsonResponse({'message': 'account create success'}, safe=False, status=200)

    if request.method == "PUT":
        user_id = request.session.get('id')
        if not user_id:
            return JsonResponse({'message': 'please login first'}, safe=False, status=401)

        user = User.getInstance()
        _found = user.get_user_profile(user_id)
        if _found:
            data = json.loads(request.body)
            if 'id' in data:
                return JsonResponse({'message': 'user id can not be changed'}, status=403)
            user.update_user_profile(user_id, data)
            return JsonResponse({'message': 'Updated successfully'}, status=200)
        else:
            return JsonResponse({'message': 'Not found'}, status=404)

    if request.method == "DELETE":
        user_id = request.session.get('id')
        if not user_id:
            return JsonResponse({'message': 'please login first'}, safe=False, status=401)

        user = User.getInstance()
        user.delete_by_id(user_id)
        request.session.flush()
        return JsonResponse({'message': 'delete success'}, safe=False, status=200)


def logout(request):
    request.session.flush()
    return JsonResponse({'message': 'log out success'}, safe=False, status=200)


def get_user_collection(request):
    if request.method == 'GET':
        _model = User.getInstance()
        user_id = request.session.get('id')
        if not user_id:
            return JsonResponse({'message': 'please login first'}, safe=False, status=401)

        _found = _model.get_user_profile(user_id)
        if not _found:
            return JsonResponse({'message': 'User not found'}, status=404)

        # get review and rating
        game_model = Game.getInstance()
        game_list = []
        for _idx in _found['games']:
            game_list.append(game_model.get_by_id(ObjectId(_idx)))

        return JsonResponse({
            'id': user_id,
            'games': game_list,
        }, safe=False, status=200)


def get_tags(request):
    if request.method == 'GET':
        _model = User.getInstance()
        user_id = request.session.get('id')
        if not user_id:
            return JsonResponse({'message': 'please login first'}, safe=False, status=401)

        _found = _model.get_user_profile(user_id)
        if not _found:
            return JsonResponse({'message': 'User not found'}, status=404)

        # get review and rating
        game_model = Game.getInstance()
        tag_list = []
        for _idx in _found['tags']:
            tag_list.append(game_model.get_by_id(ObjectId(_idx)))

        return JsonResponse({
            'id': user_id,
            'games': tag_list,
        }, safe=False, status=200)
