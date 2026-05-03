from django.urls import path
from . import views


app_name = "api"
urlpatterns = [
    path("calculate/", views.calculate_lcm, name="calculate_lcm"),
]