import React, { useState, useEffect } from 'react'
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import DirectoryHeader from '../../components/directory/DirectoryHeader'
import EmployeeCard from '../../components/directory/EmployeeCards'
import SelectionBox from '../../components/directory/SelectionBox'
import { useChat } from '../../context/ChatContext'
import { DIRECTORY_EMPLOYEES } from '../../utils/directoryData'
import '../../components/directory/directory.css'

export default function DirectoryPage() {
  const { setAllUsers } = useChat()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('')
  const [department, setDepartment] = useState('')
  const [status, setStatus] = useState('')
  const [role, setRole] = useState('')
  const [tag, setTag] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)

  const employees = DIRECTORY_EMPLOYEES

  useEffect(() => {
    if (setAllUsers) setAllUsers(employees)
  }, [employees, setAllUsers])

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      searchTerm === '' ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.skills?.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDepartment = department === '' || employee.department === department
    const matchesStatus = status === '' || employee.status === status
    const matchesRole = role === '' || employee.role === role
    const matchesTag = tag === '' || employee.tags?.includes(tag)
    return matchesSearch && matchesDepartment && matchesStatus && matchesRole && matchesTag
  })

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortOption === 'newest') return b.id - a.id
    if (sortOption === 'oldest') return a.id - b.id
    if (sortOption === 'name-asc') return a.name.localeCompare(b.name)
    if (sortOption === 'name-desc') return b.name.localeCompare(a.name)
    return 0
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentEmployees = sortedEmployees.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage) || 1

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, department, status, role, tag, sortOption])

  const handleClear = () => {
    setSearchTerm('')
    setSortOption('')
    setDepartment('')
    setStatus('')
    setRole('')
    setTag('')
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const renderPaginationNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i)
    } else {
      pageNumbers.push(1)
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)
      if (currentPage <= 3) {
        start = 2
        end = 4
      }
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3
        end = totalPages - 1
      }
      if (start > 2) pageNumbers.push('...')
      for (let i = start; i <= end; i++) pageNumbers.push(i)
      if (end < totalPages - 1) pageNumbers.push('...')
      if (end < totalPages) pageNumbers.push(totalPages)
    }
    return pageNumbers
  }

  return (
    <div className="directory-container">
      <DirectoryHeader />

      <div className="w-full justify-center items-center flex flex-col mb-8 mt-8">
        <div className="w-[90%] bg-white rounded-t-xl justify-center items-center flex gap-5 p-5 border-b-2 shadow-md">
          <div className="relative w-[70%]">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              className="bg-gray-100 pl-10 p-2 w-full border border-gray-300 rounded-xl focus:outline focus:outline-yellow-400 h-10"
              type="text"
              placeholder="Search by name, position, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <SelectionBox
            className="w-[30%]"
            test={[
              { value: '', label: 'Sort By' },
              { value: 'newest', label: 'Newest' },
              { value: 'oldest', label: 'Oldest' },
              { value: 'name-asc', label: 'Name A-Z' },
              { value: 'name-desc', label: 'Name Z-A' },
            ]}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          />
        </div>

        <div className="w-[90%] bg-white rounded-b-xl justify-center items-center flex gap-5 p-5 shadow-md">
          <SelectionBox
            test={[
              { value: '', label: 'Department' },
              { value: 'Web Development Department', label: 'Web Development' },
              { value: 'Cloud Services Department', label: 'Cloud Services' },
              { value: 'Product Design Department', label: 'Product Design' },
              { value: 'AI Research Department', label: 'AI Research' },
              { value: 'Infrastructure Department', label: 'Infrastructure' },
              { value: 'Product Management Department', label: 'Product Management' },
              { value: 'Mobile Development Department', label: 'Mobile Development' },
              { value: 'Cybersecurity Department', label: 'Cybersecurity' },
              { value: 'Data Management Department', label: 'Data Management' },
              { value: 'Quality Assurance Department', label: 'Quality Assurance' },
              { value: 'Business Operations Department', label: 'Business Operations' },
              { value: 'Documentation Department', label: 'Documentation' },
              { value: 'Agile Department', label: 'Agile' },
              { value: 'IT Support Department', label: 'IT Support' },
              { value: 'Sales Department', label: 'Sales' },
              { value: 'Marketing Department', label: 'Marketing' },
              { value: 'HR Department', label: 'HR' },
              { value: 'Emerging Technologies Department', label: 'Emerging Technologies' },
            ]}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <SelectionBox
            test={[
              { value: '', label: 'Status' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'on-leave', label: 'On Leave' },
              { value: 'remote', label: 'Remote' },
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <SelectionBox
            test={[
              { value: '', label: 'Role' },
              { value: 'developer', label: 'Developer' },
              { value: 'designer', label: 'Designer' },
              { value: 'manager', label: 'Manager' },
              { value: 'engineer', label: 'Engineer' },
            ]}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <SelectionBox
            test={[
              { value: '', label: 'Tag' },
              { value: 'leadership', label: 'Leadership' },
              { value: 'mentor', label: 'Mentor' },
              { value: 'innovator', label: 'Innovator' },
              { value: 'collaborator', label: 'Collaborator' },
            ]}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <button
            className="bg-yellow-500 p-2 w-full border border-gray-300 rounded-xl hover:bg-yellow-600 transition-colors"
            onClick={handleClear}
          >
            <span className="text-white">CLEAR</span>
          </button>
        </div>
      </div>

      <div className="employees-grid">
        {currentEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>

      {sortedEmployees.length === 0 && (
        <div className="search-results-container visible">
          <div className="search-results-box">
            <div className="search-results-content">
              <h3 className="search-results-title">No employees found</h3>
              <p className="search-results-subtitle">Try adjusting your search criteria or filters</p>
            </div>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination">
            <button
              className="pagination-button pagination-prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>
            {renderPaginationNumbers().map((pageNumber, index) =>
              pageNumber === '...' ? (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                  ...
                </span>
              ) : (
                <button
                  key={pageNumber}
                  className={`pagination-number ${pageNumber === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {String(pageNumber).padStart(2, '0')}
                </button>
              )
            )}
            <button
              className="pagination-button pagination-next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
