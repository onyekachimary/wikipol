# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import State
from .models import LGAs
from .models import Position
from .models import Officials

# Register your models here.
admin.site.register(State)
admin.site.register(LGAs)
admin.site.register(Position)
admin.site.register(Officials)

