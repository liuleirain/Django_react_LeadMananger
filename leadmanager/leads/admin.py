from django.contrib import admin

from .models import Lead


class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'create_at')


admin.site.register(Lead, LeadAdmin)
