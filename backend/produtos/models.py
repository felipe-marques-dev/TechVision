from django.db import models
from django.utils.text import slugify


class Categoria(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)



class Produto(models.Model):
    product_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=40)
    categoria = models.ForeignKey(Categoria, related_name="categories", on_delete=models.CASCADE, null=True, blank=True)
    sub_category = models.CharField(max_length=40)
    description = models.CharField(max_length=150)
    url_name = models.SlugField(unique=True, null=True, blank=True)
    estoque = models.IntegerField()
    price = models.FloatField()
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

