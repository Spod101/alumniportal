import React, { useState, useEffect, useRef } from 'react'

const SKILL_OPTIONS = [
  { label: 'Skill', value: '' },
  { label: 'HTML/CSS', value: 'HTML/CSS' },
  { label: 'AWS', value: 'AWS' },
  { label: 'React', value: 'React' },
  { label: 'Azure', value: 'Azure' },
  { label: 'Leadership', value: 'Leadership' },
  { label: 'Python', value: 'Python' },
  { label: 'Cybersecurity', value: 'Cybersecurity' },
  { label: 'Power Platform', value: 'Power Platform' },
  { label: 'C++', value: 'C++' },
  { label: 'Javascript', value: 'Javascript' },
]

function SkillFilterDropdown({ value, onChange, placeholder = 'Skill' }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const selectedLabel = SKILL_OPTIONS.find((opt) => opt.value === value)?.label || placeholder

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
          {SKILL_OPTIONS.map((option) => (
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

export default SkillFilterDropdown
