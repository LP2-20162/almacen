from uuid import uuid4
from django.db import models
from .proveedor import Proveedor
from .almacen import Almacen


class Compra(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    baseImponible = models.CharField(max_length=60)
    fechaDocumento = models.CharField(max_length=60)
    igv = models.CharField(max_length=60)
    numero = models.CharField(max_length=60)
    serie = models.CharField(max_length=60)
    tipoDocumento = models.CharField(max_length=60)
    total = models.CharField(max_length=60)

    proveedor = models.ForeignKey(Proveedor, null=True, blank=True)
    almacen = models.ForeignKey(Almacen, null=True, blank=True)

    class Meta:
        verbose_name = "Copra"
        verbose_name_plural = "Copras"

    def __str__(self):
        return self.baseImponible
