from django.contrib import admin
from . import models
# Register your models here.

# VideoLike
# VideoUnlike
# Comment
# CommentLike
# CommentUnlike
# Reply


@admin.register(models.Video)
class VideoAdmin(admin.ModelAdmin):

    list_filter = (
        'file',
        'title',
    )

    list_display_links = (
        'title',
    )

    list_display = (
        'id',
        'title',
        'description',
        'creator',
        'channel',
        'created_at',
        'updated_at',
    )


@admin.register(models.VideoLike)
class VideoLikeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'video',
        'created_at',
        'updated_at',
    )


@admin.register(models.VideoUnlike)
class VideoUnlikeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'video',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'message',
        'creator',
        'video',
        'created_at',
        'updated_at',
    )


@admin.register(models.CommentLike)
class CommentLikeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'comment',
        'created_at',
        'updated_at',
    )


@admin.register(models.CommentUnlike)
class CommentUnlikeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'comment',
        'created_at',
        'updated_at',
    )


@admin.register(models.Reply)
class ReplyAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'message',
        'comment',
        'creator',
        'created_at',
        'updated_at',
    )


@admin.register(models.ReplyLike)
class ReplyLikeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'reply',
        'created_at',
        'updated_at',
    )


@admin.register(models.ReplyUnlike)
class ReplyUnlikeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'reply',
        'created_at',
        'updated_at',
    )


@admin.register(models.History)
class HistoryAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'video',
    )
