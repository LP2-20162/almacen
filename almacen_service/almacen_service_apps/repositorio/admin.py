from django.contrib import admin
from .models.almacen import Almacen
from .models.categoria import Categoria
from .models.compra import Compra
from .models.detalleCompra import DetalleCompra
from .models.detalleOs import DetalleOs
from .models.farmacia import Farmacia
from .models.marca import Marca
from .models.ordenSalida import OrdenSalida
from .models.producto import Producto
from .models.proveedor import Proveedor
from .models.unidadMedida import UnidadMedida

# Register your models here.


class AlmacenAdmin(admin.ModelAdmin):
    list_display = ('precioUnitario', 'stockActual', 'stockMinimo',)
    search_fields = ('precioUnitario', 'stockActual', 'stockMinimo',)

    list_per_page = 3
admin.site.register(Almacen, AlmacenAdmin)


class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre',)
    search_fields = ('nombre',)

    list_per_page = 3
admin.site.register(Categoria, CategoriaAdmin)


class CompraAdmin(admin.ModelAdmin):
    list_display = ('baseImponible', 'fechaDocumento', 'igv',
                    'numero', 'serie', 'tipoDocumento', 'total',)
    search_fields = ('baseImponible', 'fechaDocumento', 'igv',
                     'numero', 'serie', 'tipoDocumento', 'total',)

    list_per_page = 3
admin.site.register(Compra, CompraAdmin)


class DetalleCompraAdmin(admin.ModelAdmin):
    list_display = ('detalle',)
    search_fields = ('detalle',)

    list_per_page = 3
admin.site.register(DetalleCompra, DetalleCompraAdmin)


class DetalleOsAdmin(admin.ModelAdmin):
    list_display = ('cantidad', 'producto', 'puSalida',)
    search_fields = ('cantidad', 'producto', 'puSalida',)

    list_per_page = 3
admin.site.register(DetalleOs, DetalleOsAdmin)


class FarmaciaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'direccion',)
    search_fields = ('nombre', 'direccion',)

    list_per_page = 3
admin.site.register(Farmacia, FarmaciaAdmin)


class MarcaAdmin(admin.ModelAdmin):
    list_display = ('nombre',)
    search_fields = ('nombre',)

    list_per_page = 3
admin.site.register(Marca, MarcaAdmin)


class OrdenSalidaAdmin(admin.ModelAdmin):
    list_display = ('baseImponible', 'igv', 'numero',
                    'serie', 'tipoDocumento', 'total', )
    search_fields = ('baseImponible', 'igv', 'numero',
                     'serie', 'tipoDocumento', 'total', )

    list_per_page = 3
admin.site.register(OrdenSalida, OrdenSalidaAdmin)


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'codigo')
    search_fields = ('nombre', 'codigo')

    list_per_page = 3
admin.site.register(Producto, ProductoAdmin)


class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('direccion', 'razonSocial', 'representanteLegal', 'ruc', )
    search_fields = ('direccion', 'razonSocial', 'representanteLegal', 'ruc', )

    list_per_page = 3
admin.site.register(Proveedor, ProveedorAdmin)


class UnidadMedidaAdmin(admin.ModelAdmin):
    list_display = ()
    search_fields = ()

    list_per_page = 3
admin.site.register(UnidadMedida, UnidadMedidaAdmin)
