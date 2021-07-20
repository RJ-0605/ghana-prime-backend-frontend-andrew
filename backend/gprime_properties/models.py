from django.db import models
from django.contrib.auth import get_user_model

from taggit.managers import TaggableManager


User = get_user_model()

"""
GPrimeProperty:
    - name
    - location
    - ratings
    - tags --->  bathroom , 
    - price
    - description ---> ...
    - author
    - date_created  ---> Date now
    - images  ---> ...
    - approved  ---> False
    - available ---> True
    - is_active


GPrimePropertyFeature:
    bathroom: ---> ...
    swimming_pools: ---> ...
    toilets: ---> ...
    bedrooms: ---> ...
    halls: ---> ...
    kitchen: ---> ...
"""


class GPrimePropertyFeature(models.Model):
    bathroom = models.PositiveIntegerField(default=1)
    swimming_pools = models.PositiveIntegerField(default=0)
    toilets = models.PositiveIntegerField(default=1)
    bedrooms = models.PositiveIntegerField(default=1)
    halls = models.PositiveIntegerField(default=0)
    kitchen = models.PositiveIntegerField(default=1)

    # def __str__(self):
    #     return f""


class GPrimeProperty(models.Model):

    CURRENCY_CHOICES = (("EURO", "£"), ("USD", "$"), ("GHC", "₵"))
    name = models.CharField(max_length=150)
    location = models.CharField(max_length=300)
    ratings = models.PositiveIntegerField(default=0)
    tags = TaggableManager()
    price = models.DecimalField(max_digits=100, decimal_places=2)
    price_currency = models.CharField(max_length=10, choices=CURRENCY_CHOICES)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    # images = None
    approved = models.BooleanField(default=False)
    available = models.BooleanField(default=True)
    features = models.OneToOneField(GPrimePropertyFeature, on_delete=models.CASCADE)
