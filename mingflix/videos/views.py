from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from django.db.models import Q


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


class HotVideos(APIView):

    def get(self, request, format=None):

        hot_five = models.Video.objects.all().order_by('-views')[:5]

        serializer = serializers.VideoSerializer(hot_five, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class VideoDetail(APIView):

    def get(self, request, video_id, format=None):

        user = request.user

        try:
            video = models.Video.objects.get(id=video_id)
        except models.Video.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.VideoSerializer(video)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):

    def get(self, request, format=None):

        search_term = request.query_params.get('search_term', None)

        if search_term is not None:

            split_term = search_term.split(",")

            tag_videos = models.Video.objects.filter(
                Q(tags__name__in=split_term) | Q(title__icontains=search_term)).distinct()

            serializer = serializers.VideoListSerializer(tag_videos, many=True)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
