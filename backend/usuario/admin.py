from django.contrib import admin
from .models import User, Carrinho, CarrinhoItem
from produtos.models import Produto

# Register your models here.


class CarrinhoItemInline(admin.TabularInline):
    model = CarrinhoItem
    fields = ['quantity_display', 'price_display', 'produto']
    can_delete = False
    readonly_fields = ['price_display', 'quantity_display', 'produto']

    def quantity_display(self,obj):
        return obj.quantity
    quantity_display.short_description = "Quantidade"

    def price_display(self, obj):
        return obj.price
    price_display.short_description = 'Preço'

# Adiciona o Cart ao painel de Admin
@admin.register(Carrinho)
class CarrinhoAdmin(admin.ModelAdmin):
    list_display = ('user_email','carrinho_id')
    search_fields = ('cart_id','user_id__email')
    inlines = [CarrinhoItemInline]


    def carrinho_id(self, obj):
        return obj.cart_id
    carrinho_id.short_description = 'ID do carrinho'


    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'Email do Usuário'
    



@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    from compra.admin import PedidoInline
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    inlines = [PedidoInline]