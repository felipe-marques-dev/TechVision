from django.db import models
from usuario.models import User
from produtos.models import Produto

class Pedido(models.Model):
    STATUS_CHOICES = [
        ('pendente', 'Pagamento Pendente'),
        ('aprovado', 'Pagamento Aprovado'), 
        ('em_transito', 'Em Trânsito'),
        ('entregue', 'Entregue'),
        ('cancelado', 'Cancelado'),
    ]

    delivery_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="pedidos")
    status = models.CharField(max_length=40, choices=STATUS_CHOICES, default="Aprovado")
    valor_total = models.FloatField()

class PedidoItem(models.Model):
    pedidoItem_id = models.AutoField(primary_key=True)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name="itens")
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)