import React from 'react';
import { FiPhone, FiMail, FiMessageCircle, FiBook, FiStar } from 'react-icons/fi';

export default function MoreDetailsCard({ moreDetails }) {
  const items = [
    { icon: FiPhone, label: 'Number', value: moreDetails.number },
    { icon: FiMail, label: 'Email', value: moreDetails.email },
    { icon: FiMessageCircle, label: 'Languages', value: moreDetails.languages },
    { icon: FiBook, label: 'Education', value: moreDetails.education },
    { icon: FiStar, label: 'Skills', value: moreDetails.skills },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-5">More Details</h3>
      <div className="flex flex-col gap-5">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4 items-start">
            <Icon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-gray-900 mb-1">{label}</h4>
              <p className="text-xs text-gray-600">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
