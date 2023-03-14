from unicodedata import name
from django.urls import  path
from . import views

urlpatterns = [
    path('',views.getRoutes,name='routes'),
    path('twitter/<str:keyword>/',views.twitter,name='twitter'),
    path('queryTwitter/',views.queryTwitter,name='queryTwitter'),
    path('queryYouTube/',views.queryYouTube,name='queryYouTube'),
]

