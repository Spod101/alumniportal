import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/user.svg";

// Data List
const EXPERTISE_OPTIONS = [
  "Web Development",
  "IT Sales",
  "Database Management",
  "Mobile Development",
  "Entrepreneurship",
  "Embedded Systems",
  "UI/UX Design",
  "Game Development",
  "IoT (Internet of Things)",
  "HR / Recruitment",
  "Cybersecurity",
  "Business Analysis",
  "Project Management",
  "Graphic Design",
  "Digital Marketing",
  "QA / Testing",
  "AI / Machine Learning",
  "Leadership / Management",
];

const FOCUS_OPTIONS = [
  "Career Planning & Pathing",
  "Soft Skills & Professionalism",
  "Resume & Portfolio Review",
  "Startup & Entrepreneurship Advice",
  "Portfolio Review",
  "Interview Preparation",
  "Design & UX Feedback",
  "Technical Skill Coaching",
  "Data & AI Guidance",
  "Project Guidance & Feedback",
  "Cybersecurity & IT Best Practices",
];

// Days
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const VOLUNTEER_OPTIONS = [
  "Speaker for talks or webinars",
  "Career coach for interns and juniors",
  "Community outreach volunteer",
  "Training or workshop facilitator",
  "Program advisor or evaluator",
];

export default function MentorSignUp() {
  {
    /* State Variables */
  }
  const [currentRole, setCurrentRole] = useState("");
  const [department, setDepartment] = useState("");
  const [secondaryDepartment, setSecondaryDepartment] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [sessionType, setSessionType] = useState("");
  const [volunteerRole, setVolunteerRole] = useState("");

  const [agreementChecked, setAgreementChecked] = useState(false);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  {
    /* Empty Variables */
  }
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedFocus, setSelectedFocus] = useState([]);

  const toggleExpertise = (item) => {
    setSelectedExpertise((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  {
    /* Toogle */
  }
  const toggleFocus = (item) => {
    setSelectedFocus((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const toggleDay = (day) => {
    setSelectedDays(
      (prev) =>
        prev.includes(day)
          ? prev.filter((d) => d !== day) // Remove day
          : [...prev, day], // Add day
    );
  };

  return (
    <div className="w-full">
          <div className="max-w-7xl mx-auto">
            {/* Page Title Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Mentor Sign-Up Form
              </h1>
              <p className="text-gray-500 mt-1 text-sm italic">
                Become a mentor and support junior professionals by sharing your
                experience and guidance.
              </p>
            </div>

            {/* PROFILE & BASIC INFO CARD */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
              {/* User Profile Header */}
              <div className="flex items-center gap-4 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-300">
                <img
                  src={userImage}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Mark Zuckerberg
                  </h2>
                  <p className="text-sm text-gray-600 italic">
                    Co-Founder / CEO
                  </p>
                </div>
              </div>

              {/* Basic Info Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. mark.zuckerberg@example.com"
                    className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700"
                  />
                </div>

                {/* Current role */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">
                    Current Role / Job Title
                  </label>
                  <select
                    className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                    value={currentRole}
                    onChange={(e) => setCurrentRole(e.target.value)}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option>Co-Founder / CEO</option>
                    <option>Software Engineer</option>
                    <option>Product Manager</option>
                    <option>Data Scientist</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>

                  {currentRole === "Other" && (
                    <input
                      type="text"
                      placeholder="Please specify your role..."
                      className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                      autoFocus
                    />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5"
                    className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Department */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">
                    Department
                  </label>
                  <select
                    className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="" disabled>
                      Select department
                    </option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Data Science</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>

                  {department === "Other" && (
                    <input
                      type="text"
                      placeholder="Please specify department..."
                      className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                    />
                  )}
                </div>

                {/* Secondary Department */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-800">
                    Secondary Department
                  </label>
                  <select
                    className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                    value={secondaryDepartment}
                    onChange={(e) => setSecondaryDepartment(e.target.value)}
                  >
                    <option value="" disabled>
                      Select secondary department
                    </option>
                    <option>None</option>
                    <option>IT Sales</option>
                    <option>Marketing</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>

                  {secondaryDepartment === "Other" && (
                    <input
                      type="text"
                      placeholder="Please specify secondary department..."
                      className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* SECTION TITLE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* LEFT: Area of Expertise */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
                <h4 className="font-bold text-sm text-gray-800 mb-4">
                  Area of Expertise{" "}
                  <span className="text-gray-400 font-normal text-xs">
                    (Select all that apply)
                  </span>
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2">
                  {EXPERTISE_OPTIONS.map((item) => (
                    <CheckboxOption
                      key={item}
                      label={item}
                      checked={selectedExpertise.includes(item)}
                      onChange={() => toggleExpertise(item)}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: Mentoring Focus */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
                <h4 className="font-bold text-sm text-gray-800 mb-4">
                  Mentoring Focus{" "}
                  <span className="text-gray-400 font-normal text-xs">
                    (Select all that apply)
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2">
                  {FOCUS_OPTIONS.map((item) => (
                    <CheckboxOption
                      key={item}
                      label={item}
                      checked={selectedFocus.includes(item)}
                      onChange={() => toggleFocus(item)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* AVAILABILITY & SCHEDULING GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* LEFT COLUMN: Availability */}
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Availability & Scheduling
                </h3>

                {/* Left White Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1">
                  {/* 1. DYNAMIC DAYS SELECTOR */}
                  <h4 className="font-bold text-sm text-gray-800 mb-4">
                    Available Days
                  </h4>
                  <div className="flex gap-3 mb-6 text-sm flex-wrap">
                    {DAYS.map((day) => {
                      const isSelected = selectedDays.includes(day);
                      return (
                        <button
                          key={day}
                          onClick={() => toggleDay(day)}
                          type="button"
                          className={`font-bold transition-colors ${
                            isSelected
                              ? "text-[#eab308]"
                              : "text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Preferred Session Type */}
                  <h4 className="font-bold text-sm text-gray-800 mb-3">
                    Preferred Session Type
                  </h4>
                  <div className="flex gap-6 mb-6">
                    <RadioOption
                      label="Virtual"
                      checked={sessionType === "Virtual"}
                      onChange={() => setSessionType("Virtual")}
                    />
                    <RadioOption
                      label="Onsite"
                      checked={sessionType === "Onsite"}
                      onChange={() => setSessionType("Onsite")}
                    />
                    <RadioOption
                      label="Both"
                      checked={sessionType === "Both"}
                      onChange={() => setSessionType("Both")}
                    />
                  </div>

                  {/* 3. TIME INPUTS */}
                  <h4 className="font-bold text-sm text-gray-800 mb-3">
                    Available Time
                  </h4>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700">
                        Start Time
                      </label>
                      <input
                        type="time"
                        defaultValue="09:00"
                        className="p-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-yellow-500 outline-none shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700">
                        End Time
                      </label>
                      <input
                        type="time"
                        defaultValue="15:00"
                        className="p-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-yellow-500 outline-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Volunteer & Community Involvement */}
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Volunteer & Community Involvement
                </h3>

                {/* Right White Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1 flex flex-col">
                  {/* Container with justify-between to max out whitespace */}
                  <div className="flex-1 flex flex-col justify-between py-2">
                    {/* Standard Options */}
                    {VOLUNTEER_OPTIONS.map((option) => (
                      <RadioOption
                        key={option}
                        label={option}
                        checked={volunteerRole === option}
                        onChange={() => setVolunteerRole(option)}
                      />
                    ))}

                    {/* "Other" Option Section */}
                    <div className="flex flex-col gap-3">
                      <RadioOption
                        label="Other (Please specify)"
                        checked={volunteerRole === "Other"}
                        onChange={() => setVolunteerRole("Other")}
                      />

                      {/* Conditional Input Field */}
                      {volunteerRole === "Other" && (
                        // Wrapper div handles the indentation (pl-6) to prevent overflow
                        <div className="pl-6 w-full">
                          <input
                            type="text"
                            placeholder="Please specify your role..."
                            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 focus:border-yellow-500 outline-none animate-fade-in shadow-sm"
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AGREEMENT & SUBMIT */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 w-full md:w-1/2">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Mentor Agreement & Guidelines
              </h3>

              <div className="space-y-4">
                <Link
                  to="#"
                  className="text-[#eab308] text-sm font-bold hover:underline block mb-2"
                >
                  View Mentor Guidelines & Code of Conduct
                </Link>

                {/* CHECKBOX CONTAINER */}
                <div
                  className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100 cursor-pointer select-none transition hover:bg-yellow-100"
                  onClick={() => setAgreementChecked(!agreementChecked)}
                >
                  <div className="mt-0.5 min-w-[20px]">
                    {/* DYNAMIC CHECKBOX UI */}
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${agreementChecked ? "bg-[#eab308] border-[#eab308]" : "bg-white border-gray-400"}`}
                    >
                      {agreementChecked && (
                        <svg
                          className="w-3 h-3 text-white fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-tight">
                    I agree to follow the mentorship guidelines and maintain
                    professional conduct throughout the mentoring engagement.
                  </p>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    disabled={!agreementChecked} // Disable if not checked
                    className={`w-full font-bold py-3 rounded-lg shadow-md transition ${
                      agreementChecked
                        ? "bg-[#eab308] hover:bg-yellow-600 text-white cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

// --- HELPER COMPONENTS FOR STYLING ---

function CheckboxOption({ label, checked, onChange }) {
  return (
    <div
      onClick={onChange} // Logic: Calls function when clicked
      className="flex items-start gap-2 cursor-pointer group"
    >
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${checked ? "border-[#eab308]" : "border-gray-400"}`}
      >
        {checked && <div className="w-2 h-2 bg-[#eab308] rounded-full"></div>}
      </div>
      <span className="text-[11px] md:text-xs text-gray-700 group-hover:text-gray-900 leading-tight select-none">
        {label}
      </span>
    </div>
  );
}
function RadioOption({ label, checked, onChange }) {
  return (
    <div
      onClick={onChange} // Make the whole container clickable
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${checked ? "border-[#eab308]" : "border-gray-400"}`}
      >
        {checked && <div className="w-2 h-2 bg-[#eab308] rounded-full"></div>}
      </div>
      <span
        className={`text-xs group-hover:text-gray-900 ${checked ? "text-gray-900 font-medium" : "text-gray-700"}`}
      >
        {label}
      </span>
    </div>
  );
}