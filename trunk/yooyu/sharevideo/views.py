from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
class MessageController():
  def findAll(request):
    if(request.method=='GET'):
      return HttpResponse('123')