from django.db import models
from mingflix.users import models as user_models
from taggit.managers import TaggableManager
from django.contrib.humanize.templatetags.humanize import naturaltime
# Create your models here.


class Video(user_models.TimeStampModel):

    file = models.FileField()
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True)
    tags = TaggableManager()
    views = models.IntegerField(null=True, blank=True, default=0)
    poster = models.ImageField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, blank=True, related_name="videos")
    channel = models.ForeignKey(user_models.Channel, on_delete=models.CASCADE)

    def __str__(self):
        return 'Title: {} - Description: {}'.format(self.title, self.description)


class VideoLike(user_models.TimeStampModel):

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="videoLikes")

    def __str__(self):
        return 'Video: {} - Creator: {}'.format(self.video.title, self.creator.username)


class VideoUnlike(user_models.TimeStampModel):

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="videoUnlikes")

    def __str__(self):
        return 'Video: {} - Creator: {}'.format(self.video.title, self.creator.username)


class Comment(user_models.TimeStampModel):

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="comments")

    def __str__(self):
        return 'Video: {} - Comment: {}'.format(self.video.title, self.message)


class CommentLike(user_models.TimeStampModel):

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name="commentsLikes")

    def __str__(self):
        return 'Comment: {} - Creator: {}'.format(self.comment.message, self.creator.username)


class CommentUnlike(user_models.TimeStampModel):

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name="commentsUnlikes")

    def __str__(self):
        return 'Comment: {} - Creator: {}'.format(self.comment.message, self.creator.username)


class Reply(user_models.TimeStampModel):

    message = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name="replys")

    def __str__(self):
        return 'Comment: {} - Reply: {} - Creator: {}'.format(self.comment.message, self.message, self.creator.username)


class History(user_models.TimeStampModel):

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="historys")
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="historys")
