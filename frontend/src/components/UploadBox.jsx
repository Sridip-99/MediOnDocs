// src/components/UploadBox.jsx
import React, { useState } from "react";
import "./UploadBox.css";
import UploadPDFIcon from '../assets/UploadLogo.webp';

export default function UploadBox({ selectedFile, handleFileChange, handleUpload }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      handleFileChange({ target: { files: [file] } });
    }
  };

  return (
    <form onSubmit={handleUpload} className="upload-form">
      
      <div
        className={`upload-dropzone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          id="pdfInput"
          hidden
        />

        <label htmlFor="pdfInput">
          <div className="upload-file-icon">
            <img src={UploadPDFIcon} alt="Upload PDF Icon" className="w-auto h-full"/>
          </div>
          <p className="upload-main-text">
            {selectedFile ? selectedFile.name : "Drag & Drop your PDF here"}
          </p>
          <p className="upload-sub-text">or click to browse</p>
        </label>
      </div>

      <button
        type="submit"
        disabled={!selectedFile}
        className="upload-btn"
      >
        Upload PDF
      </button>
    </form>
  );
}
