from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.http import HttpResponse


# Create your views here.
def login(request):
    if request.method == 'POST':
        user_id = request.POST.get('user_id')
        password = request.POST.get('password')
        user = User.getInstance()
        if user.authenticate_user(request, user_id, password):
            #return HttpResponse('Login successful')
            messages.success(request, 'You are now logged in')
            return redirect('profile')
        else:
            return HttpResponse('Login failed')
            return redirect('login')
    else:
        return render(request, 'login.html')

def profile(request):
    user_id = request.session.get('id')
    user = User.getInstance()
    user_profile = user.get_user_profile(user_id)
    return render(request, 'profile.html', {'user_profile': user_profile})

def logout(request):
    request.session.flush()
    return redirect('login')

