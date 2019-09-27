from django.conf.urls import url, include
from .import views
from rest_framework import viewsets
from rest_framework import routers
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register(r'state', views.StateViewSet, 'state')
router.register(r'lgas', views.LGAsViewSet, 'lgas')
router.register(r'position', views.PositionViewSet, 'position')
router.register(r'officials', views.OfficialsViewSet, 'officials')
router.register(r'searc', views.SearchViewSet, 'search')

urlpatterns = [
#url('',views.index,name='index'),
url('test/', include(router.urls)),
url('wikipol1-auth/', include('rest_framework.urls', namespace='rest_framework'))

]