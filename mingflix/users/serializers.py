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
