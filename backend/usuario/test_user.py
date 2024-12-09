import pytest
from django.urls import reverse
from .models import *
from rest_framework import status
from rest_framework.test import APIClient
# ====================================
# Forma de usar:
# pytest --no-migrations 
# ====================================
# -- DISCLAIMER -- 
# Caso o pytest seja executado 
# sem o argumento --no-migrations causará um erro no teste
# devido a problemas de foreign key relacionados ao MySQL
# ====================================


# usuario mock para ser usado em testes
@pytest.fixture
def user():
    return User.objects.create_user(
        first_name = 'nome',
        last_name = 'sobrenome',
        email = 'emailteste@gmail.com', 
        password = '12345678'
        )


# testa a funcao de login de usuario
@pytest.mark.django_db
def test_user_login(user):
    client = APIClient()
    response = client.post('/accounts/login/',
        data={
            'email': user.email,
            'password': '12345678'
        }
    )
    assert response.status_code == status.HTTP_200_OK


# testa a funcao de cadastro de usuario
@pytest.mark.django_db
def test_user_signup():
    client = APIClient()
    response = client.post('/accounts/cadastro/',
        data = { 
            "first_name": "lucas", 
            "last_name": "leite", 
            "email": "felipe1234566@gmail.com", 
            "password": "password" 
            }
    )
    assert response.status_code == status.HTTP_201_CREATED

