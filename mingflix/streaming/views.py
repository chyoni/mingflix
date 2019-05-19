from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from mingflix.users import models as user_models
from mingflix.users import serializers as user_serializers
from . import models

# Create your views here.


class StreamingOfFollowing(APIView):

    def get(self, request, format=None):

        user = request.user

        followings = user.following.all()
        streaming_list = []

        for following in followings:
            streamings = following.streamings.all()
            for streaming in streamings:
                streaming_list.append(streaming)

        serializer = user_serializers.StreamingSerializer(streaming_list, many=True, context={"request": request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class StartStreaming(APIView):

    def post(self, request, format=None):

        user = request.user

        serializer = user_serializers.StreamingSerializer(data=request.data)
        try:
            exist_stream = models.Streaming.objects.get(creator=user)
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.Streaming.DoesNotExist:
            if serializer.is_valid():

                user.is_streaming = True

                user.save()

                serializer.save(creator=user)

                return Response(data=serializer.data, status=status.HTTP_201_CREATED)

            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuitStreaming(APIView):

    def delete(self, request, stream_id, format=None):

        user = request.user

        try:
            streaming = models.Streaming.objects.get(id=stream_id, creator=user)

            user.is_streaming = False

            user.save()

            streaming.delete()

            return Response(status=status.HTTP_200_OK)

        except models.Streaming.DoesNotExist:

            return Response(status=status.HTTP_404_NOT_FOUND)


class UserProfileByStreamKey(APIView):

    def get(self, request, stream_key, format=None):

        try:
            found_user = user_models.User.objects.get(channel__stream_key=stream_key)

            serializer = user_serializers.UserProfileSerializer(found_user, context={"request": request})

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        except user_models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class Search(APIView):

    def get(self, request, format=None):

        stream_search_term = request.query_params.get('stream_search_term', None)

        if stream_search_term is not None:

            found_stream = models.Streaming.objects.filter(title__icontains=stream_search_term).distinct()

            serializer = user_serializers.StreamingSerializer(found_stream, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:
            return Response(data=serializer.errors, status=status.HTTP_404_NOT_FOUND)
