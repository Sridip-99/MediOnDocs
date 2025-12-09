import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL + '/api/documents/';

export const fetchDocuments = () => axios.get(API_URL);
export const deleteDocument = (id) => axios.delete(`${API_URL}${id}/`);
export const getDownloadUrl = (id) => `${API_URL}${id}/download/`;

export const uploadDocument = (file) => {
    const formData = new FormData();
    formData.append('file', file); // Matches backend 'file' key
    return axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
};