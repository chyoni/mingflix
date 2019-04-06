from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class Search(APIView):

    def get(self, request, format=None):

        username = request.query_params.get('username', None)

        if username is not None:

            users = models.User.objects.filter(username__icontains=username)

            serializer = serializers.UserListSerializer(users, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)


class ExploreUsers(APIView):

    pass
