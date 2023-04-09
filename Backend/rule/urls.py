from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.rule),
]