from django.db import models
from django.utils.text import slugify


class Produto(models.Model):
    product_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=40)
    category = models.CharField(max_length=40)
    sub_category = models.CharField(max_length=40)
    description = models.CharField(max_length=150)
    url_name = models.SlugField(unique=True, null=True, blank=True)
    estoque = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    promotion = models.BooleanField(default=False)
    foto_1 = models.ImageField(upload_to='produtos/', null=True, blank=True)
    foto_2 = models.ImageField(upload_to='produtos/', null=True, blank=True)
    foto_3 = models.ImageField(upload_to='produtos/', null=True, blank=True)
    foto_4 = models.ImageField(upload_to='produtos/', null=True, blank=True)

    # salva a url_name como nome do produto 
    # se o admin não pre-definir uma url antes 
    def save(self, *args, **kwargs):
        if not self.url_name:
            self.url_name = slugify(self.name)
        super(Produto, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
