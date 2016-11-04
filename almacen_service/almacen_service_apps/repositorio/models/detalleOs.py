from uuid import uuid4
from django.db import models
from .ordenSalida import OrdenSalida
from .producto import Producto


class DetalleOs(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    cantidad = models.CharField(max_length=60)
    puSalida = models.CharField(max_length=60)

    ordenSalida = models.ForeignKey(OrdenSalida, null=True, blank=True)
    producto = models.ForeignKey(Producto, null=True, blank=True)

    class Meta:
        verbose_name = "DetalleOs"
        verbose_name_plural = "DetalleOss"

    def __str__(self):
        return self.cantidad
