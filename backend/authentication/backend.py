from django.contrib.auth import get_user_model

from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions

from jose import JWTError

from authentication.tokens import decrypt_jwt_token


User = get_user_model()


class SafeJWTAuthentication(BaseAuthentication):
    """
    Authentication class that authenticates users from cookie headers (http-only)
    """

    def authenticate(self, request):

        authorization_cookie = request.COOKIES.get("Authorization")

        if not authorization_cookie:
            return None

        access_token = authorization_cookie.split(" ")[1]

        payload = decrypt_jwt_token(access_token)

        if not payload:
            return None

        try:
            user = User.objects.get(pk=payload["user_id"])
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed("User not found")

        if not user.is_active:
            raise exceptions.AuthenticationFailed("User is inactive")

        # self.enforce_csrf(request)
        return user, None

    def enforce_csrf(self, request):
        """
        Enforces CSRF Validation
        :param request:
        returns:
        """
        # TODO: Will finish out full implementation of csrf check
        return
