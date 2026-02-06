import React from 'react'
import CourseCard from './CourseCard'

export default function RecCourses({ title = 'Recommended for you', courses = [], fullBleed = true }) {
  if (!courses?.length) return null

  const wrapperClass = fullBleed
    ? 'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#EEE6C8]'
    : 'w-full bg-[#EEE6C8]'

  return (
    <section className="mt-8 lg:mt-10">
      <div className={wrapperClass}>
        <div className="px-4 lg:px-10 py-5 lg:py-7">
          <h2 className="text-base lg:text-lg font-semibold mb-4 lg:mb-5 text-center">{title}</h2>
          <div className="scale-[0.96] origin-center">
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 lg:w-14 bg-gradient-to-r from-[#EEE6C8] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 lg:w-14 bg-gradient-to-l from-[#EEE6C8] to-transparent z-10" />
              <div
                className="flex gap-3 lg:gap-4 justify-start overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory px-4 lg:px-8 [scroll-padding-left:1rem] lg:[scroll-padding-left:2rem] [scroll-padding-right:1rem] lg:[scroll-padding-right:2rem] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-thumb]:rounded-full"
              >
                {courses.map((course, i) => (
                  <div
                    key={course.id}
                    className="shrink-0 snap-start !w-[260px] lg:!w-[280px]"
                    style={{
                      transform: i === 0 || i === courses.length - 1 ? 'scale(0.97)' : 'scale(1)',
                      opacity: i === 0 || i === courses.length - 1 ? 0.96 : 1,
                    }}
                  >
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
              <div className="mt-2 h-[1px] bg-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
