from . import views
from django.urls import path, include
from .views import ProductListCreate, ProductDetail, CategoryList

urlpatterns = [
    path('itens/', ProductListCreate.as_view(), name='product-list-create'),
    path('itens/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='categories')
]
