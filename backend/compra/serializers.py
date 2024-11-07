from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.serializers import ModelSerializer
from .models import *
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from produtos.serializers import ProductSerializer
from .models import *


class CompraInfoSerializer(serializers.ModelSerializer):
    Model = Pedido

    class Meta:
        model = ['delivery_id', 'status', 'user_id']


class CompraItemSerializer(serializers.ModelSerializer):
        produto = ProductSerializer()
        class Meta:
             model = PedidoItem
             fields = ['pedidoItem_id', 'pedido_id', 'produto', 'quantity']