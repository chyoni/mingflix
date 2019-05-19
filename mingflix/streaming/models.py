from django.db import models
from mingflix.users import models as user_models
# Create your models here.


class Streaming(models.Model):

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="streamings")
    poster = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return 'Title: {} - Description: {}'.format(self.title, self.description)
