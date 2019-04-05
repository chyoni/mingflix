from django.db import models
from mingflix.users import models as user_models
from mingflix.videos import models as video_models
from django.contrib.humanize.templatetags.humanize import naturaltime
# Create your models here.


class Notification(user_models.TimeStampModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="creator")
    to = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="to")
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    video = models.ForeignKey(video_models.Video, on_delete=models.CASCADE, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From: {} - To: {}'.format(self.creator, self.to)
