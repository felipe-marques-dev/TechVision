from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
<<<<<<< HEAD:backend/usuario/models.py
from django.db import models
from django.utils import timezone
from django.contrib import admin
from rest_framework.response import Response
=======
from produtos.models import Produto
>>>>>>> 620016509821c16603e5e28e5103150a44f0e120:tech_vision/usuario/models.py

from django.contrib import admin

class CustomUserManager(BaseUserManager):
    """
    Gerenciador personalizado para o modelo de usuario.
    """

    def create_user(self, email, password=None, first_name='', last_name='', **extra_fields):
        """
        Cria e salva um usuário com username, email e senha.
        """
        if not email:
            return Response({"Email obrigatório"})

        email = self.normalize_email(email)
        user = self.model(
            email=email,
            first_name=first_name,
            last_name=last_name,
            **extra_fields
        )
        user.set_password(password)  # Define a senha de forma segura
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, first_name='', last_name='', **extra_fields):
        """
        Cria e salva um superusuário com username, email, senha e nome.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            **extra_fields
        )

class User(AbstractBaseUser, PermissionsMixin):
    
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Chama o manager personalizado
    objects = CustomUserManager()

    # Campo usado para fazer login
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    class Meta:
        db_table = 'usuario'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.email

class Endereco(models.Model):
    adress_id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=20)
    block = models.CharField(max_length=20)
    reference = models.CharField(max_length=30)
    cep = models.CharField(max_length=8)
    state = models.CharField(max_length=2)
    number = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='enderecos')




class Carrinho(models.Model):
    cart_id = models.AutoField(primary_key=True) 
    user = models.ForeignKey(User, models.CASCADE, related_name='carrinho')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CarrinhoItem(models.Model):
    cartitem_id = models.AutoField(primary_key=True) 
    cart = models.ForeignKey(Carrinho, related_name="itens", on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    
    def get_produto_nome(self):
        return self.produto.name

    @property
    def price(self):
        return self.produto.price * self.quantity



    def __str__(self):
         return f'{self.produto.name} - {self.quantity}'
