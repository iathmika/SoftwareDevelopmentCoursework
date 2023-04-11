from django.urls import path
from . import views

urlpatterns = [

    path('login', views.login, name='login'),
    path('account', views.account, name='account'),
    path('game', views.get_user_collection),
    path('tag', views.get_tags),
    path('logout', views.logout, name='logout')

]
