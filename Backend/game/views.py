from bson import ObjectId
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from review.models import Review
from rule.models import Rule
from seller.models import Seller
from tag.models import Tag
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
        game_found = game_model.get_by_id(game_id)
        if game_found:
            return JsonResponse(game_found)
        else:
            return JsonResponse({'message': 'Game not found'}, status=404)

    elif request.method == 'POST':
        data = json.loads(request.body)
        result = game_model.insert_one(data)
        if result.acknowledged:
            return JsonResponse({
                '_id': str(result.inserted_id),
                'message': 'Game created successfully'
            }, status=201)
        else:
            return JsonResponse({'message': 'Fail to create'}, status=500)

    elif request.method == 'PUT':
        game_id = request.GET.get('id')
        game_found = game_model.get_by_id(game_id)
        if game_found:
            data = json.loads(request.body)
            game_model.update_by_id(game_id, data)
            return JsonResponse({'message': 'Game updated successfully'}, status=200)
        else:
            return JsonResponse({'message': 'Game not found'}, status=404)

    elif request.method == 'DELETE':
        game_id = request.GET.get('id')
        game_found = game_model.get_by_id(game_id)
        if game_found:
            game_model.delete_by_id(game_id)
            return JsonResponse({'message': 'Game deleted successfully'})
        else:
            return JsonResponse({'message': 'Game not found'}, status=404)


def game_all(request):
    game_model = Game.getInstance()

    if request.method == 'GET':
        game_list = game_model.get_all()
        if game_list:
            return JsonResponse(game_list, safe=False, status=200)
        else:
            return JsonResponse({'message': 'No Game Exists'}, status=404)


def game_info(request):
    _model = Game.getInstance()
    if request.method == 'GET':
        _id = request.GET.get('id')
        _found = _model.get_by_id(_id)

        if not _found:
            return JsonResponse({'message': 'Game not found'}, status=404)

        # get review and rating
        review_list = []
        for _idx in _found['review']:
            review_list.append(Review.getInstance().get_by_id(ObjectId(_idx)))

        rating_sum = 0.0
        for review in review_list:
            rating_sum += float(review.get('rating'))

        rating = rating_sum / len(review_list)

        # get rule
        rule_list = []
        for _idx in _found['rule']:
            rule_list.append(Rule.getInstance().get_by_id(ObjectId(_idx)))

        # get tag
        tag_list = []
        for _idx in _found['tag']:
            tag_list.append(Tag.getInstance().get_by_id(ObjectId(_idx)))

        # get seller
        seller_list = []
        for _idx in _found['seller']:
            seller_list.append(Seller.getInstance().get_by_id(ObjectId(_idx)))

        return JsonResponse({
                'rating': rating,
                'reviews': review_list,
                'sellers': seller_list,
                'tags': tag_list,
                'rules': rule_list,
            }, safe=False, status=200)

