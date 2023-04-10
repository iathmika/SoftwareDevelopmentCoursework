from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Review


# Create your views here.

@csrf_exempt
def review(request):
    _model = Review.getInstance()
    if request.method == 'GET':
        _id = request.GET.get('id')
        _found = _model.get_by_id(_id)
        if _found:
            return JsonResponse(_found)
        else:
            return JsonResponse({'message': 'Not found'}, status=404)

    elif request.method == 'POST':
        data = json.loads(request.body)
        result = _model.insert_one(data)
        if result.acknowledged:
            return JsonResponse({
                '_id': str(result.inserted_id),
                'message': 'Created successfully'
            }, status=201)
        else:
            return JsonResponse({'message': 'Fail to create'}, status=500)

    elif request.method == 'PUT':
        _id = request.GET.get('id')
        _found = _model.get_by_id(_id)
        if _found:
            data = json.loads(request.body)
            _model.update_by_id(_id, data)
            return JsonResponse({'message': 'Updated successfully'}, status=200)
        else:
            return JsonResponse({'message': 'Not found'}, status=404)

    elif request.method == 'DELETE':
        _id = request.GET.get('id')
        _found = _model.get_by_id(_id)
        if _found:
            _model.delete_by_id(_id)
            return JsonResponse({'message': 'Deleted successfully'})
        else:
            return JsonResponse({'message': 'Not found'}, status=404)


def review_all(request):
    _model = Review.getInstance()

    if request.method == 'GET':
        _list = _model.get_all()
        if _list:
            return JsonResponse(_list, safe=False, status=200)
        else:
            return JsonResponse({'message': 'Not Exists'}, status=404)


def review_by_user_game(request):
    _model = Review.getInstance()
    if request.method == 'GET':
        uid = request.GET.get('uid')
        gid = request.GET.get('gid')
        _found = _model.get_by_user_game(uid, gid)
        if _found:
            return JsonResponse(_found)
        else:
            return JsonResponse({'message': 'Not found'}, status=404)
