import React from 'react';
import { FiDownload } from 'react-icons/fi';

function downloadDoc(doc) {
  if (!doc.dataUrl) return;
  const a = document.createElement('a');
  a.href = doc.dataUrl;
  a.download = doc.name || 'resume.pdf';
  a.click();
}

export default function CareerDocumentsCard({ careerDocuments }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-5">Career Documents</h3>
      <div className="flex flex-col gap-3">
        {careerDocuments.map((doc) => (
          <div
            key={doc.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {doc.uploadedBy}
              </div>
              <span className="text-xs text-gray-700 font-medium truncate">{doc.name}</span>
            </div>
            {doc.dataUrl ? (
              <button
                type="button"
                onClick={() => downloadDoc(doc)}
                className="w-9 h-9 flex items-center justify-center bg-yellow-50 rounded-lg hover:bg-yellow-600 hover:text-white text-yellow-600 transition-colors flex-shrink-0"
                title="Download"
              >
                <FiDownload className="text-base" />
              </button>
            ) : (
              <span className="text-xs text-gray-400 flex-shrink-0">No file</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
