from datetime import datetime, timedelta

from django.conf import settings
from django.urls import reverse
from django.utils.encoding import force_text, force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth import get_user_model

from jose import JWTError, jwt


User = get_user_model()

ENCRYPTION_ALGORITHM = "HS256"


def generate_jwt_token(data, min_to_expire=None):
    """
    Generates and returns account activation token with expiration of min_to_expire minutes
    :param data:
    :param min_to_expire:
    Returns:
    """
    payload = data.copy()
    if min_to_expire is None:
        min_to_expire = 15
    expire = datetime.utcnow() + timedelta(minutes=min_to_expire)
    payload.update({"exp": expire})
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm=ENCRYPTION_ALGORITHM)
    return token


def decrypt_jwt_token(token):
    """
    Decrypts authentication token and returns content
    :param token:
    :return:
    """
    try:
        payload = jwt.decode(token, settings.SECRET_KEY)
    except JWTError:
        payload = None

    return payload
