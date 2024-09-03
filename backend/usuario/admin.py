from django.contrib import admin
from .models import Adress, User
# Register your models here.


@admin.register(Adress)
class AdressAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'street', 'number', 'block', 'reference', 'state', 'cep', 'city')
    search_fields = ('user_id__email', 'street', 'city')