from django.urls import path
from . import views

urlpatterns = [
    # path('all', views.game_all),
    path('crud', views.game),
    path('all', views.game_all),
    path('test', views.game_test),
]