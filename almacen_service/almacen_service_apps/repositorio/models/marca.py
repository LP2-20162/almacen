from uuid import uuid4
from django.db import models


class Marca(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nombre = models.CharField(max_length=60)

    class Meta:
        verbose_name = "Marca"
        verbose_name_plural = "Marcas"

    def __str__(self):
        return self.nombre
