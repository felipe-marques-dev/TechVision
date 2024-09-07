from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_list_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializers import UserSerializer

# Login
@api_view(['POST'])
def login(request):
    # Retorna o usuario requisitado
    user = get_list_or_404(User, email=request.data['email'])
    # Verifica se o campo de senha esta correto
    # Caso não esteja, é retornado HTTP_404_NOT_FOUND
    for user in user:
        if not user.check_password(request.data['password']):
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    # Pega o token existente do usuario e o retorna
    # Ou cria um token se o usuario não tiver
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token": token.key, "user": serializer.data})

# Cadastro
@api_view(['POST'])
def cadastro(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(first_name=request.data['first_name'], last_name=request.data['last_name'], email=request.data['email'], password=request.data['password'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token": token.key, "user": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Validar o token
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def validar_token(request):
    return Response({"Usuario liberado {}".format(request.user.email)})