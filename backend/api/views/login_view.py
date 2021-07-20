from django.conf import settings
from django.contrib.auth import authenticate

from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from drf_yasg2.utils import swagger_auto_schema

from authentication.serializers import LoginSerializer, LoginMessageSerializer
from authentication.tokens import generate_jwt_token


class LoginView(GenericViewSet):
    serializer_class = LoginSerializer

    @swagger_auto_schema(responses={201: LoginMessageSerializer})
    def login(self, request):
        serializer = LoginSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(data={"success": False, "errors": serializer.errors})

        username = serializer.data["username"]
        password = serializer.data["password"]

        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                data={"success": False, "error": "Invalid Username or Password."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        data = {
            "username": user.username,
            "email": user.email,
            "user_id": user.id,
            "success": True
        }
        serializer = LoginMessageSerializer(data)

        response = Response(data=serializer.data, status=status.HTTP_200_OK)

        # Set cookie header Authorization key
        """
        TODO: Generate the auth token using the token generator with the user's id 
        TODO: Set the auth token to the cookie header's Authorization key
        """
        token = generate_jwt_token(data={"user_id": user.pk})
        response.set_cookie(
            "Authorization",
            value=f"Bearer {token}",
            httponly=True,
            max_age=settings.COOKIE_TIME,
            expires=settings.COOKIE_TIME,
            samesite=None,
            secure=settings.COOKIE_SECURE,  # Cookie is sent from client only over HTTP when flag turned on
        )

        return response
