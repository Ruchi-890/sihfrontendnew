'use client';
import { useState } from 'react';

// Define the type for the uploaded file
interface UploadedFile {
  name: string;
}

export default function SessionDocumentation() {
  const [notes, setNotes] = useState<string>('');
  const [files, setFiles] = useState<UploadedFile[]>([]);

  // Handle file uploads
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;
    if (uploadedFiles) {
      const newFiles = Array.from(uploadedFiles).map(file => ({ name: file.name }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  // Auto-save functionality
  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
    // Simulate auto-save (in a real app, this would save to a database)
    console.log('Auto-saving notes:', event.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
      <h3 className="text-lg font-semibold mb-4">Session Documentation</h3>

      {/* Session notes input */}
      <textarea
        value={notes}
        onChange={handleNotesChange}
        placeholder="Document session details, observations, and patient feedback here..."
        className="w-full p-3 border rounded-lg mb-4"
        rows={5}
        aria-label="Session notes"
      ></textarea>

      {/* File upload section */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Upload Relevant Files:</label>
        <input
          type="file"
          onChange={handleFileUpload}
          multiple
          className="block w-full text-gray-500 border border-gray-300 rounded-lg p-2"
          aria-label="File upload"
        />
      </div>

      {/* Display uploaded files */}
      <div className="mt-4">
        <h4 className="text-md font-semibold">Uploaded Files:</h4>
        <ul className="list-disc pl-5">
          {files.length > 0 ? (
            files.map((file, index) => (
              <li key={index} className="text-gray-600">
                {file.name}
              </li>
            ))
          ) : (
            <li className="text-gray-400">No files uploaded yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
