from django.contrib.auth import get_user_model

from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework import status

from authentication.serializers import SignupSerializer


class SignupView(GenericViewSet):
    serializer_class = SignupSerializer
    
    def register(self, request):
        serializer = SignupSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(data={"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()

        # Send some registration success email here
        return Response(data={"success": True}, status=status.HTTP_201_CREATED)
