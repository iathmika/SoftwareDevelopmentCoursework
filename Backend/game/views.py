from django.http import JsonResponse
from django.shortcuts import render

from .models import Game


# Create your views here.

def game_test(request):

    if request.method == 'GET':
        Game.getInstance().insert_games()
        data = {
            'message': 'Hello, world!',
            'status': 'success'
        }
        return JsonResponse(data, status=200)
