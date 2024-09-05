from django.db import models
from usuario.models import Adress, User
# Create your models here.

class Carrier(models.Model):
    carrier_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    cnpj = models.CharField(max_length=14)
    description = models.CharField(max_length=150)

class Delivery(models.Model):

    STATUS_CHOICES = [
        ('pendente', 'Pagamento Pendente'),
        ('pendente', 'Pagamento Aprovado'),
        ('em_transito', 'Em Trânsito'),
        ('entregue', 'Entregue'),
        ('cancelado', 'Cancelado'),
    ]

    delivery_id = models.AutoField(primary_key=True)
    adress_id = models.ForeignKey(Adress, models.SET_NULL, null=True, related_name='pedidos')
    carrier_id = models.ForeignKey(Carrier, models.SET_NULL, null=True, related_name='pedidos')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="pedidos")
    status = models.CharField(max_length= 40, choices=STATUS_CHOICES, default="pendente")
    frete = models.FloatField()



