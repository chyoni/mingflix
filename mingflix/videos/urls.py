from django.urls import path
from . import views

app_name = "videos"
urlpatterns = [
    path("", view=views.MyVideos.as_view(), name="following_videos"),
    path("<int:video_id>/", view=views.VideoDetail.as_view(), name="video_detail"),
    path("history/", view=views.History.as_view(), name="history"),
    path("hot/", view=views.HotVideos.as_view(), name="hot"),
    path("search/", view=views.Search.as_view(), name="search"),
]
