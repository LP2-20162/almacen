from uuid import uuid4
from django.db import models
from .farmacia import Farmacia


class Almacen(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    precioUnitario = models.CharField(max_length=60)
    stockActual = models.CharField(max_length=60)
    stockMinimo = models.CharField(max_length=60)
    farmacia = models.ForeignKey(Farmacia, null=True, blank=True)

    class Meta:
        verbose_name = "Almacen"
        verbose_name_plural = "Almacenes"

    def __str__(self):
        return self.precioUnitario
