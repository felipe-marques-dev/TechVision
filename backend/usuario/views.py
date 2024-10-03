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
from django.core.mail import send_mail
from django.contrib.auth.hashers import make_password, check_password
from django.template.loader import render_to_string

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

class UserCart(APIView):
    authentication_classes = (SessionAuthentication,)
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        emailBody= request.data.get('email')

        user = User.objects.get(email=emailBody)
        print(user)
        cart = Carrinho.objects.get(user_id  = user)
        cartItem = cart.itens.all()
        serializer = CarrinhoItemSerializer(cartItem, many=True)
        return Response({"itens": serializer.data}, status=status.HTTP_200_OK)

    def delete(self, request):
        
        emailBody= request.data.get('email')
        productBody = request.data.get('product_id')
        user = User.objects.get(email=emailBody)
        cartItem = CarrinhoItem.objects.get(produto_id = productBody)
        cartItem.delete()        
        return Response({'data': 'deletado!' })
    
    def patch(self, request):
        emailBody= request.data.get('email')
        quantityBody = request.data.get('quantity')

        


class UserCheckPassword(APIView):
    permission_class = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication)

    def post(self, request):
        # dados do corpo da  requisicao
        emailBody = request.data.get('email')
        senhaBody = request.data.get('password')
        
        user = User.objects.get(email=emailBody) # pega os dados do usuario no BD
        passwordMatch =  user.check_password(senhaBody) # verifica se a senha é valida(retorna True ou False
        
        # se for True retorna 200
        if passwordMatch is True:
            return Response(status=status.HTTP_200_OK)
        # se for False retorna 401
        return Response(status=status.HTTP_400_UNAUTHORIZED)
    


        

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    ##
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)


class UserUpdate(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def patch(self, request):
        emailBody = request.data.get('email')
        senhaBody = request.data.get('password')
        requestBody = request.data
        user = User.objects.get(email=emailBody)
       

        if senhaBody != None and len(senhaBody) >= 8:
            senha_cripto = make_password(senhaBody)
            requestSerializer = {'password':senha_cripto,'email': emailBody}
            serializer = UserInfoSerializer(user, data=requestSerializer, partial=True)
        else:
            serializer = UserInfoSerializer(user, data=requestBody, partial=True)

        
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

            reset_url = f"localhost:3000{reset_url}"

            context = { "reset_url": reset_url }
            html_content = render_to_string('mail/mail.html', context)
            plain_content = render_to_string('mail/mail.txt', context)
            print(html_content)
            send_mail(
                subject = "Redefinição de senha",
                message = plain_content,
                from_email = 'lucasleite.miguel10@gmail.com',
                recipient_list = [f'{email}',],
                html_message = html_content,
                fail_silently = False,
            )

            return Response(status=status.HTTP_200_OK)
        
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
