from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User

def login(request):
    if request.method == "GET":
        return render(request, 'login.html')
    elif request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('senha')
        return HttpResponse("Login")
