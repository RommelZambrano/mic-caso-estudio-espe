from rest_framework import serializers
from .models import Inmueble, TipoInmueble, Cliente, Caracteristica, CaracteristicasInmueble, ArriendoPropiedad, Pago

class TipoInmuebleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoInmueble
        fields = "__all__"
        

class InmuebleSerializer(serializers.ModelSerializer):
    tipo = serializers.PrimaryKeyRelatedField(
        queryset=TipoInmueble.objects.all(),
        source='tipo',
        write_only=True
    )
    tipo = TipoInmuebleSerializer(read_only=True)

    class Meta:
        model = Inmueble
        fields = '__all__'
        extra_kwargs = {
            'tipo': {'read_only': True},
        }

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = "__all__"

class CaracteristicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caracteristica
        fields = "__all__"

class CaracteristicasInmuebleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CaracteristicasInmueble
        fields = "__all__"

class ArriendoPropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArriendoPropiedad
        fields = "__all__"

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = "__all__"


