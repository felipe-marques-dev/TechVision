from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .forms import UsuarioForm
from django.shortcuts import redirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
    return render(request, 'home.html')


def cadastro(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # loga o usuário após o cadastro
            return JsonResponse({'redirect_url': '/accounts/home/'})
        else:
            return JsonResponse({'success': False, 'errors': form.errors.as_json()})
    else:
        form = UsuarioForm()
    return render(request, 'cadastro.html', {'form': form})