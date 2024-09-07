from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path('cadastro', views.cadastro),
    re_path('validar_token', views.validar_token),
    re_path('login', views.login)
]
