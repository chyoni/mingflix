from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models
from mingflix.users import models as user_models


class IntroUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'profile_image',
            'username',
        )


class IntroChannelSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.Channel
        fields = (
            'id',
            'channel_name',
            'channel_caption',
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

    creator = IntroUserSerializer()

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
            'natural_time',
            'reply_count',
        )


class ReplySerializer(serializers.ModelSerializer):

    creator = IntroUserSerializer()
    comment = CommentSerializer()

    class Meta:
        model = models.Reply
        fields = (
            'id',
            'message',
            'comment',
            'creator',
            'natural_time'
        )


class VideoSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()
    creator = IntroUserSerializer()
    channel = IntroChannelSerializer()
    comments = CommentSerializer(many=True)

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
            'channel',
        )


class HistorySerializer(serializers.ModelSerializer):

    video = VideoSerializer()

    class Meta:
        model = models.History
        fields = (
            'id',
            'video',
        )
