from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics, routers, serializers, viewsets
# Create your views here.


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# ViewSets define the view behavior.

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer