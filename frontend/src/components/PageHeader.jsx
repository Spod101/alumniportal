import React from 'react'

/**
 * Consistent page header used across all modules.
 * @param {string} titlePart1 - First part of title (gray)
 * @param {string} titlePart2 - Second part of title (yellow accent)
 * @param {string} subtitle - Italic subtitle below the title
 */
export default function PageHeader({ titlePart1, titlePart2, subtitle }) {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-1">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">{titlePart1}</h1>
        <h1 className="text-2xl lg:text-4xl font-bold text-yellow-500">{titlePart2}</h1>
      </div>
      <p className="text-gray-600 italic py-2 text-sm lg:text-base">{subtitle}</p>
    </>
  )
}
