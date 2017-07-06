from django.db import models

# Create your models here.
# 消息
class Messages(models.Model):
  title=models.CharField(max_length=20)#标题
  body=models.CharField(max_length=100)#信息体
  publisher=models.BigIntegerField()#发布人
  create_by=models.BigIntegerField()#创建人
  create_date=models.DateTimeField()#创建时间
  update_by=models.BigIntegerField()#更新人
  update_date=models.DateTimeField()#更新时间