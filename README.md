# MediOnDocs - Patient Portal Application

**MediOnDocs** is a full-stack patient portal designed to allow users to securely upload, view, download, and manage medical documents (PDFs). This project demonstrates a clean, working full-stack architecture using **React (Vite)** for the frontend and **Django (DRF)** for the backend **SQLite DB** for database and **Local Storage / (file-system)** as file storage.

### 🔗 Live Demo

* **Frontend:** [https://mediondocs.netlify.app](https://mediondocs.netlify.app)
* **Backend API:** [https://mediondocs.onrender.com](https://mediondocs.onrender.com)
* **Repository:** [https://github.com/Sridip-99/MediOnDocs](https://github.com/Sridip-99/MediOnDocs)
* **Repository-Tree:** [https://uithub.com/Sridip-99/MediOnDocs/tree/main](https://uithub.com/Sridip-99/MediOnDocs/tree/main)

---

### 📂 Project Structure

This repository is organized into two main directories:

* **`frontend/`**: Contains the React application (built with Vite).
* **`backend/`**: Contains the Django REST Framework API and database logic.
* **`Design.pdf`**: The mandatory design document detailing architecture, stack choices, and API specifications.

```text
├── backend/          # Django API Service
│   ├── api/          # App containing models, views, and serializers
│   ├── backend/      # Project settings and configuration
│   ├── db.sqlite3    # Local SQLite database
│   └── manage.py     # Django management script
│
├── frontend/         # React Frontend Application
│   ├── src/          # Components, pages, and API utilities
│   ├── public/       # Static assets
│   └── package.json  # Node dependencies
│
├── Design.pdf/       # Application Architecture Docs
└── README.md         # This file
```

---

### 🚀 Quick Start

To run this project locally, you will need two separate terminal instances.

**1. Setup Backend**
Navigate to the backend folder and follow the instructions in `backend/README.md`.

```bash
cd backend
# (Follow backend README instructions to install requirements and run server)
```

**2. Setup Frontend**
Navigate to the frontend folder and follow the instructions in `frontend/README.md`.

```bash
cd frontend
# (Follow frontend README instructions to install dependencies and run dev server)
```

---

### 🛠️ Tech Stack

* **Frontend**: React, Vite, CSS, TailWind CSS 
* **Backend**: Python, Django, Django REST Framework
* **Database**: SQLite 

---

### ✨ Features

* **Upload**: Securely upload PDF documents with validation logic
* **View**: List all uploaded files with metadata (ID, filename, size, upload date).
* **Download**: Download specific documents locally.
* **Delete**: Remove documents from both the database and local storage.