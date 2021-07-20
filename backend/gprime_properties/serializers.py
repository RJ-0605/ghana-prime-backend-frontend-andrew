from rest_framework import serializers

from .models import GPrimeProperty

"""
GPrimePropertySerializer:
    - all fields
    - accept default validation (django models)
"""


class GPrimePropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = GPrimeProperty
        # all fields GPrimeProperty db such as price , name
        fields = "__all__"
