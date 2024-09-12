from django.shortcuts import render
from .models import Produto
from .serializers import ProductSerializer,CategorySerializer
from rest_framework import generics, routers, serializers, viewsets
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response

class ProductListCreate(generics.ListCreateAPIView):

    authentication_classes = [SessionAuthentication]
    permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)

    queryset = Produto.objects.all()
    serializer_class = ProductSerializer
    


# ViewSets define the view behavior.

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListCreateAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)

    queryset = Produto.objects.values('category').distinct()
    serializer_class = CategorySerializer
