# Frontend - MediOnDocs UI

This directory contains the React frontend for the MediOnDocs patient portal. It interacts with the Django backend to provide a user-friendly interface for managing documents.

---

### ⚙️ Prerequisites
* Node.js (v14+)
* npm (Node Package Manager)

---

### 🚀 How to Run Locally

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Ensure the backend API URL is correctly set.
    * Create a `.env` file (or rename `.env.example`).
    * Set the API URL:
        ```
        VITE_BACKEND_URL=http://localhost:8000
        ```

4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The application will run at `http://localhost:5173/` (or similar port shown in terminal).

---

### 🖥️ Project Structure

* **`src/pages/Home.jsx`**: Main view combining the upload box and file list.
* **`src/components/UploadBox.jsx`**: Component handling file selection and upload API calls.
* **`src/components/DisplayFilesUploaded.jsx`**: Component rendering the table of files.
* **`src/utils/Api.js`**: Centralized Axios instance for backend communication.

---

### 🎨 Features
* **Real-time Validation:** Checks file type before uploading.
* **Responsive UI:** Clean interface with a header, footer, and hero section.
* **Feedback:** Displays success/error messages upon upload completion.