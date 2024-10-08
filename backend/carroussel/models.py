from django.db import models
from rest_framework.response import Response

class Carroussel(models.Model):
  carroussel_id = models.AutoField(primary_key=True)
  url = models.CharField(unique=True, null=False, blank=False, max_length=3000)
  foto = models.ImageField(upload_to='carroussel/', null=False, blank=False)

  def __str__(self):
        return self.url