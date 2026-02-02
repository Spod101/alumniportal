import React from 'react'

export default function SelectionBox({ test, className }) {
  return (
    <>
    {/* selection box / dropdowns */}
    <div className='relative w-full'>
      <select className={`focus:outline focus:outline-yellow-400 w-[100%] appearance-none  bg-gray-100 pl-3 border border-gray-300 rounded-xl h-10 text-gray-400 ${className}`}>
          {(test.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
          )))}
      </select>
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>  
    </>
  )
}

