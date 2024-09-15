from django.shortcuts import render
from .models import Produto
from .serializers import ProductSerializer,CategorySerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny


# API de produtos
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer

    # Pega as permissões do usuario atual
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]


# API de produto individual 
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'url_name'

    # Pega as permissões do usuario atual
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAdminUser()]

# API de categorias
class CategoryList(generics.ListCreateAPIView):
    queryset = Produto.objects.values('category').distinct()
    serializer_class = CategorySerializer

    # Pega as permissões do usuario atual
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]
