from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.serializers import ModelSerializer
from .models import *

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
        user_obj.first_name = clean_data['first_name']
        user_obj.last_name = clean_data['last_name']
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        password = clean_data['password']
        user = authenticate(username=clean_data['email'], password=password)
        
        if not user:
            raise ValidationError('usuario nao encontrado')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'first_name', 'last_name')

class CarrinhoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarrinhoItem
        fields = ('cartitem_id', 'cart', 'produto', 'quantity', 'price' )


class UserInfoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields= '__all__'