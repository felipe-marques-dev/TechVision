from django.contrib import admin
from .models import Carroussel

@admin.register(Carroussel)
class CarrousselAdmin(admin.ModelAdmin):
  list_display = ('carroussel_id', 'foto', 'url')
  search_fields = ('carroussel_id', 'foto', 'url')

