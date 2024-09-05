from django.contrib import admin
from .models import Pedido,Transportadora


# Register your models here.

@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('delivery_id','endereco','transportadora','user','frete')  # Campos exibidos
    search_fields = ('delivery_id','user_id')  # Campos pesquisáveis no painel de admin


@admin.register(Transportadora)
class CarrierAdmin(admin.ModelAdmin):
    list_display = ('name', 'carrier_id', 'cnpj', 'description') # Campos exibidos
    search_fields = ('name', 'carrier_id', 'cnpj') # Campos pesquisáveis no painel de admin


class PedidoInline(admin.TabularInline):
    model = Pedido
    fields = ('delivery_id','status','user','endereco', 'transportadora')
    extra = 1  # Número de formulários vazios a serem exibidos
    can_delete = False  # Impede a exclusão de pedidos diretamente do painel

class UserAdmin(admin.ModelAdmin):
    inlines = [PedidoInline]

