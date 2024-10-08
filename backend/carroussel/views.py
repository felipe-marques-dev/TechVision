from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import CarrousselSerializer
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework import generics
from .models import Carroussel
from rest_framework.permissions import IsAdminUser, AllowAny

class CarrousselView(generics.ListCreateAPIView):
  queryset = Carroussel.objects.all()
  serializer_class = CarrousselSerializer
  ##
  def get_permissions(self):
    if self.request.method == 'POST':
      return [IsAdminUser()]
    return [AllowAny()]