from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from almacen_service_apps.repositorio.models.ordenSalida import OrdenSalida


class OrdenSalidaSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrdenSalida
        fields = '__all__'


class OrdenSalidaViewSet(viewsets.ModelViewSet):
    queryset = OrdenSalida.objects.all()
    serializer_class = OrdenSalidaSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(baseImponible__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
