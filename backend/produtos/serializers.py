from .models import Produto
from rest_framework import serializers


# Serializers define the API representation.
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Produto
        fields = ['name','product_id','category', 'sub_category','description', 'url_name', 'estoque', 'price', 'promotion','foto_1', 'foto_2', 'foto_3', 'foto_4']

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Produto
        fields = ['category']