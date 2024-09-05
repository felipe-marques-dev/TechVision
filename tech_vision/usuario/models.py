from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.contrib import admin
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
            raise ValueError('O campo de email é obrigatório!')

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
    adress_id = models.AutoField(primary_key = True)
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
    quantity= models.IntegerField()
    produto = models.ForeignKey(Produto, models.SET_NULL, null=True, related_name='carrinho')
    user = models.ForeignKey(User, models.CASCADE, related_name='carrinho')



# adiciona o User na pagina de admin
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

