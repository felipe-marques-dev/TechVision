
from django.contrib import admin
from .models import Produto, Categoria

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('name','product_id','categoria', 'sub_category','description', 'estoque', 'price', 'promotion','foto_1', 'foto_2', 'foto_3', 'foto_4')  # Campos que serão exibidos na lista de produtos
    search_fields = ('name',)  # Campos pesquisáveis no painel de admin

admin.site.register(Produto, ProdutoAdmin)


class CategoriaInline(admin.TabularInline):
    model = Produto
    fields = ['name', 'product_id']
    can_delete = False
    readonly_fields = ['name', 'product_id']

    def quantity_display(self,obj):
        return obj.name
    quantity_display.short_description = "Nome"

    def price_display(self, obj):
        return obj.product_id
    price_display.short_description = 'id'

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('name','category_id')  # Campos que serão exibidos na lista de produtos
    search_fields = ('name',) # Campos pesquisáveis no painel de admin
    inlines = [CategoriaInline]

admin.site.register(Categoria, CategoriaAdmin)
