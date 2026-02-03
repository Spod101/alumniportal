import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiCheck, FiClock, FiAward, FiTarget } from "react-icons/fi";

const BecomeMentor = () => {

  const benefitCards = [
    {
      title: "Build Connections",
      description:
        "Connect with alumni and professionals across different roles and fields through meaningful mentorship and collaboration.",
    },
    {
      title: "Support Career Growth",
      description:
        "Help interns, trainees, and junior professionals grow by sharing real-world experience, guidance, and practical insights.",
    },
    {
      title: "Extend Your Impact",
      description:
        "Contribute beyond mentoring by joining speaking engagements, outreach programs, and community initiatives.",
    },
    {
      title: "Earn Recognition",
      description:
        "Receive badges, certificates, and a clear record of your mentorship sessions and volunteer contributions.",
    },
  ];

  const eligibilityRequirements = [
    {
      title: "Minimum Experience",
      description:
        "At least 2 years of relevant work experience in your field or role.",
    },
    {
      title: "Availability",
      description:
        "Able to commit to at least 1 session per month and respond to mentee requests within a reasonable time.",
    },
    {
      title: "Professional Conduct",
      description:
        "Willing to provide guidance in a respectful, constructive, and supportive manner.",
    },
    {
      title: "Mentorship Focus",
      description:
        "Able to share real-world insights, industry experience, and career advice relevant to interns, trainees, or junior professionals.",
    },
  ];

  const mentorResponsibilities = [
    "Provide career guidance and skills support",
    "Review portfolios, resumes, or projects",
    "Share insights on job roles and industry trends",
    "Support mentees through short-term coaching or long-term guidance",
  ];

  return (
    <div className="w-full">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Become a Mentor
            </h1>
            <p className="text-sm text-gray-600">
              Share your knowledge, guide future professionals, and give back to
              the HSI community.
            </p>
          </div>

          {/* Why Become a Mentor Section */}
          <div className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-yellow-600 mb-6 text-center">
              Why Become a Mentor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
              {benefitCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 lg:p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-800 text-base mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Eligibility and Responsibilities Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            {/* Mentor Eligibility */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                Mentor Eligibility
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                To ensure a meaningful mentorship experience, mentors are
                expected to meet the following requirements:
              </p>

              <div className="space-y-5">
                {eligibilityRequirements.map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="shrink-0 mt-1">
                      <div className="w-5 h-5 rounded border-2 border-gray-800 flex items-center justify-center">
                        <FiCheck className="w-3 h-3 text-gray-800" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">
                        {req.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {req.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Mentors Will Be Doing */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:p-8">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                What Mentors Will Be Doing
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Mentors should be prepared to:
              </p>
              <ul className="space-y-4 mb-6">
                {mentorResponsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <span className="text-yellow-600 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Additional content to fill space */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-start gap-3">
                  <FiClock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      Time Commitment
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We recommend dedicating at least 1-2 hours per month for
                      mentorship sessions. This flexible schedule allows you to
                      make a meaningful impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiAward className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      Recognition Program
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Track your mentorship hours and earn badges for milestone
                      achievements as you guide the next generation of
                      professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                  <FiTarget className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span className="font-medium">
                    Regular monthly sessions work best for building strong
                    mentor-mentee relationships.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Mentor Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                Ready to Mentor?
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mb-6">
                If you meet the requirements, proceed to the sign-up form to
                become a mentor. Your contribution will help shape the next
                generation of HSI professionals and make a lasting impact on
                their careers.
              </p>

              <Link
                to="/mentorship/signup"
                className="px-10 py-3.5 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105 transform inline-flex items-center gap-2"
              >
                <FiUsers className="w-4 h-4" />
                Become a Mentor
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Questions? Contact the mentorship program coordinator at{" "}
                  <a
                    href="mailto:mentorship@hsi.com"
                    className="text-yellow-600 hover:underline"
                  >
                    mentorship.hs@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default BecomeMentor;
