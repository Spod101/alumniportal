import React from 'react';

export default function AboutMeCard({ about }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-5">About Me</h2>
      <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{about}</p>
    </div>
  );
}
