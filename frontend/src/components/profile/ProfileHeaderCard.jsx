import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ProfileHeaderCard({ profileData, actionButton }) {
  return (
    <div className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-300 rounded-xl p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="flex gap-6 items-start relative z-10">
        <div className="flex-shrink-0">
          <img
            src={profileData.photo}
            alt={profileData.name}
            className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
          <p className="text-sm text-gray-700 mb-4">{profileData.position}</p>
          <div className="flex gap-3 flex-wrap items-center justify-between">
            <div className="flex gap-3 flex-wrap">
              <a
                href={profileData.socialMedia?.linkedin || '#'}
                className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <FaLinkedin className="text-base" /> Linkedin
              </a>
              <a
                href={profileData.socialMedia?.twitter || '#'}
                className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <FaTwitter className="text-base" /> Twitter
              </a>
              <a
                href={profileData.socialMedia?.instagram || '#'}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <FaInstagram className="text-base" /> Instagram
              </a>
            </div>
            {actionButton}
          </div>
        </div>
      </div>
    </div>
  );
}
