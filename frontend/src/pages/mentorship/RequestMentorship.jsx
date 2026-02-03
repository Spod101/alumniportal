import React, { useState } from "react";
import clockIcon from "../../assets/clock.svg";
import refreshIcon from "../../assets/loading.svg";
import star from "../../assets/star.svg";
import user from "../../assets/user.svg";
import flagIcon from "../../assets/flag.svg";

export default function RequestMentorship() {
  const [mentorshipGoal, setMentorshipGoal] = useState("");
  const [specificTopic, setSpecificTopic] = useState("");
  const [sessionDuration, setSessionDuration] = useState("");
  const [userRole, setUserRole] = useState("");

  return (
    <div className="w-full">
          <h1 className="text-3xl font-bold text-gray-900">
            Request Mentorship
          </h1>
          <p className="text-gray-500 mt-1 italic text-sm">
            Send a request to your chosen mentor and start your mentorship
            journey.
          </p>

          {/* MAIN GRID LAYOUT: Left (Form) & Right (Sidebar Details) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* LEFT COLUMN - Added 'flex flex-col gap-6 h-full' */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full">
              {/* 1. Mentor Summary Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Mentor Summary
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                  <img
                    src={user}
                    alt="User Icon"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shrink-0"
                  />
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Bill Gates
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      Technology & Entrepreneurship
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-xs font-medium text-gray-500">
                      <div className="flex items-center gap-1">
                        <img src={flagIcon} alt="Flag" className="w-3 h-3" />{" "}
                        Co-founder & Former CEO
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={clockIcon} alt="Clock" className="w-3 h-3" />{" "}
                        20 yrs Experience
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src={refreshIcon}
                          alt="Refresh"
                          className="w-3 h-3"
                        />{" "}
                        18 sessions
                      </div>
                      <div className="flex items-center gap-1 ">
                        <img src={star} alt="Star" className="w-4 h-4" /> Top
                        Mentor
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                      {["Python", "JavaScript", "HTML", "PHP", "Laravel"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-200 text-[#787130] text-xs font-semibold rounded-full border border-[#787130]-300"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Request Form Card - Added 'flex-1' to stretch height */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-gray-800 mb-6">
                  Request Form
                </h2>

                {/* Added 'flex-1' to form to ensure button pushes to bottom if stretched */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                  {/* Mentorship Goal */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Mentorship Goal
                    </label>
                    <select
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                      value={mentorshipGoal}
                      onChange={(e) => setMentorshipGoal(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a goal
                      </option>
                      <option value="Skill Development">
                        Skill Development
                      </option>
                      <option value="Career Advice">Career Advice</option>
                      <option value="Networking">Networking</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>

                    {mentorshipGoal === "Other" && (
                      <input
                        type="text"
                        placeholder="Please specify your goal..."
                        className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                        autoFocus
                      />
                    )}
                  </div>

                  {/* Specific Topics / Skills */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Specific Topics / Skills
                    </label>
                    <select
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                      value={specificTopic}
                      onChange={(e) => setSpecificTopic(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Project Management">
                        Project Management
                      </option>
                      <option value="Other">Other (Please specify)</option>
                    </select>

                    {specificTopic === "Other" && (
                      <input
                        type="text"
                        placeholder="Please specify topic..."
                        className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                      />
                    )}
                  </div>

                  {/* Session Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Session Type
                    </label>
                    <select
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a Session Type
                      </option>
                      <option>Virtual</option>
                      <option>In-Person</option>
                      <option>Hybrid</option>
                    </select>
                  </div>

                  {/* Preferred Schedule */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Preferred Schedule
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700"
                    />
                  </div>

                  {/* Message to Mentor - flex-1 to fill space if needed */}
                  <div className="flex flex-col gap-2 md:col-span-2 flex-1">
                    <label className="text-xs font-bold text-gray-800">
                      Message to Mentor
                    </label>
                    <textarea
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 h-full min-h-30"
                      placeholder="Hi! I'm an HSI alumni looking to improve my web development skills. I'd like guidance on building a portfolio and preparing for interviews."
                    ></textarea>
                  </div>

                  {/* Submit Button - mt-auto ensures it stays at bottom */}
                  <div className="md:col-span-2 flex justify-center mt-auto pt-4">
                    <button
                      type="button"
                      className="w-full md:w-auto bg-[#eab308] text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition shadow-md cursor-pointer"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN - Added 'flex flex-col gap-6 h-full' */}
            <div className="flex flex-col gap-6 h-full">
              {/* 3. Reminder Card */}
              <div className="bg-[#f0ece1] p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-3">Reminder:</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Kindly provide relevant details about your background, goals,
                  and availability. This allows mentors to review your request
                  properly and ensures a more meaningful and productive session.
                </p>
              </div>

              {/* 4. More Details Card - Added 'flex-1' to stretch height */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex-1">
                <h2 className="text-lg font-bold text-gray-800 mb-6">
                  More Details{" "}
                  <span className="text-xs font-normal text-gray-500">
                    (Optional)
                  </span>
                </h2>

                <form className="space-y-4">
                  {/* Preferred Session Duration */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Preferred Session Duration
                    </label>
                    <select
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                      value={sessionDuration}
                      onChange={(e) => setSessionDuration(e.target.value)}
                    >
                      <option value="" disabled>
                        Select duration
                      </option>
                      <option value="30 minutes">30 minutes</option>
                      <option value="45 minutes">45 minutes</option>
                      <option value="60 minutes">60 minutes</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>

                    {sessionDuration === "Other" && (
                      <input
                        type="text"
                        placeholder="e.g. 90 minutes"
                        className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                      />
                    )}
                  </div>

                  {/* Your Role / Program */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Your Role / Program
                    </label>
                    <select
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 appearance-none"
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                    >
                      <option value="" disabled>
                        Select role
                      </option>
                      <option value="Trainee">Trainee</option>
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>

                    {userRole === "Other" && (
                      <input
                        type="text"
                        placeholder="Please specify your role..."
                        className="w-full p-3 mt-2 bg-white rounded-lg text-sm border-2 border-yellow-400 focus:border-yellow-600 outline-none text-gray-700 animate-fade-in"
                      />
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-800">
                      Additional Notes
                    </label>
                    <textarea
                      rows="4"
                      className="w-full p-3 bg-gray-100 rounded-lg text-sm border border-gray-300 focus:border-yellow-500 outline-none text-gray-700 min-h-50"
                      placeholder="Any specific questions or expectations you'd like the mentor to know."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </div>
  );
}
