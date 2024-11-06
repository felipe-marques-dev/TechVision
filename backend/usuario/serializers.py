from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework.serializers import ModelSerializer
from .models import *
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from produtos.serializers import ProductSerializer
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
        carrinho = Carrinho.objects.create(user_id=user_obj.id)
        return user_obj, carrinho

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


class UserInfoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields= '__all__'

    def updatePassword(self, user, clean_data):
        password = clean_data.get('password')
        if password:
            user.set_password(password)
            user.save()


class EmailSerializer(serializers.Serializer):
   
    class Meta:
        model = User
        fields = ("email",)


class ProdutoSerializer(serializers.Serializer):

    class Meta:
        model = Produto
        fields = "__all__"

class CarrinhoItemSerializer(serializers.ModelSerializer):
    produto = ProductSerializer()
    class Meta:
        model = CarrinhoItem
        fields = ["produto", "quantity"]    

class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField()
    class Meta:
        model = User
        fields = ("password",)

    def validate(self, clean_data):
        password = clean_data.get('password')
        token = self.context.get("kwargs").get("token")
        encoded_pk = self.context.get("kwargs").get("encoded_pk")
    
        if token is None or encoded_pk is None:
            raise ValidationError("Dados ausentes")
        
        pk = urlsafe_base64_decode(encoded_pk).decode()
        user = User.objects.get(pk=pk)

        if not PasswordResetTokenGenerator().check_token(user, token):
            raise ValidationError("Token invalido")

        if password is None:
            raise ValidationError("É necessário informar uma senha")

        
        user.set_password(password)
        user.save()
        return clean_data