import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { BADGE_CONFIG, TIER_CONFIG, BADGE_HOLDERS, BADGE_HOLDERS_PAGE_SIZE } from '../../utils/achievementData';
import { ACHIEVEMENT_ICONS } from '../../utils/achievementIcons';

const Medal = ACHIEVEMENT_ICONS.medal;
const Search = ACHIEVEMENT_ICONS.search;
const Eye = ACHIEVEMENT_ICONS.eye;
const X = ACHIEVEMENT_ICONS.x;
const Mail = ACHIEVEMENT_ICONS.mail;
const Briefcase = ACHIEVEMENT_ICONS.briefcase;
const Calendar = ACHIEVEMENT_ICONS.calendar;

function BadgeShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const [showBadgeDetail, setShowBadgeDetail] = useState(null);
  const [selectedHolder, setSelectedHolder] = useState(null);

  const filteredHolders = BADGE_HOLDERS.filter((holder) => {
    const matchesSearch = holder.name.toLowerCase().includes(searchTerm.toLowerCase()) || holder.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBadge = !selectedBadge || holder.badges.includes(selectedBadge);
    return matchesSearch && matchesBadge;
  }).sort((a, b) => b.badges.length - a.badges.length);

  const totalPages = Math.ceil(filteredHolders.length / BADGE_HOLDERS_PAGE_SIZE);
  const startIndex = (currentPage - 1) * BADGE_HOLDERS_PAGE_SIZE;
  const currentHolders = filteredHolders.slice(startIndex, startIndex + BADGE_HOLDERS_PAGE_SIZE);

  const badgeStats = Object.keys(BADGE_CONFIG).map((type) => ({
    type,
    count: BADGE_HOLDERS.filter((h) => h.badges.includes(type)).length,
    ...BADGE_CONFIG[type],
  }));

  const getIcon = (iconKey) => ACHIEVEMENT_ICONS[iconKey] || Medal;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Medal size={24} className="text-[#DAB619]" /> Alumni Badges Showcase
            </h2>
            <p className="text-sm text-gray-500 mt-1">Explore badges earned by our distinguished employee and intern alumni</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <input type="text" placeholder="Search alumni..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-56 pl-10 pr-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40" />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <select value={selectedBadge} onChange={(e) => setSelectedBadge(e.target.value)} className="px-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white">
              <option value="">All Badges</option>
              {Object.entries(BADGE_CONFIG).map(([key, config]) => (
                <option key={key} value={key}>{config.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap gap-3">
          {badgeStats.map((badge) => {
            const Icon = getIcon(badge.iconKey);
            const isSelected = selectedBadge === badge.type;
            return (
              <button key={badge.type} onClick={() => setSelectedBadge(isSelected ? '' : badge.type)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all flex-1 min-w-[180px] ${isSelected ? 'ring-2 ring-[#DAB619] shadow-md' : 'bg-gray-50 hover:bg-gray-100'}`} style={{ backgroundColor: isSelected ? badge.bgColor : undefined }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: isSelected ? 'white' : badge.bgColor }}>
                  <Icon size={22} style={{ color: badge.color }} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-medium text-gray-900">{badge.name}</p>
                  <p className="text-lg font-bold" style={{ color: badge.color }}>{badge.count} <span className="text-xs font-normal text-gray-500">holders</span></p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Badge Holders ({filteredHolders.length})</h3>
          <div className="flex items-center gap-2">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#DAB619] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#DAB619] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {currentHolders.map((holder) => (
              <div key={holder.id} className="p-4 border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#DAB619]/30 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold">
                    {holder.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#DAB619] transition-colors">{holder.name}</h4>
                    <p className="text-xs text-gray-500">{holder.alumniType}</p>
                  </div>
                </div>
                <div className="mb-3 p-2.5 bg-gray-50 rounded-lg">
                  <p className="text-xs font-medium text-gray-700">{holder.hsiRole}</p>
                  <p className="text-[10px] text-gray-400">{holder.hsiTenure}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {holder.badges.map((badgeType, idx) => {
                    const config = BADGE_CONFIG[badgeType];
                    const Icon = config ? getIcon(config.iconKey) : Medal;
                    return (
                      <div key={idx} className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium cursor-pointer hover:shadow-sm transition-all" style={{ color: config?.color || '#6B7280', backgroundColor: config?.bgColor || '#F3F4F6' }} onClick={() => setShowBadgeDetail(badgeType)} title={config?.name}>
                        <Icon size={10} /> {config?.name || badgeType}
                      </div>
                    );
                  })}
                </div>
                <button onClick={() => setSelectedHolder(holder)} className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-gray-500 hover:text-[#DAB619] hover:bg-[#DAB619]/5 rounded-lg transition-colors border border-gray-100">
                  <Eye size={14} /> View Profile
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {currentHolders.map((holder) => (
              <div key={holder.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md hover:border-[#DAB619]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold">
                    {holder.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{holder.name}</h4>
                    <p className="text-xs text-gray-500">{holder.alumniType}</p>
                    <p className="text-xs text-gray-400">{holder.hsiRole} ({holder.hsiTenure})</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-1.5 max-w-md">
                    {holder.badges.map((badgeType, idx) => {
                      const config = BADGE_CONFIG[badgeType];
                      const Icon = config ? getIcon(config.iconKey) : Medal;
                      return (
                        <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer hover:shadow-sm transition-all" style={{ backgroundColor: config?.bgColor || '#F3F4F6', color: config?.color || '#6B7280' }} title={config?.name} onClick={() => setShowBadgeDetail(badgeType)}>
                          <Icon size={14} style={{ color: config?.color }} /> {config?.name}
                        </div>
                      );
                    })}
                  </div>
                  <button onClick={() => setSelectedHolder(holder)} className="p-2 text-gray-500 hover:text-[#DAB619] hover:bg-[#DAB619]/5 rounded-lg transition-colors">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6 pt-6 border-t border-gray-100">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Previous</button>
            {[...Array(totalPages)].map((_, idx) => (
              <button key={idx} onClick={() => setCurrentPage(idx + 1)} className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${currentPage === idx + 1 ? 'bg-[#DAB619] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>{idx + 1}</button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Next</button>
          </div>
        )}
      </div>

      {selectedHolder && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" onClick={() => setSelectedHolder(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="relative bg-gradient-to-r from-[#DAB619] to-[#c4a015] px-6 py-8">
              <button onClick={() => setSelectedHolder(null)} className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} className="text-white" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#DAB619] shadow-lg">
                  {selectedHolder.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedHolder.name}</h3>
                  <p className="text-white/80 text-sm">{selectedHolder.alumniType}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#DAB619]/10 flex items-center justify-center">
                  <Mail size={20} className="text-[#DAB619]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">{selectedHolder.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Briefcase size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">HSI Role</p>
                    <p className="text-sm font-medium text-gray-900">{selectedHolder.hsiRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Calendar size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Tenure</p>
                    <p className="text-sm font-medium text-gray-900">{selectedHolder.hsiTenure}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Medal size={16} className="text-[#DAB619]" /> Earned Badges ({selectedHolder.badges.length})
                </h4>
                <div className="space-y-2">
                  {selectedHolder.badges.map((badgeType, idx) => {
                    const config = BADGE_CONFIG[badgeType];
                    const Icon = config ? getIcon(config.iconKey) : Medal;
                    const tier = TIER_CONFIG[config?.tier];
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition-all cursor-pointer" onClick={() => { setSelectedHolder(null); setShowBadgeDetail(badgeType); }}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: config?.bgColor }}>
                          <Icon size={24} style={{ color: config?.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-gray-900">{config?.name}</p>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium" style={{ backgroundColor: tier?.bgColor, color: tier?.color }}>{tier?.label}</span>
                          </div>
                          <p className="text-xs text-gray-500">{config?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button onClick={() => setSelectedHolder(null)} className="w-full py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors">Close</button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {showBadgeDetail && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4" onClick={() => setShowBadgeDetail(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="p-6" style={{ backgroundColor: BADGE_CONFIG[showBadgeDetail]?.bgColor }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'white' }}>
                  {(() => {
                    const Icon = getIcon(BADGE_CONFIG[showBadgeDetail]?.iconKey);
                    return <Icon size={32} style={{ color: BADGE_CONFIG[showBadgeDetail]?.color }} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{BADGE_CONFIG[showBadgeDetail]?.name}</h3>
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mt-1" style={{ backgroundColor: TIER_CONFIG[BADGE_CONFIG[showBadgeDetail]?.tier]?.bgColor, color: TIER_CONFIG[BADGE_CONFIG[showBadgeDetail]?.tier]?.color }}>
                    {TIER_CONFIG[BADGE_CONFIG[showBadgeDetail]?.tier]?.label} Tier
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-sm text-gray-600">{BADGE_CONFIG[showBadgeDetail]?.description}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Criteria</h4>
                <p className="text-sm text-gray-600">{BADGE_CONFIG[showBadgeDetail]?.criteria}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Badge Holders</h4>
                <p className="text-2xl font-bold" style={{ color: BADGE_CONFIG[showBadgeDetail]?.color }}>{BADGE_HOLDERS.filter((h) => h.badges.includes(showBadgeDetail)).length}</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end">
              <button onClick={() => setShowBadgeDetail(null)} className="px-5 py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors">Close</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default BadgeShowcase;
