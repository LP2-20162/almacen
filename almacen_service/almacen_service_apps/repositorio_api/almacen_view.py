from rest_framework import serializers, viewsets
from almacen_service_apps.repositorio.models.almacen import Almacen


class AlmacenSerializer(serializers.ModelSerializer):

    fm_nombre = serializers.ReadOnlyField(
        source='farmacia.nombre')

    class Meta:
        model = Almacen
        fields = '__all__'


class AlmacenViewSet(viewsets.ModelViewSet):
    queryset = Almacen.objects.all()
    serializer_class = AlmacenSerializer
