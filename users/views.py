from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import User
from .serializers import RegisterUserSerializar, CustomTokenObtainPairSerializer


@api_view(["POST"])
def register_user(request):
    data = request.data
    user = User.objects.create(
        email=data["email"],
        username=data["username"],
        password=make_password(data["password"])
    )
    serializer = RegisterUserSerializar(user, many=False)
    return Response(serializer.data)

class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
