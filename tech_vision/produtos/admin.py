
from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('product_id','name','category', 'sub_category','description', 'estoque', 'price', 'promotion','foto_1', 'foto_2', 'foto_3', 'foto_4')  # Campos que serão exibidos na lista de produtos
    search_fields = ('name',)  # Campos pesquisáveis no painel de admin


