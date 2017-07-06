from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from sharepic.models import Messages

# Create your views here.
# MessageController
class MessageController:
  def findAll(request):
    if(request.method=='GET'):
      resultData=serializers.serialize("json",Messages.objects.all())
      return HttpResponse(resultData) 
      