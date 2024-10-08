from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from rest_framework.response import Response
from produtos.models import Produto

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
        
        # Define a senha de forma segura
        user.set_password(password)
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
    
    id = models.AutoField(primary_key=True)
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
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

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
    user = models.OneToOneField(User, models.CASCADE, related_name='carrinho')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CarrinhoItem(models.Model):
    cartitem_id = models.AutoField(primary_key=True) 
    cart = models.ForeignKey(Carrinho, related_name="itens", on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price_ind = models.FloatField()

    
    def get_produto_nome(self):
        return self.produto.name

    @property
    def price(self):
        return self.produto.price * self.quantity



    def __str__(self):
         return f'{self.produto.name} - {self.quantity}'
