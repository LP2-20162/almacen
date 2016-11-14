from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from almacen_service_apps.repositorio.models.detalleOs import DetalleOs


class DetalleOsSerializer(serializers.ModelSerializer):

    class Meta:
        model = DetalleOs
        fields = '__all__'


class DetalleOsViewSet(viewsets.ModelViewSet):
    queryset = DetalleOs.objects.all()
    serializer_class = DetalleOsSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(cantidad__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
