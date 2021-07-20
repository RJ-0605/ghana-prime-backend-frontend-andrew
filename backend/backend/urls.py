from django.contrib import admin
from django.urls import path, include, re_path

from rest_framework import permissions

from drf_yasg2 import openapi
from drf_yasg2.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(
        title="GPrime Properties",
        default_version="v1",
        description="",
        terms_of_service="",
        contact=openapi.Contact(email=""),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path("api/", include("authentication.urls")),
    re_path(
        r"swagger(?P<format>\.json|\.yaml)",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        "redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="schema-redoc",
    ),
]
