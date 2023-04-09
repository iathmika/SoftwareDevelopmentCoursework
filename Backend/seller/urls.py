from django.urls import path
from . import views

urlpatterns = [
    path('crud', views.seller),
    path('all', views.seller_all),
]
