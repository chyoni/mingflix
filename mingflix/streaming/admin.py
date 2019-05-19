from django.contrib import admin
from . import models
# Register your models here.


@admin.register(models.Streaming)
class StreamingAdmin(admin.ModelAdmin):

    list_filter = (
        'title',
        'creator',
        'description',
    )

    list_display_link = (
        'title',
    )

    list_display = (
        'creator',
        'title',
        'description',
    )
