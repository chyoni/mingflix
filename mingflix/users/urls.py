from django.urls import path
from . import views

app_name = "users"
urlpatterns = [
    path("stream/on/", view=views.StreamOn.as_view(), name="user_streamon"),
    path("stream/off/", view=views.StreamOff.as_view(), name="user_streamoff"),
    path("<int:user_id>/follow/", view=views.FollowUser.as_view(), name="user_follow"),
    path("<int:user_id>/unfollow/", view=views.UnFollowUser.as_view(), name="user_unfollow"),
    path("search/", view=views.Search.as_view(), name="user_search"),
    path("<str:username>/", view=views.UserProfile.as_view(), name="user_profile"),
    path("<str:username>/channel/", view=views.UserChannel.as_view(), name="user_channel"),
    path("<str:username>/followers/", view=views.UserFollowers.as_view(), name="user_followers"),
    path("<str:username>/following/", view=views.UserFollowing.as_view(), name="user_following"),
    path("<str:username>/password/", view=views.ChangePassword.as_view(), name="change_password"),
]
