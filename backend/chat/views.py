from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ChatMessage
from .serializers import ChatMessageSerializer

class ChatBotView(APIView):
    def post(self, request):
        user = request.user
        message = request.data.get('message', '')
        response = "¡Hola! Estoy aquí para ayudarte."  # Lógica básica
        chat_message = ChatMessage.objects.create(user=user, message=message, response=response)
        serializer = ChatMessageSerializer(chat_message)
        return Response(serializer.data)

