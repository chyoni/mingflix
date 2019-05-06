from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models
from mingflix.users import models as user_models


class IntroChannelSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.Channel
        fields = (
            'id',
            'channel_name',
            'channel_caption',
        )


class IntroUserSerializer(serializers.ModelSerializer):

    channel = IntroChannelSerializer()

    class Meta:
        model = user_models.User
        fields = (
            'profile_image',
            'username',
            'channel',
        )


class VideoLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.VideoLike
        fields = '__all__'


class VideoUnlikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.VideoUnlike
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    creator = IntroUserSerializer(read_only=True)
    natural_time = serializers.ReadOnlyField()
    reply_count = serializers.ReadOnlyField()
    like_count = serializers.ReadOnlyField()
    unlike_count = serializers.ReadOnlyField()

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
            'natural_time',
            'reply_count',
            'like_count',
            'unlike_count',
        )


class ReplySerializer(serializers.ModelSerializer):

    creator = IntroUserSerializer(read_only=True)
    natural_time = serializers.ReadOnlyField()
    like_count = serializers.ReadOnlyField()
    unlike_count = serializers.ReadOnlyField()

    class Meta:
        model = models.Reply
        fields = (
            'id',
            'message',
            'creator',
            'natural_time',
            'like_count',
            'unlike_count',
        )


class VideoListSerializer(TaggitSerializer, serializers.ModelSerializer):

    creator = IntroUserSerializer()
    tags = TagListSerializerField()

    class Meta:
        model = models.Video
        fields = (
            'id',
            'file',
            'title',
            'description',
            'views',
            'creator',
            'poster',
            'tags',
            'natural_time',
        )


class VideoSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()
    creator = IntroUserSerializer()
    comments = CommentSerializer(many=True)
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = models.Video
        fields = (
            'id',
            'natural_time',
            'file',
            'title',
            'description',
            'tags',
            'views',
            'like_count',
            'unlike_count',
            'comments',
            'comment_count',
            'poster',
            'creator',
            'is_liked'
        )

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.VideoLike.objects.get(creator__id=request.user.id, video__id=obj.id)
                return True
            except models.VideoLike.DoesNotExist:
                return False
        return False


class HistorySerializer(serializers.ModelSerializer):

    video = VideoSerializer()

    class Meta:
        model = models.History
        fields = (
            'id',
            'video',
        )


class InputVideoSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = models.Video
        fields = (
            'file',
            'title',
            'description',
            'tags',
            'poster'
        )
