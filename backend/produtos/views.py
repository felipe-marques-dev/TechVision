from .models import Produto
from .serializers import ProductSerializer,CategorySerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Produto, Categoria
from django.db.models import Q
from rest_framework.views import APIView


# API de produtos
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Produto.objects.all().exclude(Q(product_id=24) | Q(product_id=25) | Q(product_id=26))
    serializer_class = ProductSerializer

    # Pega as permissões do usuario atual
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]


# API de produto individual 
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produto.objects.all().exclude(Q(product_id=24) | Q(product_id=25) | Q(product_id=26))
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


# API de categorias individual
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'name'  # Isso permite buscar por nome

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]


# Função que retorna os produtos que possuem correspondencia com o termo pesquisado
def sugestoes_produtos(request):
    termo_busca = request.GET.get('q', '')
    if termo_busca:
        produtos = Produto.objects.filter(
            Q(name__icontains=termo_busca) | 
            Q(description__icontains=termo_busca)
        ).values('product_id', 'name', 'description', 'foto_1', 'price', 'url_name').exclude(
            Q(product_id=24) | 
            Q(product_id=25) | 
            Q(product_id=26))[:5]  # Retorna os primeiros 5 resultados
        return JsonResponse(list(produtos), safe=False)
    return JsonResponse([], safe=False)


# API de produtos por categorias
class CategoryProducts(APIView):
    serializer_class = ProductSerializer

    # Restringe POST apenas para admins
    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return [AllowAny()]
    
    def get(self, request, name):
        category = Categoria.objects.get(name=name)
        category_id = category.category_id
        produtos = Produto.objects.filter(categoria=category_id)
        serializer = ProductSerializer(produtos, many=True, context={'request': request})
        return Response({'products': serializer.data})