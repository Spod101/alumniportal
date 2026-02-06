import React, { useRef, useState, useMemo } from 'react'
import TrainingPageHeader from '../../components/training/TrainingPageHeader'
import FiltersPanel from '../../components/training/FiltersPanel'
import SortFilterDropdown from '../../components/training/SortFilterDropdown'
import CourseCard from '../../components/training/CourseCard'
import RecCourses from '../../components/training/RecCourses'
import LearningPaths from '../../components/training/LearningPaths'
import { TRAINING_COURSES, TRAINING_PLATFORMS, TRAINING_ITEMS_PER_PAGE } from '../../utils/dummyData'

function getPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
  const pages = []
  const left = Math.max(2, currentPage - 1)
  const right = Math.min(totalPages - 1, currentPage + 1)
  pages.push(1)
  if (left > 2) pages.push('...')
  for (let p = left; p <= right; p++) pages.push(p)
  if (right < totalPages - 1) pages.push('...')
  pages.push(totalPages)
  return pages
}

function CourseGridSection({
  paginatedCourses,
  filteredCourses,
  safePage,
  totalPages,
  goToPage,
  handleClearAll,
}) {
  return (
    <div className="mt-6">
        <div className="mb-4 text-xs lg:text-sm text-gray-600 flex flex-wrap justify-between items-center gap-2">
        <span>
          Showing {paginatedCourses.length} of {filteredCourses.length} courses
        </span>
        {filteredCourses.length > 0 && (
          <span className="text-gray-400">
            Page {safePage} of {totalPages}
          </span>
        )}
      </div>
      {filteredCourses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-6 lg:mt-8 flex flex-wrap items-center justify-end gap-2 lg:gap-3">
            <button
              className="px-3 lg:px-5 py-2 lg:py-2.5 text-sm bg-[#DAB619] text-white hover:bg-[#c4a015] disabled:opacity-50 disabled:cursor-not-allowed rounded-md border border-[#AAA9A9] transition-colors"
              disabled={safePage === 1}
              onClick={() => goToPage(1)}
            >
              FIRST
            </button>
            <div className="inline-flex items-center rounded-md bg-white shadow-sm overflow-hidden border border-[#AAA9A9]">
              <button
                className="px-3 py-2.5 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                disabled={safePage === 1}
                onClick={() => goToPage(safePage - 1)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center px-1">
                {getPageNumbers(safePage, totalPages).map((page, idx) =>
                  page === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 lg:px-4 py-2 lg:py-2.5 text-[#7B7B7B] font-bold">
                      …
                    </span>
                  ) : (
                    <button
                      key={page}
                      className={`px-2 lg:px-4 py-2 lg:py-2.5 min-w-[32px] lg:min-w-[40px] text-center text-sm transition-colors ${
                        page === safePage
                          ? 'bg-[#D7D7D7] text-[#7B7B7B] font-semibold'
                          : 'text-[#7B7B7B] hover:bg-[#F0F0F0]'
                      }`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
              <button
                className="px-3 py-2.5 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                disabled={safePage === totalPages}
                onClick={() => goToPage(safePage + 1)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <button
              className="px-3 lg:px-5 py-2 lg:py-2.5 text-sm bg-[#DAB619] text-white hover:bg-[#c4a015] disabled:opacity-50 disabled:cursor-not-allowed rounded-md border border-[#AAA9A9] transition-colors"
              disabled={safePage === totalPages}
              onClick={() => goToPage(totalPages)}
            >
              LAST
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg mb-2">No courses found</p>
          <p className="text-gray-400 text-sm mb-4">Try adjusting your filters</p>
          <button
            onClick={handleClearAll}
            className="px-6 py-2 bg-[#DAB619] text-white rounded-lg hover:bg-[#c4a317] transition-colors font-medium"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default function TrainingPage() {
  const platformScrollerRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [departmentFilter, setDepartmentFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [skillFilter, setSkillFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const setSearchQueryAndReset = (value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }
  const setSortByAndReset = (value) => {
    setSortBy(value)
    setCurrentPage(1)
  }
  const setDepartmentFilterAndReset = (value) => {
    setDepartmentFilter(value)
    setCurrentPage(1)
  }
  const setRoleFilterAndReset = (value) => {
    setRoleFilter(value)
    setCurrentPage(1)
  }
  const setSkillFilterAndReset = (value) => {
    setSkillFilter(value)
    setCurrentPage(1)
  }

  const scrollPlatforms = (dir) => {
    platformScrollerRef.current?.scrollBy({ left: 320 * dir, behavior: 'smooth' })
  }

  const handleClearAll = () => {
    setSearchQuery('')
    setSortBy('newest')
    setDepartmentFilter('')
    setRoleFilter('')
    setSkillFilter('')
    setCurrentPage(1)
  }

  const filteredCourses = useMemo(() => {
    const searchLower = searchQuery.toLowerCase()
    const filtered = TRAINING_COURSES.filter((course) => {
      const matchesSearch =
        !searchQuery ||
        course.title.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower) ||
        course.instructor?.name?.toLowerCase().includes(searchLower)
      const matchesDepartment = !departmentFilter || course.department === departmentFilter
      const matchesRole = !roleFilter || course.role === roleFilter
      const matchesSkill = !skillFilter || course.skill === skillFilter
      return matchesSearch && matchesDepartment && matchesRole && matchesSkill
    })
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'newest') return (b.id ?? 0) - (a.id ?? 0)
      if (sortBy === 'oldest') return (a.id ?? 0) - (b.id ?? 0)
      if (sortBy === 'title-az') return a.title.localeCompare(b.title)
      if (sortBy === 'title-za') return b.title.localeCompare(a.title)
      return 0
    })
    return sorted
  }, [searchQuery, departmentFilter, roleFilter, skillFilter, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / TRAINING_ITEMS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)

  const paginatedCourses = useMemo(() => {
    const start = (safePage - 1) * TRAINING_ITEMS_PER_PAGE
    return filteredCourses.slice(start, start + TRAINING_ITEMS_PER_PAGE)
  }, [filteredCourses, safePage])

  const recommendedCourses = useMemo(() => TRAINING_COURSES.slice(0, 6), [])

  const goToPage = (page) => {
    const next = Math.min(Math.max(1, page), totalPages)
    setCurrentPage(next)
  }

  return (
    <div className="p-4 lg:p-6">
      <TrainingPageHeader />
      <section className="relative left-1/2 -translate-x-1/2 w-screen bg-[#EEE6C8] mt-4 lg:mt-6">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 lg:py-10">
          <h2 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Learning Platforms</h2>
          <div className="relative">
            <button
              onClick={() => scrollPlatforms(-1)}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border bg-white grid place-items-center hover:bg-gray-50 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => scrollPlatforms(1)}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border bg-white grid place-items-center hover:bg-gray-50 transition-colors"
            >
              ›
            </button>
            <div
              ref={platformScrollerRef}
              className="flex justify-start gap-4 lg:gap-8 overflow-x-auto px-4 lg:px-6 py-6 lg:py-8 scroll-smooth"
            >
              {TRAINING_PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 w-[200px] lg:w-[240px] h-[100px] lg:h-[120px] bg-white rounded-2xl border flex items-center justify-center gap-2 lg:gap-3 shadow-md hover:scale-105 transition"
                >
                  <img src={p.logo} className="h-8 lg:h-10" alt={p.name} />
                  <span className="font-medium text-sm lg:text-base">{p.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-6 lg:mt-8 flex justify-center px-2 lg:px-0">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl border p-4">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
              <div className="relative flex-1 min-w-0">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQueryAndReset(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full h-10 pl-4 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/50"
                />
              </div>
              <div className="w-full lg:w-auto">
                <SortFilterDropdown value={sortBy} onChange={setSortByAndReset} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1 flex flex-col items-center px-2 lg:px-0">
        <div className="max-w-4xl w-full">
          <FiltersPanel
            variant="inline"
            showSearch={false}
            showClearTop={false}
            showClearBottom={true}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilterAndReset}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilterAndReset}
            skillFilter={skillFilter}
            setSkillFilter={setSkillFilterAndReset}
            onClear={handleClearAll}
          />
          <CourseGridSection
            paginatedCourses={paginatedCourses}
            filteredCourses={filteredCourses}
            safePage={safePage}
            totalPages={totalPages}
            goToPage={goToPage}
            handleClearAll={handleClearAll}
          />
        </div>
        <RecCourses title="Recommended for you" courses={recommendedCourses} fullBleed />
        <LearningPaths defaultOpen={null} />
      </div>
    </div>
  )
}
