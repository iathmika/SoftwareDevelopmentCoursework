from django.urls import path
from . import views

urlpatterns = [
    # path('all', views.game_list),
    path('test', views.game_test),
]