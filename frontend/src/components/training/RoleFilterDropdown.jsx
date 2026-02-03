import React, { useState, useEffect, useRef } from 'react'

const ROLE_OPTIONS = [
  { label: 'Role', value: '' },
  { label: 'Frontend Developer', value: 'Frontend Developer' },
  { label: 'Cloud Architect', value: 'Cloud Architect' },
  { label: 'Full Stack Developer', value: 'Full Stack Developer' },
  { label: 'Cloud Engineer', value: 'Cloud Engineer' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Data Scientist', value: 'Data Scientist' },
  { label: 'Security Analyst', value: 'Security Analyst' },
  { label: 'Business Analyst', value: 'Business Analyst' },
  { label: 'Admin', value: 'Admin' },
  { label: 'Employee', value: 'Employee' },
  { label: 'Intern', value: 'Intern' },
]

function RoleFilterDropdown({ value, onChange, placeholder = 'Role' }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const selectedLabel = ROLE_OPTIONS.find((opt) => opt.value === value)?.label || placeholder

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left w-48 min-w-[160px]" ref={dropdownRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-[#FAFAFA] border border-[#AAA9A9] text-[#88888C] font-medium text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden text-sm font-medium text-gray-900 max-h-60 overflow-y-auto">
          {ROLE_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`w-full text-left px-5 py-3 active:bg-gray-100 transition-colors duration-150 border-b border-[#AAA9A9] last:border-b-0 hover:bg-[#c4a015] ${option.value === value ? 'bg-[#DAB619] font-semibold text-[#000000]' : ''}`}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default RoleFilterDropdown
