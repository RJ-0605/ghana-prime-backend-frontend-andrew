from django.urls import reverse
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase, APIClient


User = get_user_model()


class SignupViewTests(APITestCase):
    def setUp(self):
        self.client = APIClient()

    def test_success_signup(self):
        """
        Tests that signup is successful given valid data format
        return:
        """
        data = {
            "first_name": "test_fname",
            "last_name": "test_lname",
            "email": "test@email.com",
            "username": "test_username",
            "password": "Passw0rd.test",
        }
        response = self.client.post(reverse("signup"), data=data)
        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.json()["success"])

        # Get user instance from db
        user = User.objects.first()

        self.assertEqual(user.first_name, data["first_name"])
        self.assertEqual(user.last_name, data["last_name"])
        self.assertEqual(user.email, data["email"])
        self.assertEqual(user.username, data["username"])

        self.assertTrue(user.check_password(data["password"]))

    def test_signup_failure_invalid_email_format(self):
        """
        Tests that signup fails for invalid email format
        returns:
        """
        response = self.client.post(
            reverse("signup"),
            data={
                "first_name": "test_fname",
                "last_name": "test_lname",
                "email": "invalidemailformat",
                "username": "test_username",
                "password": "Passw0rd.test",
            },
        )
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["errors"]["email"][0], "Enter a valid email address.")

    def test_signup_failure_invalid_weak_password(self):
        pass

    def test_signup_failure_invalid_email_already_exists(self):
        """
        Tests that signup fails if email already exists
        returns:
        """
        User.objects.create_user(username="test_username", email="test@email.com", password="testpassword")

        self.assertEqual(User.objects.count(), 1)
        response = self.client.post(
            reverse("signup"),
            data={
                "first_name": "test_fname",
                "last_name": "test_lname",
                "email": "test@email.com",
                "username": "test",
                "password": "Passw0rd!.test",
            },
        )

        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]["email"][0], "User with that email already exists.")

        self.assertEqual(User.objects.count(), 1)
