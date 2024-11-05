from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views import generic
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view
from usuario.views import *
from carroussel.views import CarrousselView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', generic.RedirectView.as_view(url='/accounts/login', permanent=False), name='login'),
    path('accounts/', include('usuario.urls')),
    path('produtos/', include('produtos.urls')),
    path('compra/', include('compra.urls')),
    path('redefinicao-de-senha/', ResetPasswordVerify.as_view(), name='reset-password'),
    path('redefinicao-de-senha/<str:encoded_pk>/<str:token>/', ResetPassword.as_view(), name='reset-password'),
    path('carroussel/', CarrousselView.as_view(), name='carroussel'),
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

# Adiciona a configuração para servir arquivos de mídia durante o desenvolvimento
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)