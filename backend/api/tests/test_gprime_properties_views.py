from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APITestCase, APIClient

from gprime_properties.models import GPrimeProperty, GPrimePropertyFeature


User = get_user_model()

"""
GPrimePropertyListViewTest:
    - test_property_creation_success:
        - call api and pass in valid data
        - expect success to be True in the response json
        - expect new data in the db
        - expect values to be the same as data passed
    - test_property_creation_failure"
        - call api and pass in invalid data
        - expect success to be False in the response json
        - expect no data created in the django db
"""


class GPrimePropertyListViewTest(APITestCase):
    def setUp(self):
        self.client = APIClient()

        self.author = User.objects.create(username="author", password="abc")

        features = GPrimePropertyFeature.objects.create()

        self.valid_data = {
            "name": " the Two Bedroom Apartment",
            "location": "East Legon",
            "ratings": 5,
            "tags": "premium, modern, fully-furnished, sophisticated, basic",
            "price": 560595.00,
            "price_currency": "USD",
            "description": "This is a fully furnished office space , which also serves as a home ",
            "author": self.author.pk,
            "features": features.pk
            # images: "",
        }

    def test_property_creation_success(self):
        """ """
        response = self.client.post(reverse("property_listing"), data=self.valid_data)
        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.json()["success"])

        # Testing that data is created in the model
        gprime_properties = GPrimeProperty.objects.all()

        self.assertEqual(len(gprime_properties), 1)

    def test_property_creation_failure(self):
        # testing for missing author
        data = self.valid_data.copy()
        del data["author"]
        response = self.client.post(reverse("property_listing"), data=data)
        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.json()["success"])

        # Testing that data is not created in the model
        gprime_properties = GPrimeProperty.objects.all()
        self.assertEqual(len(gprime_properties), 0)


class GPrimePropertyDetailViewTest(APITestCase):
    def setUp(self):
        self.client = APIClient()

        self.author = User.objects.create(username="author", password="abc")

        features = GPrimePropertyFeature.objects.create()

        self.data = {
            "name": " the Two Bedroom Apartment",
            "location": "East Legon",
            "ratings": 5,
            "tags": "premium, modern, fully-furnished, sophisticated, basic",
            "price": 560595.00,
            "price_currency": "USD",
            "description": "This is a fully furnished office space , which also serves as a home ",
            "author": self.author,
            "features": features
            # images: "",
        }

        self.property = GPrimeProperty.objects.create(**self.data)

    def test_get_single_property_success(self):
        response = self.client.get(reverse("property_detail", args=(self.property.pk,)))
        self.assertTrue(response.json()["success"])
        self.assertEqual(response.status_code, 200)

        for key in self.data:
            self.assertEqual(eval(f"self.property.{key}"), self.data.get(key))

    def test_get_single_property_not_found(self):
        response = self.client.get(reverse("property_detail", args=(2,)))
        self.assertEqual(response.status_code, 404)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], "Property Not Found")

    def test_update_single_property_success(self):
        updated_name = "Single Property Name"
        response = self.client.put(reverse("property_detail", args=(self.property.pk,)), data={"name": updated_name})
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])
        self.assertEqual(response.json()["property"]["name"], updated_name)

        gprime_property = GPrimeProperty.objects.get(pk=self.property.pk)

        self.assertEqual(gprime_property.name, updated_name)

    def test_update_single_property_not_found(self):
        updated_name = "Single Property Name"
        response = self.client.put(reverse("property_detail", args=(2,)), data={"name": updated_name})
        self.assertEqual(response.status_code, 404)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], "Property Not Found")

    def test_update_single_property_invalid_data(self):
        updated_price = "invalid price"
        response = self.client.put(
            reverse("property_detail", args=(self.property.pk,)), data={"price": updated_price}
        )
        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]["price"][0], "A valid number is required.")

    def test_delete_single_property_success(self):

        response = self.client.delete(reverse("property_detail", args=(self.property.pk,)))
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])

        with self.assertRaises(GPrimeProperty.DoesNotExist):
            GPrimeProperty.objects.get(pk=self.property.pk)

        self.assertEqual(GPrimeProperty.objects.count(), 0)
