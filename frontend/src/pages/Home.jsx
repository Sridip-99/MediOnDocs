// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import UploadBox from '../components/UploadBox';
import DisplayFilesUploaded from '../components/DisplayFilesUploaded';


export default function Home({ selectedFile, handleFileChange, handleUpload, documents, handleDelete, getDownloadUrl }) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen">
            <Hero />
            <UploadBox selectedFile={selectedFile} handleFileChange={handleFileChange} handleUpload={handleUpload} />
            <DisplayFilesUploaded documents={documents} handleDelete={handleDelete} getDownloadUrl={getDownloadUrl} />
        </div>
    );
}