from django.urls import path
from . import views

app_name = "videos"
urlpatterns = [
    path("", view=views.MyVideos.as_view(), name="following_videos"),
    path("<int:video_id>/", view=views.VideoDetail.as_view(), name="video_detail"),
    path("<int:video_id>/likes/", view=views.LikeVideo.as_view(), name="video_like"),
    path("<int:video_id>/cancellikes/", view=views.CancelLikeVideo.as_view(), name="video_cancellike"),
    path("<int:video_id>/unlikes/", view=views.UnlikeVideo.as_view(), name="video_unlike"),
    path("<int:video_id>/cancelunlikes/", view=views.CancelUnlikeVideo.as_view(), name="video_cancelunlike"),
    path("<int:video_id>/comments/", view=views.CommentOnVideo.as_view(), name="video_comment"),
    path("comments/<int:comment_id>/likes/", view=views.LikeComment.as_view(), name="comment_like"),
    path("comments/<int:comment_id>/cancellikes/", view=views.CancelLikeComment.as_view(), name="comment_cancellike"),
    path("comments/<int:comment_id>/unlikes/", view=views.UnlikeComment.as_view(), name="comment_unlike"),
    path("comments/<int:comment_id>/cancelunlikes/", view=views.CancelUnlikeComment.as_view(), name="comment_cancelunlike"),
    path("comments/<int:comment_id>/replys/", view=views.ReplyOnComment.as_view(), name="comment_reply"),
    path("history/", view=views.History.as_view(), name="history"),
    path("hot/", view=views.HotVideos.as_view(), name="hot"),
    path("search/", view=views.Search.as_view(), name="video_search"),
    path("followings/", view=views.VideosOfFollowing.as_view(), name="followings_video"),
]
