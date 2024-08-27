from django.db import models


class Product(models.Model):
    product_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=40)
    category = models.CharField(max_length=40)
    sub_category = models.CharField(max_length=40)
    description = models.CharField(max_length=150)
    estoque = models.IntegerField()
    price = models.FloatField()
    promotion = models.BooleanField(default=False)
    foto_1 = models.ImageField(upload_to='produtos/')
    foto_2 = models.ImageField(upload_to='produtos/')
    foto_3 = models.ImageField(upload_to='produtos/')
    foto_4 = models.ImageField(upload_to='produtos/')
