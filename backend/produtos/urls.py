from . import views
from django.urls import path, include
from .views import ProductListCreate, ProductDetail, CategoryList,sugestoes_produtos, CategoryDetail

urlpatterns = [
    path('itens/', ProductListCreate.as_view(), name='product-list-create'),
    path('itens/<slug:url_name>/', ProductDetail.as_view(), name='product-detail'),
    path('itens/<int:pk>/', CategoryDetail.as_view(), name='categoria-detail'),
    path('categories/', CategoryList.as_view(), name='categories'),
    path('sugestoes/', sugestoes_produtos, name='sugestoes_produtos')
]
