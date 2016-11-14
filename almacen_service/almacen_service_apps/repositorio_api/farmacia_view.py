from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from almacen_service_apps.repositorio.models.farmacia import Farmacia


class FarmaciaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Farmacia
        fields = '__all__'


class FarmaciaViewSet(viewsets.ModelViewSet):
    queryset = Farmacia.objects.all()
    serializer_class = FarmaciaSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
