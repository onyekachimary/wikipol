from django.conf.urls import url, include
from rest_framework import routers, serializers, viewsets
from .models import State, LGAs, Position,Officials

class StateSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = State
		fields = ('name',)

class LGAsSerializer(serializers.ModelSerializer):
	state=StateSerializer()
	class Meta:
		model = LGAs
		fields = ('name', 'state')

class PositionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Position
		fields = ('name',)

class OfficialsSerializer(serializers.ModelSerializer):
	lgas=LGAsSerializer()
	position=PositionSerializer()
	class Meta:
		model = Officials
		fields = ('first_name', 'last_name', 'lgas', 'position')


			
