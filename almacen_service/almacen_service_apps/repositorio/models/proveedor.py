from uuid import uuid4
from django.db import models


class Proveedor(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    direccion = models.CharField(max_length=60)
    razonSocial = models.CharField(max_length=60)
    representanteLegal = models.CharField(max_length=60)
    ruc = models.CharField(max_length=60)

    class Meta:
        verbose_name = "Proveedor"
        verbose_name_plural = "Proveedors"

    def __str__(self):
        return self.direccion
