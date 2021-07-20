import re
from django.contrib.auth import get_user_model

from rest_framework import serializers


User = get_user_model()


def password_validator(password):
    """
    Validates password and errors for weak password
    returns:
    """
    pattern = r"(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    if not re.fullmatch(pattern, password):
        raise serializers.ValidationError(
            "The password must be at least 8 characters, including uppercase and lowercase letters, numbers, and special symbols"
        )

    return password


def password_validator_2(password):
    """
    Validate password to meet the following requirements:
        - min length = 8
        - at least 1 character
        - at least 1 number
        - at least 1 special symbol
    :param password:
    returns:
    """
    min_length = 8
    if len(password) < min_length:
        raise serializers.ValidationError("Password must be at least 8 characters long.")

    if not any(char.isdigit() for char in password):
        raise serializers.ValidationError("Password must contain at least 1 digit.")

    if not any(char.isalpha() for char in password):
        raise serializers.ValidationError("Password must contain at least 1 letter.")


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255, trim_whitespace=False)


class LoginMessageSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    user_id = serializers.CharField()
    success = serializers.BooleanField()


class SignupSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=255)
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=255, trim_whitespace=False)

    # Field level validation
    # format ===> validate_field_name
    # e.g validate_firstname(), validate_lastname(), validate_email(), etc
    def validate_email(self, email):
        """
        Check and validate that email does not already exist.
        :param email:
        returns:
        """
        try:
            User.objects.get(email=email)
            raise serializers.ValidationError("User with that email already exists.")
        except User.DoesNotExist:
            return email

    def validate_username(self, username):
        """
        Check and validate that username does not already exist.
        :param username:
        returns
        """
        try:
            User.objects.get(username=username)
            raise serializers.ValidationError("User with that username already exists.")
        except User.DoesNotExist:
            return username

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        """
        Create the user
        :param validated_data:
        returns:
        """
        return User.objects.create_user(**validated_data)


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(max_length=255, trim_whitespace=False)
    new_password = serializers.CharField(max_length=255, trim_whitespace=False)

    def validate_old_password(self, old_password):
        """
        Check the submitted old password to see if it matches the user's old password
        :param old_password:
        returns:
        """
        user = self.context["request"].user
        if not user.check_password(old_password):
            raise serializers.ValidationError("Incorrect old password.")

        return old_password

    def validate_new_password(self, new_password):
        """
        Check if the new password is strong and not weak
        :param new_password:
        returns:
        """
        password = password_validator(new_password)
        return password

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        """
        Is executed when save() method is called
        :param validated_data:
        returns:
        """
        user = self.context["request"].user
        password = validated_data["new_password"]
        user.set_password(password)
        user.save()

        return user


class EmailAvailableSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    def validate_email(self, email):
        """
        Check if email exists or not
        :param email:
        returns:
        """
        try:
            User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Email does not exist.")

        return email
