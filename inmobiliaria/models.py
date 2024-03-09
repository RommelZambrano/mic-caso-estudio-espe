from django.db import models
from users.models import User

class TipoInmueble(models.Model):
    nombre = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre

class Inmueble(models.Model):
    direccion = models.CharField(max_length=255)
    numero_habitaciones = models.IntegerField()
    tipo = models.ForeignKey(TipoInmueble, on_delete=models.SET_NULL, null=True)
    costo_mensual = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.direccion

class Cliente(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    numero_contacto = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Caracteristica(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre

class CaracteristicasInmueble(models.Model):
    inmueble = models.ForeignKey(Inmueble, on_delete=models.CASCADE)
    caracteristica = models.ForeignKey(Caracteristica, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('inmueble', 'caracteristica')

class ArriendoPropiedad(models.Model):
    inmueble = models.ForeignKey(Inmueble, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    fecha_inicio = models.DateField()
    duracion_meses = models.IntegerField()
    monto_mensual = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.inmueble.direccion} arrendado a {self.cliente.nombre}"

class Pago(models.Model):
    arriendo = models.ForeignKey(ArriendoPropiedad, on_delete=models.CASCADE)
    fecha_pago = models.DateField()
    monto = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Pago de {self.monto} para {self.arriendo}"
