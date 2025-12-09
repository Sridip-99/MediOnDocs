# backend/api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DocumentViewSet

# Create a router and register our viewset with it.
router = DefaultRouter()
# This creates routes for /documents/ (GET, POST) and /documents/{id}/ (GET, DELETE)
router.register(r'documents', DocumentViewSet, basename='document')

urlpatterns = [
    path('', include(router.urls)),
]