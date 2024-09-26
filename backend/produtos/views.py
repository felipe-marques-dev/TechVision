from django.shortcuts import render
from .models import Produto
from .serializers import ProductSerializer,CategorySerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Produto, Categoria
from django.db.models import Q
from django.db.models import Count
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
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
    queryset = Categoria.objects.all()
    serializer_class = CategorySerializer
    

    # Pega as permissões do usuario atual
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'name'  # Isso permite buscar por nome

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]

def sugestoes_produtos(request):
    termo_busca = request.GET.get('q', '')
    if termo_busca:
        produtos = Produto.objects.filter(
            Q(name__icontains=termo_busca) | 
            Q(description__icontains=termo_busca)
        ).values('product_id', 'name', 'description', 'foto_1', 'price', 'url_name')[:5]  # Retorna os primeiros 5 resultados
        return JsonResponse(list(produtos), safe=False)
    return JsonResponse([], safe=False)

class CategoryProducts(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    
    serializer_class = ProductSerializer
    def get(self, request, name):
        category = Categoria.objects.get(name=name)
        category_id = category.category_id
        print(category_id)
        produtos = Produto.objects.filter(categoria=category_id)
        print(produtos)
        serializer = ProductSerializer(produtos, many=True, context={'request': request})
        return Response({'products': serializer.data})