from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


# Create your views here.

class MyVideos(APIView):

    def get(self, request, format=None):

        user = request.user
        video_list = []

        my_videos = user.videos.all()
        for video in my_videos:
            video_list.append(video)

        serializer = serializers.VideoSerializer(video_list, many=True)
        return Response(data=serializer.data)


class History(APIView):

    def get(self, request, format=None):

        user = request.user

        historys = models.History.objects.filter(creator=user)

        serializer = serializers.HistorySerializer(historys, many=True)
        return Response(data=serializer.data)
