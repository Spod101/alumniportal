import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiSearch, FiChevronLeft, FiChevronRight, FiShare2, FiDownload, FiMoreVertical, FiFileText } from "react-icons/fi";

export default function DocumentPreview() {
  const location = useLocation();
  const navigate = useNavigate();

  const passedDoc = location.state?.document || null;
  const [selectedFile, setSelectedFile] = React.useState(passedDoc);

  const fileName = (selectedFile && selectedFile.name) || "Document Preview";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-yellow-800 to-yellow-600 px-6 py-4 flex items-center justify-between">
        <div className="text-white text-sm flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-2 text-sm border border-white/30 rounded hover:bg-white/10 transition"
            type="button"
          >
            ← Back
          </button>
          <span>Document Preview</span>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-md mx-auto">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 grid place-items-center text-white font-bold">
            MZ
          </div>
          <div className="text-white text-sm">
            <div className="font-semibold">MARK ZUCKERBERG</div>
            <div className="text-xs opacity-90">Co-Founder / CEO</div>
          </div>
        </div>
      </div>

      {/* Document Viewer */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        {selectedFile ? (
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
            {/* Document Controls */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="text-lg font-medium">{fileName}</div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded" type="button">
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" type="button">
                  <FiChevronRight className="w-5 h-5" />
                </button>

                <button
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-2"
                  type="button"
                >
                  <FiShare2 className="w-4 h-4" />
                  Share
                </button>

                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 flex items-center gap-2"
                  type="button"
                >
                  <FiDownload className="w-4 h-4" />
                  Download
                </button>

                <button className="p-2 hover:bg-gray-100 rounded" type="button">
                  <FiMoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-12 bg-gray-50">
              <div className="bg-white p-12 shadow-sm">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h1 className="text-5xl font-bold text-blue-900 mb-2">Mark</h1>
                    <h1 className="text-5xl font-bold text-blue-900 mb-6">Zuckerberg</h1>

                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-red-500 font-semibold">Email:</span>
                        <span className="ml-2">zuckerberg@cs.harvard.edu</span>
                      </div>
                      <div>
                        <span className="text-red-500 font-semibold">Phone:</span>
                        <span className="ml-2">+1 755 439 867</span>
                      </div>
                      <div>
                        <span className="text-red-500 font-semibold">Location:</span>
                        <span className="ml-2">Cambridge, MA</span>
                      </div>
                    </div>
                  </div>

                  <img
                    src="https://via.placeholder.com/120"
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                  />
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-3 gap-12">
                  {/* Left Column */}
                  <div className="col-span-2 space-y-8">
                    {/* Education */}
                    <section>
                      <h2 className="text-xl font-bold text-blue-900 mb-4">Education & Courses</h2>

                      <div className="mb-4">
                        <div className="text-red-500 font-semibold mb-1">Psychology and Computer Science</div>
                        <div className="bg-blue-900 text-white text-xs inline-block px-2 py-1 mb-2">
                          Harvard University
                        </div>
                        <div className="text-sm text-gray-600">Sep 2002 - ongoing</div>
                        <div className="text-sm text-gray-600">Cambridge, MA</div>
                      </div>

                      <div>
                        <div className="text-red-500 font-semibold mb-1">Classical studies and Science</div>
                        <div className="bg-blue-900 text-white text-xs inline-block px-2 py-1 mb-2">
                          Phillips Exeter Academy
                        </div>
                        <div className="text-sm text-gray-600 mb-2">May 1998 - 2001</div>
                        <div className="text-sm text-gray-600">
                          Prestigious prep school; member of the Ten Schools
                        </div>
                        <div className="text-sm text-gray-600">Admission Organization ("Big Tens")</div>
                      </div>
                    </section>

                    {/* Software Development Experience */}
                    <section>
                      <h2 className="text-xl font-bold text-blue-900 mb-4">Software Development Experience</h2>

                      <div className="mb-6">
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="text-red-500 font-semibold">Facemash</h3>
                          <span className="text-sm text-gray-600">10/2003 - ongoing</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          A social-oriented website that allows visitors to compare two student pictures
                          side-by-side and let them choose who was "hot" and who was "not"
                        </p>
                        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                          <li>Attracted 450 visitors for the first day who voted at least 22,000 times</li>
                          <li>Crashed the Harvard network which led to shutting down the website</li>
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="text-red-500 font-semibold">CourseMatch</h3>
                          <span className="text-sm text-gray-600">2003 - ongoing</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          The first intercostal media that allows university students to make class
                          selection decisions based on the choices of other students and also to help them
                          form study groups
                        </p>
                      </div>

                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="text-red-500 font-semibold">Synapse Media Player</h3>
                          <span className="text-sm text-gray-600">2006 - 2001</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          Synapse is an app that uses artificial intelligence to learn the user's
                          listening habits and then recommends music based on the user's preferences
                        </p>
                        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                          <li>Featured on the Slashdot and got a rating of 3/5 by PC Mag</li>
                          <li>Reached 10000+ downloads for the first month and 10,000 hits in one day</li>
                          <li>Attracted interest from Microsoft and AOL and got over 1 million valuations</li>
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xl font-bold text-blue-900 mb-3">Life Philosophy</h2>
                      <p className="text-sm text-gray-700 italic">
                        "I'm trying to make the world a more open place"
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-bold text-blue-900 mb-3">Languages</h2>
                      <div className="space-y-2">
                        <div>
                          <span className="bg-blue-900 text-white text-xs px-2 py-1 inline-block">English</span>
                          <span className="text-sm text-gray-600 ml-2">Native</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <FiFileText className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Document Selected
              </h2>
              <p className="text-gray-500 mb-6">Upload or select a document to preview</p>
              <label className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 cursor-pointer inline-block">
                Select Document
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files[0]) setSelectedFile(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
