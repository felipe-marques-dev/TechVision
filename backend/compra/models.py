from django.db import models
from usuario.models import Endereco, User

class Transportadora(models.Model):
    carrier_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    cnpj = models.CharField(max_length=14)
    description = models.CharField(max_length=150)

class Pedido(models.Model):
    STATUS_CHOICES = [
        ('pendente', 'Pagamento Pendente'),
        ('aprovado', 'Pagamento Aprovado'), 
        ('em_transito', 'Em Trânsito'),
        ('entregue', 'Entregue'),
        ('cancelado', 'Cancelado'),
    ]

    delivery_id = models.AutoField(primary_key=True)
    endereco = models.ForeignKey(Endereco, models.SET_NULL, null=True, related_name='pedidos')
    transportadora = models.ForeignKey(Transportadora, models.SET_NULL, null=True, related_name='pedidos')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="pedidos")
    status = models.CharField(max_length=40, choices=STATUS_CHOICES, default="pendente")
    frete = models.FloatField()
