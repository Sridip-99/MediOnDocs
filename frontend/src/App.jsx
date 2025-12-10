// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { fetchDocuments, uploadDocument, deleteDocument, getDownloadUrl } from './utils/Api';


export default function App() {
	const [darkMode, setDarkMode] = useState(() => {
        // load saved theme from localStorage
        return localStorage.getItem("theme") === "dark";
    });
    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

	const [documents, setDocuments] = useState([]);
	const [selectedFile, setSelectedFile] = useState(null);

	useEffect(() => {
		loadDocs();
	}, []);

	const loadDocs = async () => {
		try {
			const res = await fetchDocuments();
			setDocuments(res.data);
		} catch (err) {}
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type !== 'application/pdf') {
			alert("Only PDF files allowed");
			e.target.value = null;
			return;
		}
		setSelectedFile(file);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		if (!selectedFile) return;


		try {
			await uploadDocument(selectedFile);
			setSelectedFile(null);
			loadDocs();
			alert("Upload successful!");
		} catch (err) {
			alert("Upload failed! Try again.");
		}
	};

	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this file?")) return;

		try {
			await deleteDocument(id);
			setDocuments(prev => prev.filter(doc => doc.id !== id));
			alert("Delete successful!");
		} catch (err) {
			alert("Delete failed! Try again.");
		}
	};

	return (
		<div className={darkMode ? "dark" : ""}>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Home
				selectedFile={selectedFile}
				handleFileChange={handleFileChange}
				handleUpload={handleUpload}
				documents={documents}
				handleDelete={handleDelete}
				getDownloadUrl={getDownloadUrl}
			/>
			<Footer />
		</div>
	);
}