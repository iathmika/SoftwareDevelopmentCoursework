from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.rule),
    path('all', views.rule_all)
]