from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def send_homepage(request):
    index = open('build/index.html').read()
    return HttpResponse(index)