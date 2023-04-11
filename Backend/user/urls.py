from django.urls import path
from . import views

urlpatterns = [
 
    path('login/', views.login, name='login'),
    path('profile/', views.profile, name='profile'),
    path('user/logout/', views.logout, name='logout'),
    path('user/register/', views.register, name='register'),
]