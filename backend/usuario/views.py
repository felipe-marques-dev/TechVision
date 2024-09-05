from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .forms import UsuarioForm
from django.shortcuts import redirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from . serializer import *

class UserView(APIView):
    def get(self, request):
        output = [{'first_name':output.first_name, 'last_name':output.last_name, 'email':output.email, 'is_verified':output.is_verified, 'is_active':output.is_active, 'is_staff':output.is_staff}
                  for output in User.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@login_required
def home(request):
    return render(request, 'home.html')


def cadastro(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # loga o usuário após o cadastro
            return JsonResponse({'redirect_url': '/accounts/home/'})
        else:
            return JsonResponse({'success': False, 'errors': form.errors.as_json()})
    else:
        form = UsuarioForm()
    return render(request, 'cadastro.html', {'form': form})