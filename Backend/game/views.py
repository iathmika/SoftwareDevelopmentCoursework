from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
import json

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


@csrf_exempt
def game(request):
    game_model = Game.getInstance()
    if request.method == 'GET':
        game_id = request.GET.get('id')
        game_found = game_model.get_game_by_id(game_id)
        if game_found:
            return JsonResponse(game_found)
        else:
            return JsonResponse({'message': 'Game not found'}, status=404)

    elif request.method == 'POST':
        data = json.loads(request.body)
        game_id = data.get('id')
        if game_model.get_game_by_id(game_id):
            return JsonResponse({'message': 'Game with this ID already exists'}, status=400)
        else:
            game_model.insert_one_game(data)
            return JsonResponse({'message': 'Game created successfully'}, status=201)

    elif request.method == 'PUT':
        game_id = request.GET.get('id')
        game_found = game_model.get_game_by_id(game_id)
        if game_found:
            data = json.loads(request.body)
            game_model.update_game_by_id(game_id, data)
            return JsonResponse({'message': 'Game updated successfully'}, status=200)
        else:
            return JsonResponse({'message': 'Game not found'}, status=404)

    elif request.method == 'DELETE':
        game_id = request.GET.get('id')
        game_found = game_model.get_game_by_id(game_id)
        if game_found:
            game_model.delete_game_by_id(game_id)
            return JsonResponse({'message': 'Game deleted successfully'})
        else:
            return JsonResponse({'message': 'Game not found'}, status=404)


def game_all(request):
    game_model = Game.getInstance()

    if request.method == 'GET':
        game_list = game_model.get_all_games()
        if game_list:
            return JsonResponse(game_list, safe=False, status=200)
        else:
            return JsonResponse({'message': 'No Game Exists'}, status=404)
