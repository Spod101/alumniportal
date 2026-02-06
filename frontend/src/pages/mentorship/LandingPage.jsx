import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiFlag, FiUsers, FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const LandingPage = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [hoveredMentor, setHoveredMentor] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isInitialized, setIsInitialized] = useState(false);

  const mentors = [
    {
      name: "Bill Gates",
      role: "CEO & Co-founder",
      sessions: "16 sessions",
      status: null,
      experience: "20 Years",
    },
    {
      name: "Elon Musk",
      role: "CEO & Product Architect",
      sessions: "12 sessions",
      status: null,
      experience: "18 Years",
    },
    {
      name: "Satya Nadella",
      role: "CEO & Chairman",
      sessions: "14 sessions",
      status: null,
      experience: "22 Years",
    },
    {
      name: "Sundar Pichai",
      role: "CEO",
      sessions: "10 sessions",
      status: null,
      experience: "15 Years",
    },
    {
      name: "Tim Cook",
      role: "CEO",
      sessions: "13 sessions",
      status: "Available",
      experience: "25 Years",
    },
    {
      name: "Mark Zuckerberg",
      role: "CEO & Co-founder",
      sessions: "11 sessions",
      status: null,
      experience: "19 Years",
    },
    {
      name: "Jeff Bezos",
      role: "Executive Chairman",
      sessions: "15 sessions",
      status: null,
      experience: "30 Years",
    },
    {
      name: "Jensen Huang",
      role: "CEO & Co-founder",
      sessions: "9 sessions",
      status: null,
      experience: "31 Years",
    },
  ];

  const duplicatedMentors = [...mentors, ...mentors, ...mentors];

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else if (width < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current && !isInitialized) {
      const container = scrollContainerRef.current;
      requestAnimationFrame(() => {
        const middlePosition = container.scrollWidth / 3;
        container.scrollLeft = middlePosition;
        setIsInitialized(true);
      });
    }
  }, [isInitialized]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 300;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (direction === "left") {
        const newScroll = currentScroll - scrollAmount;
        if (newScroll <= 0) {
          const middlePosition = container.scrollWidth / 3;
          container.scrollLeft = middlePosition;
          setTimeout(() => {
            container.scrollTo({
              left: middlePosition - scrollAmount,
              behavior: "smooth",
            });
          }, 10);
        } else {
          container.scrollTo({ left: newScroll, behavior: "smooth" });
        }
      } else {
        const newScroll = currentScroll + scrollAmount;
        if (newScroll >= maxScroll) {
          const middlePosition = container.scrollWidth / 3;
          container.scrollLeft = middlePosition;
          setTimeout(() => {
            container.scrollTo({
              left: middlePosition + scrollAmount,
              behavior: "smooth",
            });
          }, 10);
        } else {
          container.scrollTo({ left: newScroll, behavior: "smooth" });
        }
      }
    }
  };

  const handleMentorClick = () => {
    navigate("/mentorship/request");
  };

  const handleExploreAll = () => {
    navigate("/mentorship/mentors");
  };

  const handleCardClick = (destination) => {
    navigate(destination);
  };

  return (
    <div className="w-full">
      <div className="px-4 sm:px-8 lg:px-16 pt-6 pb-2">
        <div className="max-w-7xl mx-auto">
          <PageHeader
            titlePart1="Mentorship & "
            titlePart2="Programs"
            subtitle="Grow your career through mentorship, volunteering, and community."
          />
        </div>
      </div>
      {/* 1ST SECTION - Hero Section - RESPONSIVE */}
      <div className="bg-gray-200 px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              style={{ color: "#E6C72E" }}
            >
              Grow Your Career Through Mentorship & Community
            </h1>
            <p className="text-gray-800 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Support the next generation of HSI professionals through
              mentorship, volunteering, and advocacy.
            </p>
            <Link to="/mentorship/mentors">
              <button
                className="bg-gray-700 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform cursor-pointer"
                style={{ color: "#E6C72E" }}
              >
                Get a Mentor
              </button>
            </Link>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-125 w-full max-w-2xl mx-auto">
            {/* 1st layer - Laptop image (Back/Left) */}
            <div className="absolute top-0 left-0 w-1/2 z-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop"
                alt="Mentorship session 1"
                className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-48 sm:h-64 md:h-80 lg:h-100 object-cover"
              />
            </div>

            {/* 2nd layer - High-five image (Front/Right) */}
            <div className="absolute bottom-0 right-0 sm:right-10 md:right-20 lg:right-30 w-1/2 z-10">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=700&fit=crop"
                alt="Mentorship session 2"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-40 sm:h-56 md:h-72 lg:h-87.5 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2ND SECTION - How the Program Works - RESPONSIVE */}
      <div
        className="px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20"
        style={{ backgroundColor: "rgba(230, 199, 46, 0.13)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Title and description */}
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: "#E6C72E" }}
            >
              How the Program Works
            </h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Connect with experienced alumni, schedule mentorship sessions,
              and take part in volunteer initiatives designed to support
              career growth and community engagement.
            </p>
          </div>

          {/* Right side - 2x2 grid of cards - RESPONSIVE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Be a Mentor */}
            <div
              className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-gray-400"
              onClick={() => handleCardClick("/mentorship/become-mentor")}
              onMouseEnter={() => setHoveredCard("find")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Be a Mentor
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 sm:mb-4">
                Share your experience, guide juniors, and give back to the
                HSI community by mentoring interns and alumni.
              </p>
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === "find" ? "scale-110" : ""
                }`}
                style={{ backgroundColor: "#E6C72E" }}
              >
                <FiArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={3}
                />
              </div>
            </div>

            {/* Find a Mentor - CLICKABLE */}
            <div
              className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-gray-400"
              onClick={() => handleCardClick("/mentorship/mentors")}
              onMouseEnter={() => setHoveredCard("find")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Find a Mentor
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 sm:mb-4">
                Get matched with experienced professionals based on your
                goals, skills, and career path.
              </p>
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === "find" ? "scale-110" : ""
                }`}
                style={{ backgroundColor: "#E6C72E" }}
              >
                <FiArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={3}
                />
              </div>
            </div>

            {/* Volunteer & Speak */}
            <div
              className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-gray-400"
              onClick={() => handleCardClick("/mentorship/volunteer")}
              onMouseEnter={() => setHoveredCard("find")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Volunteer & Speak
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 sm:mb-4">
                Join outreach programs, tech talks, and advocacy events as a
                volunteer or speaker.
              </p>
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === "find" ? "scale-110" : ""
                }`}
                style={{ backgroundColor: "#E6C72E" }}
              >
                <FiArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={3}
                />
              </div>
            </div>

            {/* Schedule Sessions - CLICKABLE */}
            <div
              className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-gray-400"
              onClick={() => handleCardClick("/mentorship/mentors")}
              onMouseEnter={() => setHoveredCard("schedule")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Schedule Sessions
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 sm:mb-4">
                Book virtual or onsite mentorship sessions at a time that
                works for both mentor and mentee.
              </p>
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === "schedule" ? "scale-110" : ""
                }`}
                style={{ backgroundColor: "#E6C72E" }}
              >
                <FiArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3RD SECTION - Discover Mentors - FULLY RESPONSIVE */}
      <div className="bg-gray-100 px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Discover Mentors
            </h2>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleExploreAll}
                className="px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-gray-900 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-900 hover:text-white hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
              >
                Explore all
              </button>
              <button
                onClick={() => handleScroll("left")}
                className="p-1.5 sm:p-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white hover:shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer"
              >
                <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-1.5 sm:p-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white hover:shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer"
              >
                <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* RESPONSIVE CAROUSEL CONTAINER */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                maxWidth: `calc(300px * ${visibleCards} + 24px * ${visibleCards - 1})`,
              }}
            >
              {duplicatedMentors.map((mentor, index) => {
                const getMentorImage = (name) => {
                  const imageMap = {
                    "Bill Gates": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
                    "Elon Musk": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
                    "Satya Nadella": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
                    "Sundar Pichai": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
                    "Tim Cook": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
                    "Mark Zuckerberg": "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=faces",
                    "Jeff Bezos": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=faces",
                    "Jensen Huang": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces"
                  };
                  return imageMap[name] || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces";
                };

                return (
                  <div
                    key={index}
                    className="min-w-70 sm:min-w-75 max-w-70 sm:max-w-75 shrink-0 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border-2 border-gray-200 hover:ring-4 hover:ring-blue-400 transition-all cursor-pointer relative"
                    onClick={handleMentorClick}
                    onMouseEnter={() => setHoveredMentor(index)}
                    onMouseLeave={() => setHoveredMentor(null)}
                  >
                    <div className="relative">
                      <img
                        src={getMentorImage(mentor.name)}
                        alt={mentor.name}
                        className="w-full h-48 sm:h-56 object-cover"
                      />
                      {mentor.status && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold text-gray-700">
                          {mentor.status}
                        </div>
                      )}

                      {/* Hover overlay with "Request Mentor" text */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                          hoveredMentor === index
                            ? "opacity-100 backdrop-blur-md"
                            : "opacity-0 backdrop-blur-none pointer-events-none"
                        }`}
                        style={{
                          backgroundColor:
                            hoveredMentor === index
                              ? "rgba(0, 0, 0, 0.25)"
                              : "transparent",
                        }}
                      >
                        <div
                          className={`bg-white bg-opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition-all duration-500 transform ${
                            hoveredMentor === index ? "scale-100" : "scale-90"
                          }`}
                        >
                          <span className="text-gray-900 font-bold text-base sm:text-lg">
                            Request Mentor
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-base sm:text-lg mb-1">
                        {mentor.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <FiFlag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          {mentor.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <FiUsers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          {mentor.sessions}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">
                          Experience
                        </div>
                        <div className="font-semibold text-sm text-gray-900">
                          {mentor.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 4TH SECTION - Why Join the Program - RESPONSIVE */}
      <div className="bg-white px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12"
            style={{ color: "#E6C72E" }}
          >
            Why Join the Program
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 items-start">
            {/* Left side - Single image (responsive size) */}
            <div className="w-full max-w-sm mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=350&h=450&fit=crop"
                alt="Career Growth"
                className="rounded-xl sm:rounded-2xl object-cover w-full h-64 sm:h-80 lg:h-full"
              />
            </div>

            {/* Right side - 2x2 grid of cards - RESPONSIVE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Career Growth */}
              <div
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                style={{ borderColor: "#E6C72E" }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  Career Growth
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Receive personalized guidance from experienced
                  professionals who can help you navigate career decisions,
                  develop in-demand skills, and plan your professional
                  growth.
                </p>
              </div>

              {/* Meaningful Connections */}
              <div
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                style={{ borderColor: "#E6C72E" }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  Meaningful Connections
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Build long-term relationships with alumni, mentors, and
                  peers that go beyond sessions—creating a strong and
                  supportive professional network within HSI.
                </p>
              </div>

              {/* Give Back */}
              <div
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                style={{ borderColor: "#E6C72E" }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  Give Back
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Make a positive impact by supporting interns, junior
                  members, and community initiatives through mentorship,
                  volunteering, and knowledge-sharing activities.
                </p>
              </div>

              {/* Recognition & Tracking */}
              <div
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                style={{ borderColor: "#E6C72E" }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  Recognition & Tracking
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Gain recognition for your contributions with badges,
                  certificates, and a clear record of mentorship sessions
                  and volunteer hours—all tracked in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
