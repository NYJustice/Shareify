from django import views
from django.urls import path
from . import views

app_name = 'shareify'
urlpatterns = [
    path('', views.send_homepage, name='homepage'),
]