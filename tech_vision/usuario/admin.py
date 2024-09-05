from django.contrib import admin
from .models import Adress, User, Cart
# Register your models here.


@admin.register(Adress)
class AdressAdmin(admin.ModelAdmin):
    list_display = ('user_email', 'street', 'number', 'block', 'reference', 'state', 'cep', 'city')
    search_fields = ('user_id__email', 'street', 'city')

    def user_email(self, obj):
        return obj.user_id.email
    user_email.short_description = 'Email do Usuário'

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('carrinho_id','quantidade','produto_id','produto_nome','user', 'user_email')
    search_fields = ('cart_id','user_id__email')

    def produto_id(self, obj):
        return obj.product_id.product_id
    produto_id.short_description = 'ID do Produto'  # Nome da coluna

    def produto_nome(self, obj):
        return obj.product_id.name
    produto_nome.short_description = 'Nome do Produto'  # Nome da coluna

    def carrinho_id(self, obj):
        return obj.cart_id  # Ajuste conforme necessário
    carrinho_id.short_description = 'ID do carrinho'

    def quantidade(self, obj):
        return obj.quantity
    quantidade.short_description = 'Quantidade'

    def user_email(self, obj):
        return obj.user_id.email
    user_email.short_description = 'Email do Usuário'

    def user(self, obj):
        return obj.user_id.id
    user.short_description = 'ID do Usuário'