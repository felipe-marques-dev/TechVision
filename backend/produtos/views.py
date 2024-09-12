from django.shortcuts import render
from .models import Produto
from .serializers import ProductSerializer,CategorySerializer
from rest_framework import generics, routers, serializers, viewsets
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from django.http import HttpResponse

class ProductListCreate(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer
    def check_permission(self, request):
        if request.method == 'POST' and  permission_classes == (permissions.IsAuthenticated, permissions.IsAdminUser):
            authentication_classes = [SessionAuthentication]
            permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
   


# ViewSets define the view behavior.

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListCreateAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = (permissions.IsAuthenticated, permissions.IsAdminUser)

    queryset = Produto.objects.values('category').distinct()
    serializer_class = CategorySerializer

def my_view(request):
    # Você pode acessar dados da solicitação, como:
    user_agent = request.META.get('HTTP_USER_AGENT', 'unknown')
    return HttpResponse(f'Your user agent is {user_agent}')