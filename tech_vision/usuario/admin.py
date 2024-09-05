from django.contrib import admin
from .models import Endereco, User, Carrinho, CarrinhoItem

# Register your models here.


# Adiciona o Address ao painel de Admin
@admin.register(Endereco)
class AdressAdmin(admin.ModelAdmin):
    list_display = ('user_email', 'street', 'number', 'block', 'reference', 'state', 'cep', 'city')
    search_fields = ('user__email', 'street', 'city')

    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'Email do Usuário'

class CarrinhoItemInline(admin.TabularInline):
    model = CarrinhoItem
    fields = ['quantity', 'price']
    can_delete = False


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