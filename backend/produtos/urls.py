from . import views
from django.urls import path, include
from .views import ProductListCreate, ProductDetail

<<<<<<< HEAD:backend/produtos/urls.py
=======

>>>>>>> 620016509821c16603e5e28e5103150a44f0e120:tech_vision/produtos/urls.py
urlpatterns = [
    path('itens/', ProductListCreate.as_view(), name='product-list-create'),
    path('itens/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
]
