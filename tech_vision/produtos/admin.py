
from django.contrib import admin
from .models import Product

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('name','product_id','category', 'sub_category','description', 'estoque', 'price', 'promotion','foto_1', 'foto_2', 'foto_3', 'foto_4')  # Campos que serão exibidos na lista de produtos
    search_fields = ('name',)  # Campos pesquisáveis no painel de admin

admin.site.register(Product, ProdutoAdmin)
