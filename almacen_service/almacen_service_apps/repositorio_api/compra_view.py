from rest_framework import serializers, viewsets

from almacen_service_apps.repositorio.models.compra import Compra


class CompraSerializer(serializers.ModelSerializer):

    pr_direccion = serializers.ReadOnlyField(
        source='proveedor.direccion')

    al_precioUnitario = serializers.ReadOnlyField(
        source='almacen.precioUnitario')

    class Meta:
        model = Compra
        fields = '__all__'


class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
