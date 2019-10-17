# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from .serializers import StateSerializer, LGAsSerializer, PositionSerializer, OfficialsSerializer
from .models import State, LGAs, Position, Officials
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.core.mail import EmailMessage

# Create your views here.

class StateViewSet(viewsets.ModelViewSet):
	queryset = State.objects.all()
	serializer_class = StateSerializer

class LGAsViewSet(viewsets.ModelViewSet):
	queryset = LGAs.objects.all()
	serializer_class = LGAsSerializer

class PositionViewSet(viewsets.ModelViewSet):
	queryset = Position.objects.all()
	serializer_class = PositionSerializer

class OfficialsViewSet(viewsets.ModelViewSet):
	queryset = Officials.objects.all()
	serializer_class = OfficialsSerializer

class SearchViewSet(viewsets.ModelViewSet):
	queryset = Officials.objects.all()
	serializer_class = OfficialsSerializer

	def list(self, request, *kwargs):
		search_text = request.query_params.get('search')
		queryset = Officials.search_official(search_text.split(' '))
		# queryset = Officials.objects.all()
		serializer = OfficialsSerializer(queryset, many=True, context={'request': request})
		# serializer = OfficialsSerializer(queryset, many=True, context={'request': request})
		return Response(serializer.data) 
		# return Response({'text':search_text})

def index(request):
	return HttpResponse("Hello world!") 


class Petition(APIView):
    parser_classes = (MultiPartParser,FormParser,JSONParser)
    def post(self,request):
    	if request.data:
    		message=request.data.get('message')
    		print(message)
    		# officials = get_object_or_404(Officials, pk=officials_id)
    		# officials_id = request.data.get('officials_id')
    		# officials = Officials.objects.get(pk=officials_id)
    		sender_name = request.data.get('sender_name')
    		# send_mail(
      #               subject='test mails',
      #               message=message,
      #               recipient_list=['maryonyi144@gmail.com'],
      #               from_email='admin@linuxjobber.com'
      #           )
    		send_mail(
                   	'test mails from wikipol',
                     message,
                     settings.EMAIL_HOST_USER, ['maryonyi144@gmail.com', 'joseph.showunmi@linuxjobber.com'])
                     

    		return Response({'mess':message},status=status.HTTP_200_OK)

    		
    		# send_mail(
    		# 	subject='Petition from{}'.format(sender_name),
    		# 	message=message,
    		# 	# recipent_list= Officials.email,
    		# 	# from_email='admin@linuxjobber.com'
    		# )
    		# return Response("You will notified when your message has been sent")


# def set_as_sent(self):
#         from .models import Message
#         message =  Message()
#         message.save()

