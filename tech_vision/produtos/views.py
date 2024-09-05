from django.shortcuts import render
from .models import Produto
from .serializers import ProductSerializer
from rest_framework import generics
from rest_framework import routers, serializers, viewsets
# Create your views here.


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer


# ViewSets define the view behavior.

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer