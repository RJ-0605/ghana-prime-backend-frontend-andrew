from django.contrib.auth import get_user_model
from django.urls import reverse
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase, APIClient


User = get_user_model()


class GPrimeLoginViewTest(APITestCase):
    def setUp(self):
        self.client = APIClient()

        self.username = "test_username"
        self.email = "test@email.com"
        self.password = "test@Passw0rd!"

        self.user = User.objects.create_user(username=self.username, email=self.email, password=self.password)

        self.valid_credentials = {"username": self.username, "password": self.password}

        self.invalid_credentials_username = {"username": "invalid_username", "password": self.password}
        self.invalid_credentials_password = {"username": self.username, "password": "invalid_password"}

    def test_login_success(self):
        """
         ok Tests that valid user credentials successfully logs in a user
        returns:
        """
        response = self.client.post(reverse("login"), data=self.valid_credentials)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])

        # Get the response header and check if it contains and Authorization key containing the token as a value
        token = response.cookies.get("Authorization").value
        self.assertTrue(token.startswith("Bearer "))

    def test_login_failure_invalid_credentials_username(self):
        """
        Tests that login fails for invalid username
        returns:
        """
        response = self.client.post(reverse("login"), data=self.invalid_credentials_username)
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], "Invalid Username or Password.")
        self.assertNotIn("Authorization", response.cookies)

    def test_login_failure_invalid_credentials_password(self):
        """
        Tests that login fails for invalid password
        """
        response = self.client.post(reverse("login"), data=self.invalid_credentials_password)
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], "Invalid Username or Password.")
        self.assertNotIn("Authorization", response.cookies)

    def test_login_failure_inactive_user(self):
        """
        Tests that login fails for user not active (i.e deleted account).
        """
        self.user.is_active = False
        self.user.save()

        response = self.client.post(reverse("login"), data=self.valid_credentials)
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], "Invalid Username or Password.")
