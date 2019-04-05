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
        'creator',
        'video',
        'created_at',
        'updated_at',
    )


@admin.register(models.VideoUnlike)
class VideoUnlikeAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'video',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'message',
        'creator',
        'video',
        'created_at',
        'updated_at',
    )


@admin.register(models.CommentLike)
class CommentLikeAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'comment',
        'created_at',
        'updated_at',
    )


@admin.register(models.CommentUnlike)
class CommentUnlikeAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'comment',
        'created_at',
        'updated_at',
    )


@admin.register(models.Reply)
class ReplyAdmin(admin.ModelAdmin):

    list_display = (
        'message',
        'comment',
        'creator',
        'created_at',
        'updated_at',
    )
