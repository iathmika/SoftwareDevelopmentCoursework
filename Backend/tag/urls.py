from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.tag),
    path('all', views.tag_all),
]
