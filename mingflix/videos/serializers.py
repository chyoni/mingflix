from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models


class VideoSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = models.Video
        fields = (
            'id',
            'file',
            'title',
            'description',
            'tags',
            'views',
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
