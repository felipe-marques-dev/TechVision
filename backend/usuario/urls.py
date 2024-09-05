from django.urls import path
from . import views

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('home/', views.home, name='home'),
    path('api/', views.UserView.as_view(), name='api')
]
