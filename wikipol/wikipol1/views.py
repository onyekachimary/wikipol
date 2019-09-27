# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from .serializers import StateSerializer, LGAsSerializer, PositionSerializer, OfficialsSerializer
from .models import State, LGAs, Position, Officials
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
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
