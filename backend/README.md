# Backend - MediOnDocs API

This directory contains the Django backend for the MediOnDocs patient portal. It provides REST API endpoints for uploading, listing, downloading, and deleting medical documents.

---

### ⚙️ Prerequisites
* Python 3.8+ installed
* pip (Python package manager)

---

### 🚀 How to Run Locally

**Create a `.env` & copy the values from `.env.example` or simply Rename `.env.example` to `.env` and set your Django `SECRET_KEY`.** 

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment (Recommended):**
    ```bash
    # Windows
    python -m venv venv
    venv\Scripts\activate

    # Mac/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run Migrations:**
    Initialize the database (SQLite).
    ```bash
    python manage.py migrate
    ```

5.  **Start the Server:**
    ```bash
    python manage.py runserver
    ```
    The API will be available at `http://localhost:8000/`.

---

### 📡 API Endpoints

|   Method      |            Endpoint               |            Description                |
| :------------ | :-------------------------------- | :------------------------------------ |
| **GET**       | `/`                               | Backend server homepage               |
| **GET**       | `/api/documents/`                 | List all uploaded documents           |
| **POST**      | `/api/documents/`                 | Upload a new PDF file                 |
| **GET**       | `/api/documents/:id/`             | Retrieve metadata for a specific file |
| **GET**       | `/api/documents/:id/download/`    | Download the actual PDF file          |
| **DELETE**    | `/api/documents/:id/`             | Delete a file and its record          |

---

### 🧠 Logic Handles
* **File Save Handle:** Manages saving files to the local `/media/uploads/` directory.
* **Validations:** Ensures only files with `.pdf` extensions are accepted.
* **Metadata Logic:** Automatically extracts filesize and filename upon upload.
* **Cleanup:** Deletes the actual file from storage when the database record is removed.
