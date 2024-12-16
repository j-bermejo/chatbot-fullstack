from django.urls import path
from .views import ChatBotView

urlpatterns = [
    path('message/', ChatBotView.as_view(), name='chat-message'),
]
