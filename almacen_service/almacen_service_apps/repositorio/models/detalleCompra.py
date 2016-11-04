from uuid import uuid4
from django.db import models
from .producto import Producto
from .compra import Compra


class DetalleCompra(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    detalle = models.CharField(max_length=60)
    fecha = models.DateTimeField(auto_now_add=True)

    producto = models.ForeignKey(Producto, null=True, blank=True)
    compra = models.ForeignKey(Compra, null=True, blank=True)

    class Meta:
        verbose_name = "DetalleCompra"
        verbose_name_plural = "DetalleCompras"

    def __str__(self):
        return self.detalle
