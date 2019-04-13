from rest_framework import serializers
from . import models
from mingflix.videos import serializers as video_serializers


class UserListSerializer(serializers.ModelSerializer):

    channel = video_serializers.IntroChannelSerializer()

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'channel',
            'followers_count',
            'post_count',
        )


class UserProfileSerializer(serializers.ModelSerializer):

    channel = video_serializers.IntroChannelSerializer(read_only=True)
    videos = video_serializers.VideoListSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = models.User
        fields = (
            'profile_image',
            'username',
            'name',
            'phone',
            'followers_count',
            'following_count',
            'post_count',
            'channel',
            'videos',
        )


class ChannelSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Channel
        fields = (
            'id',
            'channel_name',
            'channel_caption',
        )
