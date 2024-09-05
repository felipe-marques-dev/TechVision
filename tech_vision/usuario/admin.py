from django.contrib import admin
from .models import Endereco, User, Carrinho
# Register your models here.


# Adiciona o Address ao painel de Admin
@admin.register(Endereco)
class AdressAdmin(admin.ModelAdmin):
    list_display = ('user_email', 'street', 'number', 'block', 'reference', 'state', 'cep', 'city')
    search_fields = ('user__email', 'street', 'city')

    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'Email do Usuário'


# Adiciona o Cart ao painel de Admin
@admin.register(Carrinho)
class CartAdmin(admin.ModelAdmin):
    list_display = ('carrinho_id','quantidade','produto_id','produto_nome','usuario_id', 'user_email')
    search_fields = ('cart_id','user_id__email')


    # nomes das colunas 
    def produto_id(self, obj):
        return obj.produto.product_id
    produto_id.short_description = 'ID do Produto'  

    def produto_nome(self, obj):
        return obj.produto.name
    produto_nome.short_description = 'Nome do Produto'

    def carrinho_id(self, obj):
        return obj.cart_id
    carrinho_id.short_description = 'ID do carrinho'

    def quantidade(self, obj):
        return obj.quantity
    quantidade.short_description = 'Quantidade'

    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'Email do Usuário'

    def usuario_id(self, obj):
        return obj.user.id
    usuario_id.short_description = 'ID do Usuário'


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    from compra.admin import PedidoInline
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    inlines = [PedidoInline]