from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path('compra-create', views.CompraCreate.as_view(), name='compra'),
]