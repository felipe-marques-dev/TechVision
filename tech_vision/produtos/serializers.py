from .models import Product
from rest_framework import serializers


# Serializers define the API representation.
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['name','product_id','category', 'sub_category','description', 'estoque', 'price', 'promotion','foto_1', 'foto_2', 'foto_3', 'foto_4']
