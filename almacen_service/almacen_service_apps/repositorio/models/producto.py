from uuid import uuid4
from django.db import models
from .categoria import Categoria
from .marca import Marca
from .almacen import Almacen


class Producto(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nombre = models.CharField(max_length=60)
    codigo = models.CharField(max_length=60)
    categoria = models.ForeignKey(Categoria, null=True, blank=True)
    marca = models.ForeignKey(Marca, null=True, blank=True)
    almacen = models.ForeignKey(Almacen, null=True, blank=True)

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return self.nombre
