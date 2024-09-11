from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

UserModel = get_user_model()

def custom_validation(data):
    email = data['email'].strip()
    password = data['password'].strip()
    ##
    if not email or UserModel.objects.filter(email=email).exists():
        raise ValidationError('escolha outro email')
    ##
    if not password or len(password) < 8:
        raise ValidationError('escolha outra senha, de no minimo 8 caracteres')
    return data

def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError('e necessario informar um email')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('e necessario informar uma senha')
    return True