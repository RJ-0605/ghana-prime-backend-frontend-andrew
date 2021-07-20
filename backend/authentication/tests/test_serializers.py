from django.test import TestCase, RequestFactory
from django.contrib.auth import get_user_model

from authentication.serializers import (
    LoginSerializer,
    SignupSerializer,
    ChangePasswordSerializer,
    EmailAvailableSerializer,
)  # , ResetPasswordSerializer


User = get_user_model()
"""
Test for Login Serializer

----> is_valid() ---> True for some instances
----> is_valid() ---> False for some other instances
1. `test_is_valid`
2. `test_not_valid`
"""


class LoginSerializerTest(TestCase):
    def setUp(self):
        self.username = "testUsername"
        self.password = "testPassword"

    def test_is_valid(self):
        serializer = LoginSerializer(data={"username": self.username, "password": self.password})
        self.assertTrue(serializer.is_valid())

    def test_not_valid(self):
        # No password
        serializer = LoginSerializer(data={"username": self.username})
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["password"][0], "This field is required.")

        # No username
        serializer = LoginSerializer(data={"password": self.password})
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["username"][0], "This field is required.")


class SignupSerializerTest(TestCase):
    def setUp(self):
        self.first_name = "testFirstname"
        self.last_name = "testLastname"
        self.username = "testUsername"
        self.email = "testEmail@test.com"
        self.password = "testPassword"

    def test_is_valid(self):
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "username": self.username,
                "email": self.email,
                "password": self.password,
            }
        )
        self.assertTrue(serializer.is_valid())

    def test_saves(self):
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "email": self.email,
                "username": self.username,
                "password": self.password,
            }
        )

        self.assertTrue(serializer.is_valid())
        serializer.save()

        user = User.objects.first()

        self.assertEqual(user.first_name, self.first_name)
        self.assertEqual(user.last_name, self.last_name)
        self.assertEqual(user.email, self.email)
        self.assertEqual(user.username, self.username)
        self.assertTrue(user.check_password(self.password))

    def test_is_not_valid(self):
        # No firstname
        serializer = SignupSerializer(
            data={
                "last_name": self.last_name,
                "username": self.username,
                "email": self.email,
                "password": self.password,
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["first_name"][0], "This field is required.")

        # No lastname
        serializer = SignupSerializer(
            data={
                "firstname": self.first_name,
                "user_name": self.username,
                "email": self.email,
                "password": self.password,
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["last_name"][0], "This field is required.")

        # No username
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "email": self.email,
                "password": self.password,
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["username"][0], "This field is required.")

        # No email
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "username": self.username,
                "password": self.password,
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], "This field is required.")

        # No password
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "username": self.username,
                "email": self.email,
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["password"][0], "This field is required.")

    def test_not_valid_email_exists(self):
        """
        Tests that serializer is_valid returns False if email already exists
        returns:
        """
        User.objects.create_user(username="username", email=self.email)
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "username": self.username,
                "email": self.email,
                "password": self.password,
            }
        )

        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], "User with that email already exists.")

    def test_not_valid_incorrect_email_format(self):
        """
        Test validation--> False if incorrect email format
        returns:
        """
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "username": self.username,
                "email": "invalidformat",
                "password": self.password,
            }
        )

        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], "Enter a valid email address.")

    def test_not_valid_weak_password(self):
        """
        Validation fails if weak password
        returns:
        """
        weak_passwords = ("password", "abc", "notstring")
        serializer = SignupSerializer(
            data={
                "first_name": self.first_name,
                "last_name": self.last_name,
                "username": self.username,
                "email": self.email,
                "password": "password",
            }
        )


class ChangePasswordSerializerTest(TestCase):
    def setUp(self):
        self.password = "Passw0rd!"
        self.user = User.objects.create_user(username="testuser", password=self.password)

        self.new_password = "New@Passw0rd!.test"
        request = RequestFactory()
        request.user = self.user

        self.context = {"request": request}

    def test_valid(self):
        serializer = ChangePasswordSerializer(
            data={"old_password": self.password, "new_password": self.new_password}, context=self.context
        )
        self.assertTrue(serializer.is_valid())
        serializer.save()

    def test_not_valid_weak_password(self):
        serializer = ChangePasswordSerializer(
            data={"old_password": self.password, "new_password": "password"}, context=self.context
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(
            serializer.errors["new_password"][0],
            "The password must be at least 8 characters, including uppercase and lowercase letters, numbers, and special symbols",
        )

    def test_not_valid_old_password(self):
        serializer = ChangePasswordSerializer(
            data={"old_password": "wrongpassword", "new_password": self.new_password}, context=self.context
        )
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["old_password"][0], "Incorrect old password.")

    def test_success(self):
        serializer = ChangePasswordSerializer(
            data={"old_password": self.password, "new_password": self.new_password}, context=self.context
        )
        serializer.is_valid()
        serializer.save()

        # Get user and check password if it's changed
        self.user.refresh_from_db()
        self.assertTrue(self.user.check_password(self.new_password))


class EmailAvailableSerializerTest(TestCase):
    def setUp(self):
        self.email = "test@example.com"
        User.objects.create_user(username=self.email, email=self.email)

    def test_valid(self):
        serializer = EmailAvailableSerializer(data={"email": self.email})
        self.assertTrue(serializer.is_valid())

    def test_not_valid_email_exists(self):
        serializer = EmailAvailableSerializer(data={"email": "invalidemail@email.com"})
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], "Email does not exist.")

    def test_not_valid_incorrect_format(self):
        serializer = EmailAvailableSerializer(data={"email": "invalidform"})
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], "Enter a valid email address.")


# class ResetPasswordSerializerTest(TestCase):
#     def setUp(self):
#         self.valid_token = ""  # generate token here
#         self.password = ""
#
#     def test_valid(self):
#         serializer = ResetPasswordSerializer(data={"token": self.valid_token, "password": self.password})
#         serializer.is_valid()
#
#     def test_not_valid_expired_token(self):
#         pass
#
#     def test_not_valid_invalid_token(self):
#         pass
#
#     def test_success(self):
#         pass
