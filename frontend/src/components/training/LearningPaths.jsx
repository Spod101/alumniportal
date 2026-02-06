import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const PLACEHOLDER_IMAGE =
  'https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/1648621039951_Image_3LK6GFT.webp?pr-true'

const PATHS = [
  { key: 'beginner', label: 'Beginner', image: PLACEHOLDER_IMAGE },
  { key: 'intermediate', label: 'Intermediate', image: PLACEHOLDER_IMAGE },
  { key: 'advanced', label: 'Advanced', image: PLACEHOLDER_IMAGE },
]

export default function LearningPaths({ defaultOpen = null }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="mt-8 lg:mt-12 max-w-5xl mx-auto px-2 lg:px-0">
      <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Learning Paths</h2>
      <div className="space-y-4 lg:space-y-5">
        {PATHS.map((item) => (
          <div key={item.key} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setOpen(open === item.key ? null : item.key)}
              className="w-full flex justify-between items-center px-4 lg:px-6 py-4 lg:py-5 font-medium text-left hover:bg-gray-50 transition text-sm lg:text-base"
            >
              <span>{item.label}</span>
              <FiChevronDown
                size={20}
                className={`transition-transform duration-200 ${open === item.key ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                open === item.key ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                <div className="border rounded-xl overflow-hidden bg-gray-50">
                  <img src={item.image} alt={`${item.label} roadmap`} className="w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
