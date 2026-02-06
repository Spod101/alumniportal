import React from 'react'

export default function CourseCard({ course }) {
  return (
    <a
      href={course.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group cursor-pointer border border-gray-100 hover:border-[#DAB619]/30"
    >
      <div className="relative w-full h-40 lg:h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-4 lg:p-8">
        <img
          src={course.image}
          alt={course.platform}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 lg:top-3 right-2 lg:right-3">
          <span className="bg-white shadow-sm px-2 lg:px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-100">
            {course.duration}
          </span>
        </div>
      </div>
      <div className="p-4 lg:p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#DAB619] uppercase tracking-wider">
            {course.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">{course.platform}</span>
        </div>
        <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-2 line-clamp-2 leading-tight group-hover:text-[#DAB619] transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2 flex-grow">{course.description}</p>
        <div className="flex items-center justify-between pt-3 lg:pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-2 min-w-0">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full shrink-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
              <img
                src={course.instructor?.avatar}
                alt={course.instructor?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs lg:text-sm font-medium text-gray-700 truncate max-w-[80px] lg:max-w-[100px]">
              {course.instructor?.name}
            </span>
          </div>
          <span className="font-bold text-base lg:text-lg text-[#DAB619] shrink-0">₱{course.price ?? 0}</span>
        </div>
      </div>
    </a>
  )
}
