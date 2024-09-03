from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views import generic
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', generic.RedirectView.as_view(url='/accounts/home', permanent=False)),
    path('accounts/', include('usuario.urls')),
    path('produtos/', include('produtos.urls')),
    path('accounts/', include('django.contrib.auth.urls'))
]

# Adiciona a configuração para servir arquivos de mídia durante o desenvolvimento
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)