from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.review),
    path('own', views.review_by_user_game),
    path('all', views.review_all),
]
