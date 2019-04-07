from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from . import models
from mingflix.users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("name", "gender", "profile_image", "phone",
                                      "followers", "following")}),) + auth_admin.UserAdmin.fieldsets
    list_display = ["id", "username", "name", "is_superuser"]
    search_fields = ["name"]


@admin.register(models.Channel)
class ChannelAdmin(admin.ModelAdmin):

    list_display_links = (
        'channel_name',
    )

    list_filter = (
        'channel_name',
    )

    list_display = (
        'id',
        'channel_name',
        'channel_caption',
        'stream_key',
        'creator',
        'created_at'

    )
