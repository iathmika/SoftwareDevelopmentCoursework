from django.urls import path
from . import views

urlpatterns = [
 
    path('login/', views.login, name='login'),
    path('profile/', views.profile, name='profile'),
    path('game', views.get_user_collection, name='collection'),
    path('user/logout', views.logout, name='logout'),
    path('user/register', views.register, name='register'),
    path('user/delete_account', views.delete_account, name='delete_account'),
]