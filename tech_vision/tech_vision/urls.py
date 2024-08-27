from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuario/', include('usuario.urls')),
    path('produtos/', include('produtos.urls')),
    path('auth/', include('autenticacao.urls')),
    path('accounts/', include('django.contrib.auth.urls'))
]
