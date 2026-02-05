import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiUpload, FiFileText } from 'react-icons/fi';

const defaultForm = {
  name: '',
  position: '',
  photo: '',
  about: '',
  linkedin: '',
  twitter: '',
  instagram: '',
  number: '',
  email: '',
  languages: '',
  education: '',
  skills: '',
  resumeFile: null,
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function EditProfileModal({ isOpen, onClose, initialData, onSave }) {
  const [form, setForm] = useState(defaultForm);
  const [photoDrag, setPhotoDrag] = useState(false);
  const [resumeDrag, setResumeDrag] = useState(false);
  const photoInputRef = useRef(null);
  const resumeInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && initialData) {
      setForm({
        name: initialData.name ?? '',
        position: initialData.position ?? '',
        photo: initialData.photo ?? '',
        about: initialData.about ?? '',
        linkedin: initialData.socialMedia?.linkedin ?? '',
        twitter: initialData.socialMedia?.twitter ?? '',
        instagram: initialData.socialMedia?.instagram ?? '',
        number: initialData.moreDetails?.number ?? '',
        email: initialData.moreDetails?.email ?? '',
        languages: initialData.moreDetails?.languages ?? '',
        education: initialData.moreDetails?.education ?? '',
        skills: initialData.moreDetails?.skills ?? '',
        resumeFile: null,
      });
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const processPhotoFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setForm((prev) => ({ ...prev, photo: dataUrl }));
    } catch (err) {
      console.error('Failed to read image', err);
    }
  };

  const processResumeFile = async (file) => {
    if (!file) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setForm((prev) => ({ ...prev, resumeFile: { name: file.name, dataUrl } }));
    } catch (err) {
      console.error('Failed to read resume', err);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    processPhotoFile(file);
    e.target.value = '';
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    processResumeFile(file);
    e.target.value = '';
  };

  const onPhotoDrop = (e) => {
    e.preventDefault();
    setPhotoDrag(false);
    const file = e.dataTransfer.files?.[0];
    processPhotoFile(file);
  };

  const onResumeDrop = (e) => {
    e.preventDefault();
    setResumeDrag(false);
    const file = e.dataTransfer.files?.[0];
    processResumeFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: form.name,
      position: form.position,
      photo: form.photo,
      about: form.about,
      socialMedia: {
        linkedin: form.linkedin || '#',
        twitter: form.twitter || '#',
        instagram: form.instagram || '#',
      },
      moreDetails: {
        number: form.number,
        email: form.email,
        languages: form.languages,
        education: form.education,
        skills: form.skills,
      },
      resumeFile: form.resumeFile,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <form id="edit-profile-form" onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Position</label>
              <input
                type="text"
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">Profile picture</label>
            <input
              ref={photoInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <div
              role="button"
              tabIndex={0}
              onClick={() => photoInputRef.current?.click()}
              onKeyDown={(e) => e.key === 'Enter' && photoInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setPhotoDrag(true); }}
              onDragLeave={() => setPhotoDrag(false)}
              onDrop={onPhotoDrop}
              className={`relative rounded-xl border-2 border-dashed transition-colors cursor-pointer overflow-hidden ${
                photoDrag
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
              }`}
            >
              {form.photo ? (
                <div className="flex items-center justify-center p-4 min-h-[120px]">
                  <img src={form.photo} alt="Profile preview" className="max-h-24 w-24 rounded-lg object-cover shadow-sm" />
                  <p className="ml-4 text-sm text-gray-600">Click or drag a new image to replace</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                  <FiUpload className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-700">Drag and drop your photo here</p>
                  <p className="text-xs text-gray-500 mt-1">or click to browse</p>
                  <p className="text-xs text-gray-400 mt-2">JPG, PNG or GIF</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">About Me</label>
            <textarea
              name="about"
              value={form.about}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Social Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Twitter</label>
                <input
                  type="url"
                  name="twitter"
                  value={form.twitter}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-bold text-gray-800 mb-3">More Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Languages</label>
                <input
                  type="text"
                  name="languages"
                  value={form.languages}
                  onChange={handleChange}
                  placeholder="e.g. EN / TL / FR"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Education</label>
                <input
                  type="text"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="e.g. Python, JavaScript, React"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Resume</h3>
            <input
              ref={resumeInputRef}
              type="file"
              accept=".pdf,application/pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="hidden"
            />
            <div
              role="button"
              tabIndex={0}
              onClick={() => resumeInputRef.current?.click()}
              onKeyDown={(e) => e.key === 'Enter' && resumeInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setResumeDrag(true); }}
              onDragLeave={() => setResumeDrag(false)}
              onDrop={onResumeDrop}
              className={`rounded-xl border-2 border-dashed transition-colors cursor-pointer ${
                resumeDrag
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
              }`}
            >
              {form.resumeFile ? (
                <div className="flex items-center gap-3 p-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <FiFileText className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{form.resumeFile.name}</p>
                    <p className="text-xs text-gray-500">Click or drag a new file to replace</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                  <FiUpload className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-700">Drag and drop your resume here</p>
                  <p className="text-xs text-gray-500 mt-1">or click to browse</p>
                  <p className="text-xs text-gray-400 mt-2">PDF or DOC</p>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">Replaces current resume when you save.</p>
          </div>
        </form>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="edit-profile-form"
            className="px-6 py-2 text-sm font-bold text-yellow-600 bg-white border-2 border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
