from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path('cadastro', views.UserRegister.as_view(), name='cadastro'),
    re_path('login', views.UserLogin.as_view(), name='login'),
    re_path('logout', views.UserLogout.as_view(), name='logout'),
    re_path('usuario', views.UserView.as_view(), name='usuario'),
    re_path('update/', views.UserUpdate.as_view(), name='update-user'),
    re_path('check/', views.UserCheckPassword.as_view(), name='check-password'),
    re_path('cart/', views.UserCart.as_view(), name='user-cart'),
    re_path('add-item/', views.ItemCartUser.as_view(), name='item-add')
    
]
