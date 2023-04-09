from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.club),
    path('all', views.club_all),
]
