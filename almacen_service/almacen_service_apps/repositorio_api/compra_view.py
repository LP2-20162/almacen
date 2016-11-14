from rest_framework import serializers, viewsets

from almacen_service_apps.repositorio.models.compra import Compra


class CompraSerializer(serializers.ModelSerializer):

    pr_nombre = serializers.ReadOnlyField(
        source='proveedor.id')

    al_nombre = serializers.ReadOnlyField(
        source='almacen.id')

    class Meta:
        model = Compra
        fields = '__all__'


class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
