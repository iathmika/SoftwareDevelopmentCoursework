from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.game),
    path('all', views.game_all),
    path('info', views.game_info),
    path('search', views.search_by_name),
    path('search/collection', views.search_by_name_in_collection),

    path('test', views.game_test),

]