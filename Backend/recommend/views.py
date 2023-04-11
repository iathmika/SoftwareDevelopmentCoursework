from bson import ObjectId
from django.http import JsonResponse

from game.models import Game
from tag.models import Tag
from user.models import User


def user_recommend(request):
    if request.method == 'GET':
        # _model = User.getInstance()
        #
        # _id = request.session.get('id')
        # _found = _model.get_by_id(_id)
        #
        # if not _found:
        #     return JsonResponse({'message': 'user not found'}, status=404)

        # get tag
        # tag_list = []
        # for _idx in _found['tag']:
        #     tag_list.append(Tag.getInstance().get_by_id(ObjectId(_idx)))

        # Todo: Implement a function to recommend games based on the user's tags
        #

        game_list = Game.getInstance().get_all()
        if len(game_list) > 6:
            game_list = game_list[:6]

        return JsonResponse({
                'game': game_list,
            }, safe=False, status=200)

