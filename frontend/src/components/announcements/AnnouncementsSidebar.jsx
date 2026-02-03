import React from 'react'
import { NavLink } from 'react-router-dom'
import { ANNOUNCEMENT_CATEGORIES } from '../../utils/announcementCategories'

export default function AnnouncementsSidebar() {
  return (
    <aside className="w-64 flex-shrink-0">
      <div className="bg-white rounded-xl p-4 shadow-sm sticky top-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Announcements</h3>
        <nav className="flex flex-col gap-1">
          {ANNOUNCEMENT_CATEGORIES.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              end={category.path === '/announcements'}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-accent text-[#2c2c2c] font-medium border-l-4 border-accent'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {category.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}

