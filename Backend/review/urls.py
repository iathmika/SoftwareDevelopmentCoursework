from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.review),
    path('all', views.review_all),
]
