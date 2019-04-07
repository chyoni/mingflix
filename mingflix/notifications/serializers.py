from rest_framework import serializers
from . import models
from mingflix.users import serializers as user_serializers
from mingflix.videos import serializers as video_serializers


class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.UserListSerializer()
    to = user_serializers.UserListSerializer()
    video = video_serializers.VideoListSerializer()

    class Meta:
        model = models.Notification
        fields = (
            'creator',
            'to',
            'notification_type',
            'video',
            'comment'
        )
