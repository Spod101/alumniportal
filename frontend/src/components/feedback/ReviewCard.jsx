import React from 'react'

export default function ReviewCard({ review, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl p-5 shadow-sm border cursor-pointer hover:bg-gray-50 transition"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full font-medium">
          {review.type}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div>
          <p className="text-sm font-semibold">{review.reviewer}</p>
          <p className="text-xs text-gray-500">{review.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {review.content}
      </p>
    </div>
  )
}
