import pytest
from django.urls import reverse
from .models import *
from rest_framework import status
from rest_framework.test import APIClient
from usuario.models import User
# ====================================
# Forma de usar:
# pytest --no-migrations 
# ====================================
# -- DISCLAIMER -- 
# Caso o pytest seja executado 
# sem o argumento --no-migrations causará um erro no teste
# devido a problemas de foreign key relacionados ao MySQL
# ====================================


# produto mock para ser usado em testes
@pytest.fixture
def product(db):

    return Produto.objects.create(
    name='microondas', 
    sub_category='cozinha',
    description= 'microondas top',
    estoque = 999,
    price = 500,
    promotion = True, 
    )

# categoria mock para ser usada em testes
@pytest.fixture
def category():
    return Categoria.objects.create(
        name='Eletrônico'
    )


# usuario mock para ser usado em testes
@pytest.fixture
def user():
    return User.objects.create_user(
        first_name = 'nome',
        last_name = 'sobrenome',
        email = 'emailteste@gmail.com', 
    )

# testa a funcao de retornar os produtos
@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_products_view(client):
    url = reverse('product-list-create')
    response = client.get(url)
    assert response.status_code == 200


# testa a funcao de retornar um produto individual
@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_individual_product_view(product):
    client = APIClient()
    response = client.get(f'/produtos/itens/{product.url_name}/')
    assert response.status_code == status.HTTP_200_OK



# testa a funcao de retornar categorias
@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_categorias_view(category):
    client = APIClient()
    response = client.get('/produtos/categories/')
    assert response.status_code == status.HTTP_200_OK


# testa a funcao de retornar uma categoria individual 
@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_individual_categories(category):
    client = APIClient()
    response = client.get(f'/produtos/categories/{category.name}/')
    assert response.status_code == status.HTTP_200_OK


# testa a tentativa de post por usuarios nao autenticados na view de produtos
@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_products_view_post_unlogged():
    client = APIClient()
    response = client.post('/produtos/itens/',
    data= {
        'name': 'geladeira',
        'sub_category': 'testing',
        'description': 'geladeira',
        'estoque': 100,
        'price': 100,
        'promotion': False,
    }                       
    )
    
    assert response.status_code == status.HTTP_403_FORBIDDEN
