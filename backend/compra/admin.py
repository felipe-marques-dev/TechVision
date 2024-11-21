from django.contrib import admin
from .models import Pedido


@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('delivery_id','user')  # Campos exibidos
    search_fields = ('delivery_id','user_id')  # Campos pesquisáveis no painel de admin

# mostra os pedidos de cada usuario
class PedidoInline(admin.TabularInline):
    model = Pedido
    fields = ('delivery_id','status','user')
    extra = 1  # Número de formulários vazios a serem exibidos
    can_delete = False  # Impede a exclusão de pedidos diretamente do painel








