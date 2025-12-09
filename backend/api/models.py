# backend/api/models.py
from django.db import models
import os

class Document(models.Model):
    # 'id' is created automatically by Django
    filename = models.CharField(max_length=255)
    filepath = models.FileField(upload_to='uploads/') # Stores in 'uploads/' [cite: 33]
    filesize = models.IntegerField() # Size in bytes
    created_at = models.DateTimeField(auto_now_add=True)

    def delete(self, *args, **kwargs):
        # Check if file exists and delete it from local storage [cite: 16]
        if self.filepath:
            if os.path.isfile(self.filepath.path):
                os.remove(self.filepath.path)
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.filename