from django.urls import path
from . import views

app_name = "videos"
urlpatterns = [
    path("", view=views.MyVideos.as_view(), name="following_videos"),
    path("history/", view=views.History.as_view(), name="history"),
]
