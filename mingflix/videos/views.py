from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from mingflix.users import serializers as user_serializers
from mingflix.users import models as user_models
from mingflix.notifications import views as notification_views
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

        video.views = video.views + 1
        video.save()

        create_history = models.History.objects.create(creator=user, video=video)
        create_history.save()

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


class VideosOfFollowing(APIView):

    def get(self, request, format=None):

        user = request.user

        followings = user.following.all()
        video_list = []

        for following in followings:
            videos = following.videos.all()[:2]
            for video in videos:
                video_list.append(video)

        def get_key(video):
            return video.created_at

        sorted_list = sorted(video_list, key=get_key, reverse=True)

        serializer = serializers.VideoListSerializer(sorted_list, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class LikeVideo(APIView):

    def get(self, request, video_id, format=None):

        likes = models.VideoLike.objects.filter(video__id=video_id)

        like_creators_id = likes.values('creator_id')
        # values 라는 함수는 likes라는 오브젝트안에서 가져올수 있는 값들을 정해줌
        # 그 중에 creator_id가 존재하기 때문에 __ 가 아닌 _ 만 써도 되는것
        # 만약 creator__id 라고 쓰면 이건 deep relationship으로 얻는 거
        # creator_id라고 쓰면 이건그냥 values라는 함수가 제공해주는 어떠한 key에 대한 값을 가져오는것
        like_users = user_models.User.objects.filter(id__in=like_creators_id)

        serializer = user_serializers.UserListSerializer(like_users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, video_id, format=None):

        user = request.user

        try:
            found_video = models.Video.objects.get(id=video_id)
        except models.Video.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        try:
            models.VideoLike.objects.get(video=found_video, creator=user)
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.VideoLike.DoesNotExist:
            create_like = models.VideoLike.objects.create(video=found_video, creator=user)
            create_like.save()

            notification_views.create_notification(user, found_video.creator, "like", found_video, None)
            return Response(status=status.HTTP_201_CREATED)


class CancelLikeVideo(APIView):

    def delete(self, request, video_id, format=None):

        user = request.user

        try:
            like = models.VideoLike.objects.get(video__id=video_id, creator=user)
            like.delete()
            return Response(status=status.HTTP_200_OK)
        except models.VideoLike.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)


class UnlikeVideo(APIView):

    def get(self, request, video_id, format=None):

        unlikes = models.VideoUnlike.objects.filter(video__id=video_id)

        unlike_creators_id = unlikes.values('creator_id')

        unlike_users = user_models.User.objects.filter(id__in=unlike_creators_id)

        serializer = user_serializers.UserListSerializer(unlike_users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, video_id, format=None):

        user = request.user

        try:
            video = models.Video.objects.get(id=video_id)
        except models.Video.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        try:
            models.VideoUnlike.objects.get(creator=user, video=video)
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.VideoUnlike.DoesNotExist:
            create_unlike = models.VideoUnlike.objects.create(creator=user, video=video)
            create_unlike.save()

            return Response(status=status.HTTP_201_CREATED)


class CancelUnlikeVideo(APIView):

    def delete(self, request, video_id, format=None):

        user = request.user
        try:
            pre_exist_unlike = models.VideoUnlike.objects.get(creator=user, video__id=video_id)
            pre_exist_unlike.delete()
            return Response(status=status.HTTP_200_OK)
        except models.VideoUnlike.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)


class CommentOnVideo(APIView):

    def post(self, request, video_id, format=None):

        user = request.user

        try:
            video = models.Video.objects.get(id=video_id)
        except models.Video.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        serializer = serializers.CommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(creator=user, video=video)

            notification_views.create_notification(user, video.creator, "comment", video, serializer.data['message'])
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteMyComment(APIView):

    def delete(self, request, comment_id, format=None):

        user = request.user

        try:
            my_comment = models.Comment.objects.get(creator=user, id=comment_id)
            my_comment.delete()
            return Response(status=status.HTTP_200_OK)
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)


class LikeComment(APIView):

    def get(self, request, comment_id, format=None):

        likes = models.CommentLike.objects.filter(comment__id=comment_id)

        like_creators_id = likes.values('creator_id')

        like_users = user_models.User.objects.filter(id__in=like_creators_id)

        serializer = user_serializers.UserListSerializer(like_users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, comment_id, format=None):

        user = request.user

        try:
            comment = models.Comment.objects.get(id=comment_id)
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        try:
            models.CommentLike.objects.get(creator=user, comment=comment)
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.CommentLike.DoesNotExist:
            create_like = models.CommentLike.objects.create(creator=user, comment=comment)
            create_like.save()

            return Response(status=status.HTTP_201_CREATED)


class CancelLikeComment(APIView):

    def delete(self, request, comment_id, format=None):

        user = request.user

        try:
            pre_exist_like = models.CommentLike.objects.get(creator=user, comment__id=comment_id)
            pre_exist_like.delete()
            return Response(status=status.HTTP_200_OK)
        except models.CommentLike.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)


class UnlikeComment(APIView):

    def get(self, request, comment_id, format=None):

        unlikes = models.CommentUnlike.objects.filter(comment__id=comment_id)

        unlike_creators_id = unlikes.values('creator_id')

        unlike_users = user_models.User.objects.filter(id__in=unlike_creators_id)

        serializer = user_serializers.UserListSerializer(unlike_users, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, comment_id, format=None):

        user = request.user

        try:
            comment = models.Comment.objects.get(id=comment_id)
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        try:
            models.CommentUnlike.objects.get(comment__id=comment_id, creator=user)
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.CommentUnlike.DoesNotExist:
            create_unlike = models.CommentUnlike.objects.create(comment=comment, creator=user)
            create_unlike.save()
            return Response(status=status.HTTP_201_CREATED)


class CancelUnlikeComment(APIView):

    def delete(self, request, comment_id, format=None):

        user = request.user

        try:
            pre_exist_unlike = models.CommentUnlike.objects.get(comment__id=comment_id, creator=user)
            pre_exist_unlike.delete()
            return Response(status=status.HTTP_200_OK)
        except models.CommentUnlike.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)


class ReplyOnComment(APIView):

    def post(self, request, comment_id, format=None):

        user = request.user

        try:
            comment = models.Comment.objects.get(id=comment_id)
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)

        serializer = serializers.ReplySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(creator=user, comment=comment)

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
