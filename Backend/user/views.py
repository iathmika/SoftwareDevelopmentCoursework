from bson import ObjectId
from django.shortcuts import render, redirect

from game.models import Game
from .models import User
from django.contrib import messages
from django.http import HttpResponse, JsonResponse
import json


# Create your views here.
def login(request):
    if request.method == 'POST':
        user_id = request.POST.get('user_id')
        password = request.POST.get('password')
        user = User.getInstance()
        if user.authenticate_user(request, user_id, password):
            # return HttpResponse('Login successful')
            messages.success(request, 'You are now logged in')
            return redirect('profile')
        else:
            # return HttpResponse('Login failed')
            messages.error(request, 'Login Failed. Incorrect userid or password')
            return redirect('login')
    else:
        return render(request, 'login.html')


def profile(request):
    if request.method == "GET":
        user_id = request.session.get('id')
        user = User.getInstance()
        user_profile = user.get_user_profile(user_id)
        return render(request, 'profile.html', {'user_profile': user_profile})


def logout(request):
    request.session.flush()
    return redirect('login')


def register(request):
    if request.method == 'POST':
        user_id = request.POST.get('user_id')
        print("user id is ", user_id)
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST['email']
        confirm_password = request.POST['confirm_password']

        # Check if the passwords match
        if password != confirm_password:
            messages.error(request, 'Passwords do not match')
            return redirect('register')
        user = User.getInstance()
        user_profile = user.get_user_profile(user_id)
        # Check if the user already exists
        if user_profile:
            print("User exists with userid ", user_id)
            messages.error(request, 'Userid is already taken')
            return redirect('register')
        print("Creating new user")
        # Create the new user
        if request.body:
            print("request body: ", request.body)
            # userdata = json.loads(request.body)
            games_list = []
            userdata = {"id": int(user_id), "username": username, "password": password, "email": email,
                        "games": games_list}
            user.create_user(userdata)

        # Login the new user and redirect to the profile page
        print("Logging in with the newly created account")
        user_profile = user.get_user_profile(user_id)
        print("user profile: ", user_profile)
        if user_profile:
            request.session['id'] = user_profile['id']
            messages.success(request, 'Account created successfully')
            return redirect('profile')

    return render(request, 'register.html')


def delete_account(request):
    user = User.getInstance()
    # if request.method == 'DELETE':
    user_id = request.GET.get('id')
    user.delete_by_id(user_id)
    print("User account with user id ", user_id, " deleted successfully.")
    request.session.flush()
    return redirect('login')


def get_user_collection(request):
    _model = User.getInstance()
    if request.method == 'GET':
        _id = request.GET.get('id')
        _found = _model.get_user_profile(_id)

        if not _found:
            return JsonResponse({'message': 'User not found'}, status=404)

        # get review and rating
        game_model = Game.getInstance()
        game_list = []
        for _idx in _found['games']:
            game_list.append(game_model.get_by_id(ObjectId(_idx)))

        return JsonResponse({
            'id': _id,
            'games': game_list,
        }, safe=False, status=200)
