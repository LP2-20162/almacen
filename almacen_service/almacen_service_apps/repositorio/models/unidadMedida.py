from uuid import uuid4
from django.db import models


class UnidadMedida(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    class Meta:
        verbose_name = "UnidadMedida"
        verbose_name_plural = "UnidadMedidas"

    def __str__(self):
        pass
