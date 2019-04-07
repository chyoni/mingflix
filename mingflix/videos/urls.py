from django.urls import path
from . import views

app_name = "videos"
urlpatterns = [
    path("", view=views.MyVideos.as_view(), name="following_videos"),
    path("<int:video_id>/", view=views.VideoDetail.as_view(), name="video_detail"),
    path("<int:video_id>/likes", view=views.LikeVideo.as_view(), name="video_like"),
    path("history/", view=views.History.as_view(), name="history"),
    path("hot/", view=views.HotVideos.as_view(), name="hot"),
    path("search/", view=views.Search.as_view(), name="video_search"),
    path("followings/", view=views.VideosOfFollowing.as_view(), name="followings_video"),
]
