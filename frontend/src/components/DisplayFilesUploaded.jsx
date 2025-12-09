// src/components/DisplayFilesUploaded.jsx
import React from 'react';
import { Trash2, Download } from "lucide-react";

export default function DisplayFilesUploaded({ documents, handleDelete, getDownloadUrl }) {
    return (
        <div className="overflow-x-auto mt-10 border-2 border-blue-400 rounded-xl overflow-hidden shadow-lg">
            <table className="w-full border-collapse shadow-lg">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-3 text-left">Filename</th>
                        <th className="p-3 text-left">Size</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>


                <tbody>
                    {documents.map((doc) => (
                        <tr key={doc.id} className="border-b dark:border-gray-700 hover:bg-[var(--tr-hover)]" >
                            <td className="p-3">{doc.filename}</td>
                            <td className="p-3">{doc.filesize} bytes</td>


                            <td className="p-3 flex gap-3">
                                <a
                                    href={getDownloadUrl(doc.id)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-3 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700"
                                >
                                    <Download size={18} /> Download
                                </a>


                                <button
                                    onClick={() => handleDelete(doc.id)}
                                    className="px-3 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700"
                                >
                                    <Trash2 size={18} /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}