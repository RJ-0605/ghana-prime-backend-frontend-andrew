from django.urls import path
from api.views.gprime_property_views import property_listing, property_detail

urlpatterns = [
    path("properties/", property_listing, name="property_listing"),
    path("property/<int:pk>", property_detail, name="property_detail"),
]
