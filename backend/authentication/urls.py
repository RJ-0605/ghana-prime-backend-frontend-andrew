from django.urls import path

from api.views.login_view import LoginView
from api.views.signup_view import SignupView


urlpatterns = [
    path("users/login/", LoginView.as_view({"post": "login"}), name="login"),
    path("users/signup/", SignupView.as_view({"post": "register"}), name="signup"),
]
