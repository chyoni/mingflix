from django.urls import path
from . import views

app_name = "streaming"
urlpatterns = [
    path("followings/", view=views.StreamingOfFollowing.as_view(), name="followings_stream"),
    path("start/", view=views.StartStreaming.as_view(), name="start_stream"),
    path("<int:stream_id>/quit/", view=views.QuitStreaming.as_view(), name="quit_stream"),
    path("<str:stream_key>/find/", view=views.UserProfileByStreamKey.as_view(), name="user_streamkey"),
    path("search/", view=views.Search.as_view(), name="stream_search"),
]
