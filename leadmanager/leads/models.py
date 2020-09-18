from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100, verbose_name='姓名')
    email = models.EmailField(max_length=100, unique=True, verbose_name='邮箱')
    message = models.CharField(max_length=500, blank=True, verbose_name='信息')
    owner = models.ForeignKey(
        User, related_name='leads', on_delete=models.CASCADE,  null=True, verbose_name='账号')
    create_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = verbose_name_plural = '客户'
