from uuid import uuid4
from django.db import models

# Create your models here.


class Farmacia(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nombre = models.CharField(max_length=60, blank=True)
    direccion = models.CharField(max_length=60, blank=True)

    class Meta:
        verbose_name = "Farmacia"
        verbose_name_plural = "Farmacias"

    def __str__(self):
        return self.nombre
