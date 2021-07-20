from .settings import *


# Cors header configurations
INSTALLED_APPS += ["corsheaders"]
MIDDLEWARE.insert(
    2,
    "corsheaders.middleware.CorsMiddleware",
)

CORS_ALLOWED_ORIGINS = ("http://localhost:3000", "http://127.0.0.1:3000")
CORS_ALLOW_ALL_ORIGINS = True

CSRF_TRUSTED_ORIGINS = ("localhost:3000", "127.0.0.1:3000")

CORS_ALLOW_CREDENTIALS = True

SECRET_KEY = "django-insecure-yi97vck#8==74#y_vcaa(23q++!o#l!3!v%@se2pws875pvy%#"

DEBUG = True


ALLOWED_HOSTS = ["*"]
