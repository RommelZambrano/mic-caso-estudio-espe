from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import User

class RegisterUserSerializar(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "username", "password"]

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["email"] = user.email
        token["is_staff"] = user.is_staff
        return token