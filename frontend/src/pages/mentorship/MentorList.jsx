import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import billGatesImg from "../../assets/billGates.jpg";
import elonMuskImg from "../../assets/elonMusk.jpg";
import satyaImg from "../../assets/satya.jpg";
import sundarImg from "../../assets/sundar.jpg";
import timCookImg from "../../assets/timCook.jpg";
import { Link } from "react-router-dom";

const MentorList = () => {

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedExperience, setSelectedExperience] =
    useState("All Experience");
  const [selectedSessions, setSelectedSessions] = useState("All Sessions");

  // Dropdown states
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const [sessionsDropdownOpen, setSessionsDropdownOpen] = useState(false);

  // Refs for click outside detection
  const roleRef = useRef(null);
  const experienceRef = useRef(null);
  const sessionsRef = useRef(null);

  const mentors = [
    {
      name: "Bill Gates",
      role: "Technology & Entrepreneurship",
      title: "Co-founder & Former CEO, Microsoft",
      sessions: 16,
      isMentor: true,
      tags: ["Python", "JavaScript", "HTML", "PHP", "Laravel"],
      image: billGatesImg,
    },
    {
      name: "Elon Musk",
      role: "Innovation & Space Technology",
      title: "CEO, Tesla & SpaceX",
      sessions: 12,
      isMentor: true,
      tags: ["AI", "Robotics", "Electric Vehicles", "Aerospace"],
      image: elonMuskImg,
    },
    {
      name: "Sundar Pichai",
      role: "Cloud & Search Technology",
      title: "CEO, Google & Alphabet",
      sessions: 20,
      isMentor: true,
      tags: ["Cloud Computing", "Android", "AI", "Leadership"],
      image: sundarImg,
    },
    {
      name: "Satya Nadella",
      role: "Enterprise & Cloud Computing",
      title: "CEO, Microsoft",
      sessions: 18,
      isMentor: true,
      tags: ["Azure", "Cloud", "AI", "Enterprise Software"],
      image: satyaImg,
    },
    {
      name: "Tim Cook",
      role: "Consumer Technology & Design",
      title: "CEO, Apple Inc.",
      sessions: 14,
      isMentor: true,
      tags: ["iOS", "Hardware", "Supply Chain", "Leadership"],
      image: timCookImg,
    },
    {
      name: "Jensen Huang",
      role: "AI & Graphics Technology",
      title: "CEO & Founder, NVIDIA",
      sessions: 15,
      isMentor: true,
      tags: ["GPU", "AI", "Machine Learning", "Gaming"],
      image: billGatesImg,
    },
    {
      name: "Susan Wojcicki",
      role: "Digital Media & Content",
      title: "Former CEO, YouTube",
      sessions: 13,
      isMentor: true,
      tags: ["Video Platform", "Advertising", "Content", "Marketing"],
      image: billGatesImg,
    },
    {
      name: "Jeff Bezos",
      role: "E-commerce & Cloud Services",
      title: "Founder, Amazon & Blue Origin",
      sessions: 17,
      isMentor: true,
      tags: ["E-commerce", "AWS", "Logistics", "Innovation"],
      image: billGatesImg,
    },
  ];

  // Extract unique roles from mentors
  const uniqueRoles = ["All Roles", ...new Set(mentors.map((m) => m.role))];

  // Experience levels based on sessions
  const experienceLevels = [
    "All Experience",
    "Entry Level (0-10 sessions)",
    "Intermediate (11-15 sessions)",
    "Expert (16+ sessions)",
  ];

  // Session ranges
  const sessionRanges = [
    "All Sessions",
    "0-10 sessions",
    "11-15 sessions",
    "16-20 sessions",
    "20+ sessions",
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setRoleDropdownOpen(false);
      }
      if (
        experienceRef.current &&
        !experienceRef.current.contains(event.target)
      ) {
        setExperienceDropdownOpen(false);
      }
      if (sessionsRef.current && !sessionsRef.current.contains(event.target)) {
        setSessionsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter mentors based on selected criteria
  const getFilteredMentors = () => {
    return mentors.filter((mentor) => {
      // Search query filter
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      // Role filter
      const matchesRole =
        selectedRole === "All Roles" || mentor.role === selectedRole;

      // Experience filter
      let matchesExperience = true;
      if (selectedExperience === "Entry Level (0-10 sessions)") {
        matchesExperience = mentor.sessions <= 10;
      } else if (selectedExperience === "Intermediate (11-15 sessions)") {
        matchesExperience = mentor.sessions >= 11 && mentor.sessions <= 15;
      } else if (selectedExperience === "Expert (16+ sessions)") {
        matchesExperience = mentor.sessions >= 16;
      }

      // Sessions filter
      let matchesSessions = true;
      if (selectedSessions === "0-10 sessions") {
        matchesSessions = mentor.sessions >= 0 && mentor.sessions <= 10;
      } else if (selectedSessions === "11-15 sessions") {
        matchesSessions = mentor.sessions >= 11 && mentor.sessions <= 15;
      } else if (selectedSessions === "16-20 sessions") {
        matchesSessions = mentor.sessions >= 16 && mentor.sessions <= 20;
      } else if (selectedSessions === "20+ sessions") {
        matchesSessions = mentor.sessions > 20;
      }

      return (
        matchesSearch && matchesRole && matchesExperience && matchesSessions
      );
    });
  };

  const filteredMentors = getFilteredMentors();

  return (
    <div className="w-full">
      <div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Find a Mentor
        </h1>
            <p className="text-sm text-gray-600 mb-6">
              Browse experienced alumni mentors and request mentors based on
              your goals, skills and availability
            </p>

            {/* Search Filters */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <div className="relative flex-1 max-w-xs min-w-[200px]">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Field / Role Dropdown */}
              <div className="relative" ref={roleRef}>
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="px-4 py-2 border border-gray-300 rounded bg-white text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50 whitespace-nowrap"
                >
                  {selectedRole}
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${roleDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {roleDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                    {uniqueRoles.map((role, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedRole(role);
                          setRoleDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedRole === role
                            ? "bg-yellow-50 text-yellow-700 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Dropdown */}
              <div className="relative" ref={experienceRef}>
                <button
                  onClick={() =>
                    setExperienceDropdownOpen(!experienceDropdownOpen)
                  }
                  className="px-4 py-2 border border-gray-300 rounded bg-white text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50 whitespace-nowrap"
                >
                  {selectedExperience}
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${experienceDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {experienceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded shadow-lg z-10">
                    {experienceLevels.map((level, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedExperience(level);
                          setExperienceDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedExperience === level
                            ? "bg-yellow-50 text-yellow-700 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sessions Dropdown */}
              <div className="relative" ref={sessionsRef}>
                <button
                  onClick={() => setSessionsDropdownOpen(!sessionsDropdownOpen)}
                  className="px-4 py-2 border border-gray-300 rounded bg-white text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50 whitespace-nowrap"
                >
                  {selectedSessions}
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${sessionsDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {sessionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                    {sessionRanges.map((range, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedSessions(range);
                          setSessionsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedSessions === range
                            ? "bg-yellow-50 text-yellow-700 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  // Optional: add search/filter action here
                  console.log("Filtering with:", {
                    searchQuery,
                    selectedRole,
                    selectedExperience,
                    selectedSessions,
                  });
                }}
                className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-sm font-medium whitespace-nowrap"
              >
                SEARCH
              </button>
            </div>

            {/* Results count */}
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredMentors.length} of {mentors.length} mentors
            </div>

            {/* Mentor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.length > 0 ? (
                filteredMentors.map((mentor, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
                  >
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden shrink-0">
                          <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-base">
                            {mentor.name}
                          </h3>
                          <p className="text-sm text-gray-600">{mentor.role}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-300">
                        ACTIVE
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-4 h-4 text-gray-400">•</div>
                        <span>{mentor.title}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-4 h-4 text-gray-400">•</div>
                        <span>{mentor.sessions} sessions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-4 h-4 text-gray-400">•</div>
                        <span>Top Mentor</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link to="/mentorship/request" className="flex-1">
                        <button className="w-full py-2 px-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded whitespace-nowrap">
                          Request Mentorship
                        </button>
                      </Link>
                      <button className="flex-1 py-2 px-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded whitespace-nowrap">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-gray-500">
                  No mentors found matching your criteria. Try adjusting your
                  filters.
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredMentors.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-yellow-600 text-white rounded font-medium shrink-0">
                  01
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                  02
                </button>
                <span className="px-2 hidden sm:inline">...</span>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                  10
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                  11
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 shrink-0">
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
      </div>
    </div>
  );
};

export default MentorList;
