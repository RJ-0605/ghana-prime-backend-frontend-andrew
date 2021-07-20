from django.test import TestCase
from django.contrib.auth import get_user_model

from authentication.tokens import generate_jwt_token, decrypt_jwt_token


User = get_user_model()


class TokensTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="test_username", password="test_password")

    def test_token_generation(self):
        token = generate_jwt_token(data={"user_id": self.user.id}, min_to_expire=15)
        payload = decrypt_jwt_token(token)

        self.assertEqual(payload["user_id"], self.user.pk)

    def test_token_decryption_failure(self):
        token = "some invalid token"
        payload = decrypt_jwt_token(token)

        self.assertIsNone(payload)
