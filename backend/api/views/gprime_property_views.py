from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from gprime_properties.models import GPrimeProperty
from gprime_properties.serializers import GPrimePropertySerializer


@api_view(["GET", "POST"])
def property_listing(request):
    # POST:
    # 1. Accept data and pass into serializer
    # 2. Validate the data
    # 3. Return error response if data not valid
    # 4. Save data if valid and return success response

    if request.method == "POST":
        serializer = GPrimePropertySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(data={"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        gprime_property = serializer.save()
        return Response(data={"success": True, "data": serializer.data}, status=status.HTTP_201_CREATED)

    # if not post it must be get
    gprime_property = GPrimeProperty.objects.all()
    serializer = GPrimePropertySerializer(gprime_property, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "PUT", "DELETE"])
def property_detail(request, pk):

    try:
        gprime_property = GPrimeProperty.objects.get(pk=pk)
    except GPrimeProperty.DoesNotExist:
        return Response(data={"success": False, "error": "Property Not Found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = GPrimePropertySerializer(gprime_property)
        return Response(data={"success": True, "property": serializer.data}, status=status.HTTP_200_OK)

    if request.method == "PUT":
        serializer = GPrimePropertySerializer(gprime_property, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(data={"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(data={"success": True, "property": serializer.data}, status=status.HTTP_200_OK)

    if request.method == "DELETE":
        gprime_property.delete()
        return Response(data={"success": True}, status=status.HTTP_200_OK)
