from django import forms 
from .models import User
from django.db import models
from .models import CustomUserManager

class UsuarioForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, label='Password')
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'password']
        widgets = {
            'password': forms.PasswordInput(), # renderiza o campo de senha como um campo de senha
        }
        labels = {
            'email' : 'Endereco de Email',
        }
        help_texts = {
            'email':  'Digite um email unico',
        }


    def clean_email(self):
        """
        Aplicando regras de validacao personalizadas
        (email unico)
        """

        email = self.cleaned_data.get('email')  # dados de validacoes de formularios passados
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError('Este email ja esta em uso.')
        return email


    def clean_password(self):
    
        password = self.cleaned_data.get('password')
        if len(password) <= 7 :
             raise forms.ValidationError('A senha deve ter pelo menos 8 caracteres.')
        return password
    

    def save(self, commit=True):
            user = User.objects.create_user(
                email=self.cleaned_data['email'],
                password=self.cleaned_data['password'],
                last_name=self.cleaned_data['last_name'],
                first_name=self.cleaned_data['first_name']
            )
            return user


    

    