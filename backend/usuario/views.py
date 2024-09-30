from django.contrib.auth import login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from .serializers import *
from rest_framework import permissions, status
from .validations import *
from rest_framework import generics
from .models import CarrinhoItem, User
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.urls import reverse
from django.utils.http import urlsafe_base64_encode

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    ##
    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    
class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class CarrinhoItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CarrinhoItem.objects.all()
    serializer_class = CarrinhoItemSerializer
    

class UserUpdate(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def patch(self, request):
        emailBody = request.data.get('email')
        requestBody = request.data
        user = User.objects.get(email=emailBody)
        serializer = UserInfoSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"atualizado": requestBody}, status=status.HTTP_200_OK)
        return Response({"error": 'error'},  status=status.HTTP_400_BAD_REQUEST)
    
class ResetPasswordVerify(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if user:
            encode_pk = urlsafe_base64_encode(force_bytes(user.pk))
            token = PasswordResetTokenGenerator().make_token(user)

            # localhost:8000/reset-password/<encoded-pk>/<token>/

            reset_url = reverse(
                "reset-password",
                kwargs={"encoded_pk":encode_pk, "token":token}
            )

            reset_url = reset_url

            return Response(
                {
                    "message": f"{reset_url}"
                }, 
                status=status.HTTP_200_OK
            )
        
        return Response(
            {"message":"Usuario nao existe"}, 
            status=status.HTTP_400_BAD_REQUEST
        )

class ResetPassword(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ResetPasswordSerializer

    def patch(self, request, *args, **kwargs):
        requestData = request.data.get('password')
        if requestData is None:
            return Response({"error": "Senha não informada"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.serializer_class(data={'password': requestData}, context={"kwargs": kwargs})
        serializer.is_valid(raise_exception=True)

        return Response(
            {
                "message":"Senha redefinida com sucesso"
            },
            status=status.HTTP_200_OK
        )
