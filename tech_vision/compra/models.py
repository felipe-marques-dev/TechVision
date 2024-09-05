from django.db import models
from usuario.models import Adress, User
# Create your models here.

class Carrier(models.Model):
    carrier_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    cnpj = models.CharField(max_length=14)
    description = models.CharField(max_length=150)

class Delivery(models.Model):
    delivery_id = models.AutoField(primary_key=True)
    adress_id = models.ForeignKey(Adress, on_delete=models.CASCADE, related_name='enderecos')
    carrier_id = models.ForeignKey(Carrier, on_delete=models.CASCADE, related_name='transportadoras')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="usuarios")
    frete = models.FloatField()


