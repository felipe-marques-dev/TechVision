from django.contrib import admin
from .models import Delivery, Carrier
# Register your models here.

@admin.register(Delivery)
class DeliveryAdmin(admin.ModelAdmin):
    list_display = ('delivery_id','adress_id','carrier_id','user_id','frete')  # Campos que serão exibidos na lista de produtos
    search_fields = ('delivery_id','user_id')  # Campos pesquisáveis no painel de admin


@admin.register(Carrier)
class CarrierAdmin(admin.ModelAdmin):
    list_display = ('name', 'carrier_id', 'cnpj', 'description')
    search_fields = ('name', 'carrier_id', 'cnpj')
