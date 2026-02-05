import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DOCUMENTS_SEED, RECENT_DOCUMENTS_SEED, DOCUMENT_REQUESTS } from "../../utils/dummyData";

function StatCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex items-center gap-3 hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl bg-[#fbf4d5] grid place-items-center text-lg">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-gray-500">{title}</div>
        <div className="text-lg font-bold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

export default function DocumentsOverview() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [documents, setDocuments] = useState(DOCUMENTS_SEED);
  const [recentDocs, setRecentDocs] = useState(RECENT_DOCUMENTS_SEED);

  const [topSearch, setTopSearch] = useState("");
  const [docSearch, setDocSearch] = useState("");
  const [sortMode, setSortMode] = useState("Newest");

  const certCount = useMemo(
    () => documents.filter((d) => d.category === "Certificate").length,
    [documents]
  );

  const filteredDocs = useMemo(() => {
    const qTop = topSearch.trim().toLowerCase();
    const qDoc = docSearch.trim().toLowerCase();

    const base = documents.filter((d) => {
      const name = d.name.toLowerCase();
      return name.includes(qTop) && name.includes(qDoc);
    });

    if (sortMode === "Largest") {
      return [...base].sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    }
    return [...base].sort((a, b) => b.id - a.id);
  }, [documents, topSearch, docSearch, sortMode]);

  function openPicker() {
    fileRef.current?.click();
  }

  function onPickFiles(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const uploaded = files.map((f, idx) => ({
      id: Date.now() + idx,
      name: f.name,
      size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
      date: "Just now",
      star: false,
      category: "Document",
    }));

    setDocuments((prev) => [...uploaded, ...prev]);
    setRecentDocs((prev) => [
      ...uploaded.slice(0, 3).map((d) => ({ id: d.id + 10000, name: d.name, size: d.size, date: d.date })),
      ...prev,
    ].slice(0, 6));

    e.target.value = "";
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="p-5 md:p-7">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-[22px] md:text-[26px] font-bold text-gray-900">
              My Documents & Records
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              View, request, and download your official documents in one place.
            </p>
          </div>

          <button
            className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800
                       hover:bg-gray-50 shadow-sm transition"
            onClick={() => navigate("/documents/list")}
          >
            Open Masterlist →
          </button>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon="" title="Total Documents" value={documents.length} />
          <StatCard icon="" title="Certifications" value={certCount} />
          <StatCard icon="" title="Requested Documents" value="5" />
          <div className="hidden lg:block" />
        </div>

        {/* Grid */}
        <div className="mt-5 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-5">
          {/* Left column */}
          <div className="min-w-0 space-y-5">
            {/* Upload */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
              <div
                onClick={openPicker}
                className="group cursor-pointer rounded-2xl border-2 border-dashed border-[#f4c20d]
                           bg-white p-8 flex flex-col items-center justify-center text-center
                           hover:bg-[#fffbea] transition"
              >
                {/* Upload Icon */}
                <div className="text-[#9ca3af] group-hover:text-[#6b7280] transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V8m0 0l-3 3m3-3l3 3M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                    />
                  </svg>
                </div>

                {/* Text */}
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Click to upload</span> or drag and drop
                </p>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileRef}
                type="file"
                hidden
                multiple
                onChange={onPickFiles}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </div>

            {/* Documents */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Documents</div>
                  <div className="text-xs text-gray-500">Quick access to your latest files</div>
                </div>

                <button
                  className="h-9 px-3 rounded-full border border-gray-200 bg-white text-xs font-bold
                             hover:bg-gray-50 transition"
                  onClick={() => navigate("/documents/list")}
                >
                  View All
                </button>
              </div>

              {/* Search + Filter */}
              <div className="mt-4 flex items-center gap-3 w-full">
                <div className="flex-1 min-w-0 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></span>
                  <input
                    className="w-full h-10 rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm
                               outline-none focus:ring-2 focus:ring-[#f4c20d]/40 focus:border-[#f4c20d]/30 transition"
                    placeholder="Search documents…"
                    value={docSearch}
                    onChange={(e) => setDocSearch(e.target.value)}
                  />
                </div>

                <select
                  className="shrink-0 w-[140px] h-10 rounded-xl border border-gray-200 bg-white px-2 text-sm
                             outline-none focus:ring-2 focus:ring-[#f4c20d]/40 focus:border-[#f4c20d]/30 transition"
                  value={sortMode}
                  onChange={(e) => setSortMode(e.target.value)}
                >
                  <option>Newest</option>
                  <option>Largest</option>
                </select>
              </div>

              {/* List */}
              <div className="mt-4 divide-y divide-gray-100">
                {filteredDocs.slice(0, 6).map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    className="w-full text-left py-3 px-2 rounded-xl hover:bg-gray-50 transition flex items-center justify-between"
                    onClick={() => navigate("/documents/list")}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-10 w-10 rounded-xl bg-gray-100 grid place-items-center shrink-0 text-lg">
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900 truncate">{doc.name}</div>
                        <div className="text-xs text-gray-500">{doc.size} • {doc.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden sm:inline-flex text-[11px] font-bold px-2 py-1 rounded-md border border-gray-200 bg-white">
                        {doc.category}
                      </span>
                      <span className="h-9 w-9 rounded-xl border border-gray-200 bg-white grid place-items-center text-gray-600">
                        ⋮
                      </span>
                    </div>
                  </button>
                ))}

                {filteredDocs.length === 0 && (
                  <div className="py-10 text-center text-sm text-gray-500">
                    No documents found.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="min-w-0 space-y-5">
            {/* Recent */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Recent Documents</div>
                  <div className="text-xs text-gray-500">Most recently uploaded files</div>
                </div>
                <button
                  className="h-9 px-3 rounded-full border border-gray-200 bg-white text-xs font-bold hover:bg-gray-50 transition"
                  onClick={() => navigate("/documents/list")}
                >
                  View
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {recentDocs
                  .filter((d) => d.name.toLowerCase().includes(topSearch.toLowerCase()))
                  .slice(0, 3)
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="rounded-2xl bg-[#fbf4d5] p-4 flex items-center justify-between shadow-sm"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900 truncate">{doc.name}</div>
                        <div className="text-xs text-gray-700/70">{doc.size} • {doc.date}</div>
                      </div>

                      <button
                        className="h-10 w-10 rounded-xl bg-[#f4c20d] grid place-items-center font-bold text-[#111] hover:brightness-95 transition"
                        type="button"
                        title="Download (demo)"
                      >
                        ⬇
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            {/* Requests */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Document Request</div>
                  <div className="text-xs text-gray-500">Track your requests</div>
                </div>
                <button className="h-9 px-3 rounded-full border border-gray-200 bg-white text-xs font-bold hover:bg-gray-50 transition">
                  View All
                </button>
              </div>

              <button
                className="mt-4 w-full h-11 rounded-xl bg-[#f4c20d] text-[#111] font-semibold shadow-sm hover:brightness-95 transition"
                onClick={() => navigate("/documents/request")}
                type="button"
              >
                Request a Document
              </button>

              <div className="mt-4 space-y-3">
                {DOCUMENT_REQUESTS.map((req) => {
                  const approved = req.status === "Approved";
                  return (
                    <div
                      key={req.id}
                      className={`rounded-2xl p-4 border shadow-sm ${
                        approved
                          ? "bg-green-50 border-green-200"
                          : "bg-[#fff7e6] border-[#f4d58a]"
                      }`}
                    >
                      <div className="text-sm font-semibold text-gray-900">{req.title}</div>
                      <div className={`text-xs font-bold ${approved ? "text-green-700" : "text-orange-700"}`}>
                        {req.status}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
