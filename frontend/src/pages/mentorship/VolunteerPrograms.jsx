import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiChevronDown, FiChevronLeft, FiChevronRight, FiCalendar, FiClock, FiMapPin, FiShare2, FiX } from "react-icons/fi";

const VolunteerPrograms = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const itemsPerPage = 6;

  // Extended programs data - 9 programs total
  const allPrograms = [
    {
      id: 1,
      type: "Webinar",
      department: "IT",
      title: "Tech Talk: Modern Web Development Trends",
      date: "Jan 30, 2026",
      fullDate: "17, December 2026",
      time: "3:00 PM UTC + 8",
      location: "Microsoft Teams",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "orange-gradient",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      organizer: "Marcus Neo Rangal"
    },
    {
      id: 2,
      type: "Mentorship Session",
      department: "HR",
      title: "Career Coaching Session for Interns",
      date: "Feb 5, 2026",
      fullDate: "5, February 2026",
      time: "2:00 PM UTC + 8",
      location: "Zoom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "business-webinar",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      organizer: "Sarah Johnson"
    },
    {
      id: 3,
      type: "Workshop",
      department: "HR",
      title: "Mock Interview Bootcamp",
      date: "Feb 12, 2026",
      fullDate: "12, February 2026",
      time: "10:00 AM UTC + 8",
      location: "Google Meet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "bootcamp",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      organizer: "John Smith"
    },
    {
      id: 4,
      type: "Workshop",
      department: "IT",
      title: "UI/UX Design Workshop",
      date: "Feb 18, 2026",
      fullDate: "18, February 2026",
      time: "1:00 PM UTC + 8",
      location: "Microsoft Teams",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "uiux-design",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      organizer: "Emily Chen"
    },
    {
      id: 5,
      type: "Webinar",
      department: "IT",
      title: "Introduction to Cybersecurity Awareness",
      date: "Feb 25, 2026",
      fullDate: "25, February 2026",
      time: "4:00 PM UTC + 8",
      location: "Zoom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "cybersecurity",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      organizer: "David Rodriguez"
    },
    {
      id: 6,
      type: "Outreach",
      department: "Marketing",
      title: "Community Tech Outreach Program",
      date: "Mar 3, 2026",
      fullDate: "3, March 2026",
      time: "9:00 AM UTC + 8",
      location: "Community Center",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "outreach",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      organizer: "Lisa Anderson"
    },
    {
      id: 7,
      type: "Workshop",
      department: "Marketing",
      title: "Digital Marketing Strategy Workshop",
      date: "Mar 10, 2026",
      fullDate: "10, March 2026",
      time: "2:30 PM UTC + 8",
      location: "Microsoft Teams",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "marketing",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      organizer: "Michael Brown"
    },
    {
      id: 8,
      type: "Mentorship Session",
      department: "HR",
      title: "Leadership Development Series",
      date: "Mar 17, 2026",
      fullDate: "17, March 2026",
      time: "11:00 AM UTC + 8",
      location: "Zoom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "leadership",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      organizer: "Amanda Wilson"
    },
    {
      id: 9,
      type: "Webinar",
      department: "IT",
      title: "Cloud Computing Fundamentals",
      date: "Mar 24, 2026",
      fullDate: "24, March 2026",
      time: "3:30 PM UTC + 8",
      location: "Google Meet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      fullDescription: "Join our hands-on training session designed to strengthen your skills in both front-end and back-end development. Participants will explore modern web technologies, build practical projects, and gain insights into real-world development workflows. Ideal for students, interns, and junior developers looking to level up their coding expertise.",
      image: "cloud",
      bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      organizer: "Robert Taylor"
    }
  ];

  // Filter and search logic
  const filteredPrograms = useMemo(() => {
    let filtered = [...allPrograms];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(program =>
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Department filter
    if (departmentFilter) {
      filtered = filtered.filter(program => program.department === departmentFilter);
    }

    // Category filter
    if (categoryFilter) {
      filtered = filtered.filter(program => program.type === categoryFilter);
    }

    // Sort
    if (sortBy === "Newest") {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortBy === "Oldest") {
      filtered.sort((a, b) => a.id - b.id);
    } else if (sortBy === "Most Popular") {
      filtered.sort((a, b) => b.id - a.id); // Placeholder logic
    }

    return filtered;
  }, [searchTerm, departmentFilter, categoryFilter, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPrograms = filteredPrograms.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, departmentFilter, categoryFilter, sortBy]);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchTerm("");
    setDepartmentFilter("");
    setCategoryFilter("");
    setSortBy("Newest");
    setCurrentPage(1);
  };

  // Modal component
  const ProgramModal = ({ program, onClose }) => {
    if (!program) return null;

    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn" onClick={(e) => e.stopPropagation()}>
          {/* Modal Header Image */}
          <div className={`${program.bgColor} h-64 flex items-center justify-center relative overflow-hidden rounded-t-2xl`}>
            {program.id === 1 && (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-900"></div>
                <div className="absolute top-0 left-1/4 w-1/3 h-full bg-cyan-400"></div>
                <div className="text-white text-center z-10">
                  <div className="text-5xl font-bold">WEBINAR</div>
                  <div className="text-xl mt-2">Develop Your Creativity With US</div>
                </div>
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
                  backgroundSize: '12px 12px',
                  width: '80px',
                  height: '120px'
                }}></div>
                <div className="absolute bottom-0 left-1/3 right-0 flex justify-around pb-8">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-cyan-400"></div>
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-cyan-400"></div>
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-cyan-400"></div>
                </div>
              </div>
            )}
            {program.id !== 1 && (
              <div className="text-white text-center">
                <div className="text-5xl font-bold">{program.type.toUpperCase()}</div>
                <div className="text-xl mt-2">Professional Development</div>
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-8 relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-red-500 hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-lg z-10 group"
            >
              <FiX className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pr-12">{program.title}</h2>

            {/* Date/Time and Location Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Date and Time */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Date and Time</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiCalendar className="w-5 h-5 text-gray-400" />
                    <span>{program.fullDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiClock className="w-5 h-5 text-gray-400" />
                    <span>{program.time}</span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium mt-2">
                    + Add to Calendar
                  </button>
                </div>
              </div>

              {/* Where */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Where</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiMapPin className="w-5 h-5 text-gray-400" />
                    <span>{program.location}</span>
                  </div>
                  <button className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 text-sm font-medium mt-2">
                    <FiShare2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {program.fullDescription}
              </p>
              {program.organizer && (
                <div className="mt-4 inline-block bg-green-500 text-white px-3 py-1 rounded text-sm font-medium">
                  {program.organizer}
                </div>
              )}
            </div>

            {/* Register Button */}
            <div className="flex justify-end">
            <button 
                className="px-8 py-3 text-white font-bold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#DAB619' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c4a515'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#DAB619'}
            >
                REGISTER
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProgramCard = (program) => (
    <div 
      key={program.id} 
      onClick={() => setSelectedProgram(program)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Card Image/Header */}
      <div className={`${program.bgColor} h-44 flex items-center justify-center relative overflow-hidden rounded-t-2xl group-hover:brightness-110 transition-all duration-300`}>
        {program.id === 1 && (
          <div className="text-white px-6 relative">
            <div className="text-3xl font-bold">WEBINAR</div>
            <div className="text-3xl font-bold text-yellow-300">ONLINE</div>
            <div className="text-3xl font-bold mt-1">MARKETING</div>
            <div className="mt-3 text-xs bg-blue-900 inline-block px-3 py-1">
              Discover New Modern Techniques to Growth Business
            </div>
            <p className="text-xs mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        )}
        {program.id === 2 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-4 left-6 text-teal-600 text-xs font-semibold">YOUR<br/>LOGO</div>
            <div className="text-teal-700 text-center z-10">
              <div className="text-5xl font-bold leading-tight">BUSINESS</div>
              <div className="text-5xl font-bold leading-tight">WEBINAR</div>
            </div>
            <div className="absolute right-0 top-0 w-40 h-full bg-teal-700 rounded-bl-[100px]"></div>
            <div className="absolute right-0 bottom-0 w-32 h-32" style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px)'
            }}></div>
          </div>
        )}
        {program.id === 3 && (
          <div className="relative w-full h-full px-6">
            <div className="absolute top-3 right-6 text-white text-xs">Develop Your Creativity With Us</div>
            <div className="flex items-center justify-around h-full">
              <div className="text-center">
                <div className="w-16 h-20 bg-cyan-400 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Kristen S</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-20 bg-cyan-400 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Robert J</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-20 bg-cyan-400 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Natasha</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-6 flex items-center gap-2 text-white text-xs">
              <div className="bg-white/20 px-2 py-1 rounded">📅 2022</div>
              <div>Your Text Here</div>
            </div>
          </div>
        )}
        {(program.id === 4 || program.id === 8) && (
          <div className="relative w-full h-full flex items-center justify-center px-6">
            <div className="absolute top-4 left-6 text-white text-xs">COMPANY LOGO</div>
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">👤</span>
              </div>
            </div>
          </div>
        )}
        {(program.id === 5 || program.id === 9) && (
          <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
            <div className="absolute top-4 left-6 text-gray-600 text-xs font-semibold">LOGO</div>
            <div className="text-teal-700 text-center z-10">
              <div className="text-5xl font-bold leading-tight">BUSINESS</div>
              <div className="text-5xl font-bold leading-tight">WEBINAR</div>
            </div>
            <div className="absolute right-0 top-0 w-40 h-full bg-teal-700 rounded-bl-[100px]"></div>
          </div>
        )}
        {(program.id === 6 || program.id === 7) && (
          <div className="relative w-full h-full bg-linear-to-br from-orange-300 to-orange-400 flex items-center justify-center">
            <div className="text-white text-4xl font-bold">{program.type.toUpperCase()}</div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 bg-gray-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
            </svg>
            <span className="uppercase">{program.type}</span>
          </div>
          <span className="text-xs text-gray-400">{program.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{program.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{program.description}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
          <div className="max-w-7xl mx-auto">
            {/* 1ST SECTION - Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Volunteer Programs</h1>
              <p className="text-gray-500 italic text-sm">
                Explore available volunteer programs where you can share your skills, support others, and make a meaningful impact.
              </p>
            </div>

            {/* 1ST SECTION - Search and Sort Row */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-sm"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="relative w-full lg:w-56">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white cursor-pointer text-sm"
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Most Popular">Most Popular</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-200 mb-6"></div>

            {/* 1ST SECTION - Filter Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
              {/* Department Filter */}
              <div className="relative w-full sm:w-48">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white cursor-pointer text-gray-600 text-sm"
                >
                  <option value="">Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Category Filter */}
              <div className="relative w-full sm:w-48">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white cursor-pointer text-gray-600 text-sm"
                >
                  <option value="">Category</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Mentorship Session">Mentorship Session</option>
                  <option value="Outreach">Outreach</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Clear Button */}
              <button 
                onClick={handleClearFilters}
                className="w-full sm:w-32 px-6 py-3 text-white font-bold rounded-md transition-all duration-200 text-sm hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#DAB619' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c4a515'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#DAB619'}
              >
                CLEAR
              </button>
            </div>

            {/* 2ND SECTION - Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500">
              {currentPrograms.length > 0 ? (
                currentPrograms.map(program => renderProgramCard(program))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No programs found matching your criteria.
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPrograms.length > 0 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
                >
                  <FiChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {[...Array(Math.min(totalPages, 3))].map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`min-w-10 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm hover:scale-110 ${
                        currentPage === pageNum
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      {pageNum.toString().padStart(2, '0')}
                    </button>
                  );
                })}

                {totalPages > 3 && (
                  <>
                    <span className="px-2 text-gray-600 font-medium">..</span>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className={`min-w-10 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm hover:scale-110 ${
                        currentPage === totalPages
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 hover:bg-gray-300 text-gray-700'
                      }`}
                    >
                      {totalPages.toString().padStart(2, '0')}
                    </button>
                  </>
                )}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
                >
                  <FiChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            )}
          </div>

      {/* Modal */}
      {selectedProgram && (
        <ProgramModal 
          program={selectedProgram} 
          onClose={() => setSelectedProgram(null)} 
        />
      )}
    </div>
  );
};

export default VolunteerPrograms;