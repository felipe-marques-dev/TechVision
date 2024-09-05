from django.contrib import admin
from .models import Delivery, Carrier


# Register your models here.

@admin.register(Delivery)
class DeliveryAdmin(admin.ModelAdmin):
    list_display = ('delivery_id','adress_id','carrier_id','user_id','frete')  # Campos exibidos
    search_fields = ('delivery_id','user_id')  # Campos pesquisáveis no painel de admin


@admin.register(Carrier)
class CarrierAdmin(admin.ModelAdmin):
    list_display = ('name', 'carrier_id', 'cnpj', 'description') # Campos exibidos
    search_fields = ('name', 'carrier_id', 'cnpj') # Campos pesquisáveis no painel de admin


class DeliveryInline(admin.TabularInline):
    model = Delivery
    fields = ('delivery_id','status','user_id_id','adress_id_id', 'carrier_id_id')
    extra = 1  # Número de formulários vazios a serem exibidos
    can_delete = False  # Impede a exclusão de pedidos diretamente do painel

class UserAdmin(admin.ModelAdmin):
    inlines = [DeliveryInline]

