from .models import Produto, Categoria
from rest_framework import serializers


# Serializers define the API representation.
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    categoria = serializers.PrimaryKeyRelatedField(read_only=True)

    
    class Meta:
        model = Produto
        fields = ['name','product_id','categoria', 'sub_category','description', 'url_name', 'estoque', 'price', 'promotion','foto_1', 'foto_2', 'foto_3', 'foto_4']

class CategorySerializer(serializers.HyperlinkedModelSerializer):

    
    class Meta:
        model = Categoria
        fields = ['name', 'category_id']

