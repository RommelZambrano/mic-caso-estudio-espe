from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (TipoInmuebleViewSet, InmuebleViewSet, ClienteViewSet,
                    CaracteristicaViewSet, CaracteristicasInmuebleViewSet,
                    ArriendoPropiedadViewSet, PagoViewSet)

# Crea un router y registra los viewsets con él.
router = DefaultRouter()
router.register(r'tipoinmueble', TipoInmuebleViewSet)
router.register(r'inmueble', InmuebleViewSet)
router.register(r'cliente', ClienteViewSet)
router.register(r'caracteristica', CaracteristicaViewSet)
router.register(r'caracteristicasinmueble', CaracteristicasInmuebleViewSet)
router.register(r'arriendopropiedad', ArriendoPropiedadViewSet)
router.register(r'pago', PagoViewSet)

# Las URLs de la API son ahora determinadas automáticamente por el router.
# Además, incluimos las URLs de login para la API navegable.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
