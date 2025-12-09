# backend/api/serializers.py
from rest_framework import serializers
from .models import Document

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'filename', 'filepath', 'filesize', 'created_at']
        read_only_fields = ['filename', 'filesize', 'filepath']