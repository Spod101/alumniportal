import React from 'react';

export default function ProjectTableCard({ projects }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Project Table</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">PROJECT</th>
              <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">LINK</th>
              <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">INDUSTRY</th>
              <th className="px-4 py-4 text-left text-xs font-bold text-yellow-600 uppercase tracking-wide">ROLE</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.logo}</span>
                    <span className="text-sm text-gray-800">{project.name}</span>
                  </div>
                </td>
                <td className="px-4 py-5">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">{project.link}</a>
                </td>
                <td className="px-4 py-5 text-sm text-gray-700">{project.industry}</td>
                <td className="px-4 py-5 text-sm text-gray-700">{project.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
