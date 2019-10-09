# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class State(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name


class LGAs(models.Model):
	name = models.CharField(max_length=100)
	state = models.ForeignKey(State,on_delete=models.CASCADE)

	def __str__(self):
		return self.name

class Position(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return self.name



class Officials(models.Model):
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	lgas = models.ForeignKey(LGAs,on_delete=models.CASCADE)
	position = models.ForeignKey(Position,on_delete=models.CASCADE)

	def __str__(self):
		return self.first_name + " " + self.last_name 


	def search_official(keywords):
		if keywords == None:
			keywords = []
		from django.db.models import Q
		query_builder = [Q(lgas__name__icontains=keyword)|Q(lgas__state__name__icontains=keyword) for keyword in keywords]
		if keywords:
			results = []
			query = query_builder.pop()
			for item in query_builder:
				query|=item
			return Officials.objects.filter(query)
			return results
		else: 
			return Officials()


	class Message(models.Model):
		message = models.CharField(max_length=500)
		user = models.ForeignKey(User,on_delete=models.CASCADE)
		sent = models.BooleanField(default=False)
		error_message = models.TextField(null=True)




