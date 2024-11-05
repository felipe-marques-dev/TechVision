from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from usuario.models import CarrinhoItem, User, Carrinho
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from .models import Pedido, PedidoItem
from produtos.models import Produto
from .serializers import CompraItemSerializer
# Create your views here.
class CompraCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        emailBody= request.data.get('email')
        products = request.data.get('products')
        user = User.objects.get(email=emailBody)
        PedidoAtual = Pedido.objects.create(user= user, status='Aprovado')
        if products:
            for id in products:
                produtoDesejado = Produto.objects.get(product_id = id)
                PedidoItem.objects.create(pedido= PedidoAtual, produto = produtoDesejado, quantity = 1)
            return Response({"data": "Pedido Criado!"}, status=status.HTTP_200_OK)


class CompraInfo(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)   
    def post(self, request):
        emailBody= request.data.get('email')
        pedidoBody= request.data.get('pedido_id')
        user = User.objects.get(email=emailBody)
        pedidos = Pedido.objects.filter(user_id = user, delivery_id = pedidoBody ) 
        todos_itens = []
        for pedido in pedidos:
            todos_itens.extend(pedido.itens.all())

        serializer = CompraItemSerializer(todos_itens, many=True)

        return Response({"pedidos": serializer.data}, status=status.HTTP_200_OK)