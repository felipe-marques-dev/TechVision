from django.db import models
from rest_framework.response import Response

class Carroussel(models.Model):
  carroussel_id = models.AutoField(primary_key=True)
  url = models.SlugField(unique=True, null=False, blank=False)
  foto = models.ImageField(upload_to='carroussel/', null=False, blank=False)

  def __str__(self):
        return self.carroussel_id