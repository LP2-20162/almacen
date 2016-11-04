from django.conf.urls import url, include
from rest_framework import routers

from .almacen_view import AlmacenViewSet
from .farmacia_view import FarmaciaViewSet
from .producto_view import ProductoViewSet

router = routers.DefaultRouter()

router.register(r'almacens', AlmacenViewSet)
router.register(r'farmacias', FarmaciaViewSet, 'farmacias-view')
router.register(r'productos', ProductoViewSet, 'productos-view')

urlpatterns = [

    url(r'^', include(router.urls)),

]
