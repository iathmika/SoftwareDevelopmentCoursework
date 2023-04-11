from django.urls import path
from . import views

urlpatterns = [

    path('login', views.login, name='login'),
    path('account', views.account, name='profile'),
    path('game', views.get_user_collection, name='collection'),
    path('logout', views.logout, name='logout')

]
