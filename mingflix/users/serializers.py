from rest_framework import serializers
from . import models
from mingflix.streaming import models as streaming_models
from mingflix.videos import serializers as video_serializers


class UserListSerializer(serializers.ModelSerializer):

    channel = video_serializers.IntroChannelSerializer()
    is_following = serializers.SerializerMethodField()

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'channel',
            'followers_count',
            'post_count',
            'is_following',
            'is_streaming',
        )

    def get_is_following(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj in request.user.following.all():
                return True
        return False


class StreamingSerializer(serializers.ModelSerializer):

    creator = UserListSerializer(read_only=True)

    class Meta:
        model = streaming_models.Streaming
        fields = (
            'id',
            'creator',
            'poster',
            'title',
            'description',
        )


class UserProfileSerializer(serializers.ModelSerializer):

    channel = video_serializers.IntroChannelSerializer(read_only=True)
    videos = video_serializers.VideoListSerializer(many=True, read_only=True)
    streamings = StreamingSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()
    is_following = serializers.SerializerMethodField()

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name',
            'phone',
            'followers_count',
            'following_count',
            'post_count',
            'channel',
            'videos',
            'streamings',
            'is_following',
            'is_streaming',
        )

    def get_is_following(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj in request.user.following.all():
                return True
        return False


class ChannelSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Channel
        fields = (
            'id',
            'channel_name',
            'channel_caption',
            'stream_key',
        )
