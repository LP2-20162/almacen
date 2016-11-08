from django.conf.urls import url, include
from rest_framework import routers

from .almacen_view import AlmacenViewSet
from .categoria_view import CategoriaViewSet
from .compra_view import CompraViewSet
from .detalleCompra_view import DetalleCompraViewSet
#from .destalleOs_view import destalleOsViewSet
from .farmacia_view import FarmaciaViewSet
from .marca_view import MarcaViewSet
#from .ordenSalida_view import ordenSalidaViewSet
from .producto_view import ProductoViewSet
from .proveedor_view import ProveedorViewSet

router = routers.DefaultRouter()

router.register(r'almacenes', AlmacenViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'compras', CompraViewSet)
router.register(r'detalleCompras', DetalleCompraViewSet)
#router.register(r'detalleOses', detalleOs, 'detalleOs-view')
router.register(r'farmacias', FarmaciaViewSet)
router.register(r'marcas', MarcaViewSet)
#router.register(r'ordenSalidas', ordenSalidaViewSet, 'ordenSalida-view')
router.register(r'productos', ProductoViewSet)
router.register(r'proveedores', ProveedorViewSet)

urlpatterns = [

    url(r'^', include(router.urls)),

]
