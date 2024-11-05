from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from usuario.models import CarrinhoItem, User, Carrinho
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from .models import Pedido, PedidoItem
from produtos.models import Produto
# Create your views here.
class CompraCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        emailBody= request.data.get('email')
        products = request.data.get('products')
        user = User.objects.get(email=emailBody)
        cart = Carrinho.objects.get(user_id  = user)
        PedidoAtual = Pedido.objects.create(user= user, status='Aprovado')
        for id in products:
            produtoDesejado = Produto.objects.get(product_id = id)
            PedidoItem.objects.create(pedido= PedidoAtual, produto = produtoDesejado, quantity = 1)
        return Response({"data": "Pedido Criado!"}, status=status.HTTP_200_OK)
        