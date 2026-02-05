import React, { useState } from "react";
import { FiSearch, FiUser, FiUpload, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DOCUMENT_TYPES, DEPARTMENTS, PRIMARY_REQUESTS, DELIVERY_OPTIONS } from "../../utils/dummyData";

export default function DocumentRequestForm() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFiles([...uploadedFiles, file]);
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      {/* Form Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Request Documents</h1>

          {/* Info Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <span className="text-yellow-600 text-xl"></span>
            <p className="text-sm text-yellow-800">
              Fill out the form below to request different documents
            </p>
          </div>

          {/* Requestor Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <FiUser className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="font-medium">MARK ZUCKERBERG</div>
              <div className="text-sm text-gray-600">Co-Founder / CEO</div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                  {DOCUMENT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Request</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                  {PRIMARY_REQUESTS.map((req) => (
                    <option key={req} value={req}>{req}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Department</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>N/A</option>
                  {DEPARTMENTS.slice(1).map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Option</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                  {DELIVERY_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">
                Upload Documents for Signing <span className="text-gray-400 text-sm">(Optional)</span>
              </h3>
              <label className="text-sm text-gray-600 underline cursor-pointer hover:text-gray-800">
                Add Document ⊕
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2 mb-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
                        <span className="text-yellow-600"></span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{file.name}</div>
                        <div className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</div>
                      </div>
                    </div>
                    <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-gray-600">
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-yellow-500 transition-colors">
              <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject/Title</label>
              <input
                type="text"
                placeholder="Onboarding Certificate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <textarea
                placeholder="I am requesting this document to support my employment/boarding application..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-24 resize-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={() => navigate("/documents")}
              className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button className="px-6 py-2 bg-yellow-500 text-white rounded-md text-sm font-medium hover:bg-yellow-600">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
