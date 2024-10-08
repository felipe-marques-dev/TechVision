from .models import Carroussel
from rest_framework import serializers

class CarrousselSerializer(serializers.ModelSerializer):

  class Meta:
    model = Carroussel
    fields = ['carroussel_id', 'url', 'foto']