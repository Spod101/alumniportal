import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DOCUMENTS_MASTERLIST } from "../../utils/dummyData";

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex items-center gap-3 hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl bg-[#fbf4d5] grid place-items-center text-lg">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-gray-500">{label}</div>
        <div className="text-lg font-bold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

export default function DocumentsList() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [topSearch, setTopSearch] = useState("");
  const [tableSearch, setTableSearch] = useState("");
  const [category, setCategory] = useState("All");

  const totalDocs = DOCUMENTS_MASTERLIST.length;
  const certs = DOCUMENTS_MASTERLIST.filter((d) => d.category === "Certificate").length;

  const rows = useMemo(() => {
    const q = (tableSearch || topSearch).trim().toLowerCase();
    return DOCUMENTS_MASTERLIST.filter((d) => {
      const matchesText = q ? d.name.toLowerCase().includes(q) : true;
      const matchesCat = category === "All" ? true : d.category === category;
      return matchesText && matchesCat;
    });
  }, [topSearch, tableSearch, category]);

  function openUpload() {
    fileRef.current?.click();
  }

  function onFilesPicked(e) {
    const f = e.target.files?.[0];
    if (f) alert(`(Demo) Uploading: ${f.name}`);
    e.target.value = "";
  }

  function handleRowClick(doc) {
    if (doc.name === "Professional_Experience_Summary.pdf") {
      navigate("/documents/preview", { state: { document: doc } });
      return;
    }
    alert(`Open doc ID: ${doc.id} (details page next)`);
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="p-5 md:p-7">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-[22px] md:text-[26px] font-bold text-gray-900">Documents</h1>
            <p className="mt-1 text-sm text-gray-600">Browse, filter, and upload documents.</p>
          </div>

          <button
            className="h-10 px-4 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800
                       hover:bg-gray-50 shadow-sm transition"
            onClick={() => navigate("/documents")}
          >
            ← Back to Overview
          </button>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px]">
          <Stat icon="📄" label="Total Documents" value={totalDocs} />
          <Stat icon="⭐" label="Certifications" value={certs} />
        </div>

        {/* Panel */}
        <div className="mt-5 rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
          {/* Toolbar */}
          <div className="flex items-center gap-3 w-full flex-wrap md:flex-nowrap">
            <div className="flex-1 min-w-0 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
              <input
                className="w-full h-10 rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm
                           outline-none focus:ring-2 focus:ring-[#f4c20d]/40 focus:border-[#f4c20d]/30 transition"
                placeholder="Search…"
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
              />
            </div>

            <select
              className="shrink-0 w-[160px] md:w-[140px] h-10 rounded-xl border border-gray-200 bg-white px-2 text-sm
                         outline-none focus:ring-2 focus:ring-[#f4c20d]/40 focus:border-[#f4c20d]/30 transition"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">Category</option>
              <option value="Document">Document</option>
              <option value="Certificate">Certificate</option>
            </select>

            <button
              className="shrink-0 h-10 px-4 rounded-xl bg-[#f4c20d] text-[#111] font-semibold shadow-sm
                         hover:brightness-95 transition"
              onClick={openUpload}
            >
              Upload Document
            </button>

            <input
              ref={fileRef}
              type="file"
              hidden
              onChange={onFilesPicked}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>

          {/* Table */}
          <div className="mt-5 overflow-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[760px] border-collapse bg-white">
              <thead className="bg-gray-50">
                <tr className="text-left text-sm text-gray-900">
                  <th className="py-3 px-3 w-10"></th>
                  <th className="py-3 px-3 font-semibold">Title</th>
                  <th className="py-3 px-3 font-semibold">Category</th>
                  <th className="py-3 px-3 font-semibold text-right">Upload Date</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer transition"
                    onClick={() => handleRowClick(doc)}
                  >
                    <td className="py-4 px-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="h-4 w-4" />
                    </td>

                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-xl bg-gray-100 grid place-items-center shrink-0 text-lg">
                          📄
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900 truncate">{doc.name}</div>
                          <div className="text-xs text-gray-500">Click to open</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-3">
                      <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold border border-gray-200 rounded-lg bg-white">
                        {doc.category}
                      </span>
                    </td>

                    <td className="py-4 px-3 text-right text-gray-600 font-semibold">
                      {doc.uploadDate}
                    </td>
                  </tr>
                ))}

                {rows.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-10 px-3 text-sm text-gray-500 text-center">
                      No documents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Tip: Use Category to quickly filter certificates and documents.
          </div>
        </div>
      </div>
    </div>
  );
}
