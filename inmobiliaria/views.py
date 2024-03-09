# from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import (
    Inmueble,
    TipoInmueble,
    Cliente,
    Caracteristica,
    CaracteristicasInmueble,
    ArriendoPropiedad,
    Pago,
)
from .serializers import (
    InmuebleSerializer,
    TipoInmuebleSerializer,
    ClienteSerializer,
    CaracteristicaSerializer,
    CaracteristicasInmuebleSerializer,
    ArriendoPropiedadSerializer,
    PagoSerializer,
)


class TipoInmuebleViewSet(viewsets.ModelViewSet):
    queryset = TipoInmueble.objects.all()
    serializer_class = TipoInmuebleSerializer


class InmuebleViewSet(viewsets.ModelViewSet):
    queryset = Inmueble.objects.all()
    serializer_class = InmuebleSerializer


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer



class CaracteristicaViewSet(viewsets.ModelViewSet):
    queryset = Caracteristica.objects.all()
    serializer_class = CaracteristicaSerializer


class CaracteristicasInmuebleViewSet(viewsets.ModelViewSet):
    queryset = CaracteristicasInmueble.objects.all()
    serializer_class = CaracteristicasInmuebleSerializer


class ArriendoPropiedadViewSet(viewsets.ModelViewSet):
    queryset = ArriendoPropiedad.objects.all()
    serializer_class = ArriendoPropiedadSerializer


class PagoViewSet(viewsets.ModelViewSet):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer

