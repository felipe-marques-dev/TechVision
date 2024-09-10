from django.contrib import admin
from .models import Pedido,Transportadora


@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('delivery_id','endereco','transportadora','user','frete')  # Campos exibidos
    search_fields = ('delivery_id','user_id')  # Campos pesquisáveis no painel de admin

# mostra os pedidos de cada usuario
class PedidoInline(admin.TabularInline):
    model = Pedido
    fields = ('delivery_id','status','user','endereco', 'transportadora')
    extra = 1  # Número de formulários vazios a serem exibidos
    can_delete = False  # Impede a exclusão de pedidos diretamente do painel

# mostra os pedidos em cada transportadora
class TransportadoraInline(admin.TabularInline):
    model = Pedido
    fields = ['frete', 'user', 'status']
    extra = 0
    can_delete = False

@admin.register(Transportadora)
class TransportadoraAdmin(admin.ModelAdmin):
    list_display = ('name', 'carrier_id', 'cnpj', 'description') # Campos exibidos
    search_fields = ('name', 'carrier_id', 'cnpj')
    inlines = [TransportadoraInline] # Campos pesquisáveis no painel de admin







