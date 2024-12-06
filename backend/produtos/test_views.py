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



@pytest.fixture # cria um produto que será usado para multiplos testes
def product(db):

    return Produto.objects.create(
    name='microondas', 
    sub_category='cozinha',
    description= 'microondas top',
    estoque = 999,
    price = 500,
    promotion = True, 
    )

@pytest.fixture # cria uma uma categoria que será usada para multiplos testes
def category():
    return Categoria.objects.create(
        name='Eletrônico'
    )

@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_products_view(client):
    url = reverse('product-list-create')
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_individual_product_view(product):
    client = APIClient()
    response = client.get(f'/produtos/itens/{product.url_name}/')
    assert response.status_code == status.HTTP_200_OK



@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_categorias_view(category):
    client = APIClient()
    response = client.get('/produtos/categories/')
    assert response.status_code == status.HTTP_200_OK


@pytest.mark.django_db # marca que o teste ira interagir com o banco de dados
def test_individual_categories(category):
    client = APIClient()
    response = client.get(f'/produtos/categories/{category.name}/')
    assert response.status_code == status.HTTP_200_OK