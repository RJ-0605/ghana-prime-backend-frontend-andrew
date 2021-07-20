from django.test import TestCase
from django.contrib.auth import get_user_model

from gprime_properties.models import GPrimeProperty

from gprime_properties.models import GPrimePropertyFeature

User = get_user_model()


class GPropertiesModel(TestCase):
    def setup(self):
        self.property_author = User.objects.create(username="author@test.com", password="author@test.com")
        # we can create instances of this data anywhere
        # but we just want to access this variable everywhere
        # so thats why we make it an object by making it self
        self.propertyfeature = {
            "bathroom": 1,
            "swimming_pools": 2,
            "toilets": 3,
            "bedrooms": 4,
            "halls": 2,
            "kitchen": 2,
        }
        property_feature = GPrimePropertyFeature.objects.create(**self.propertyfeature)

        self.gprime_propertydata = {
            "name": "Mr. Vanderpuije",
            "location": "East Airport",
            "ratings": 6,
            "tags": "Fully Furnished",
            "price": 52,
            "price_currency": "$",
            "description": "Executive Office space for rent in Osu. Price: $3,300.",
            "features": property_feature,
        }
