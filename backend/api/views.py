# backend/api/views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import FileResponse
from .models import Document
from .serializers import DocumentSerializer

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def create(self, request, *args, **kwargs):
        file_obj = request.FILES.get('file')

        # Validate file type is PDF 
        if not file_obj or not file_obj.name.endswith('.pdf'):
            return Response(
                {"error": "Only PDF files are allowed."}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create the object (metadata is extracted from file_obj)
        instance = Document.objects.create(
            filename=file_obj.name,
            filepath=file_obj,
            filesize=file_obj.size
        )
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    # Custom endpoint for downloading files
    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        document = self.get_object()
        # Open the file and stream it back
        file_handle = document.filepath.open()
        response = FileResponse(file_handle, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{document.filename}"'
        return response