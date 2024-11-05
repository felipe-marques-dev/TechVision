from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from usuario.models import CarrinhoItem, User, Carrinho
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from .models import Pedido, PedidoItem
# Create your views here.
class CompraCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        emailBody= request.data.get('email')
        user = User.objects.get(email=emailBody)
        cart = Carrinho.objects.get(user_id  = user)
        cartItem = cart.itens.all()
        PedidoAtual = Pedido.objects.create(user= user, status='Aprovado')
        for itens in cartItem:
            PedidoItem.objects.create(pedido= PedidoAtual, produto = itens.produto_id, quantity = itens.quantity)