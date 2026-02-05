import React, { useState } from 'react';
import { RECENT_ACHIEVEMENTS, ACHIEVEMENT_TYPE_CONFIG } from '../../utils/dummyData';
import { ACHIEVEMENT_ICONS } from '../../utils/achievementIcons';

const Clock = ACHIEVEMENT_ICONS.clock;
const Medal = ACHIEVEMENT_ICONS.medal;
const ArrowRight = ACHIEVEMENT_ICONS.arrowRight;
const Confetti = ACHIEVEMENT_ICONS.confetti;

function AchievementTimeline() {
  const [filter, setFilter] = useState('all');

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredAchievements = filter === 'all' ? RECENT_ACHIEVEMENTS : RECENT_ACHIEVEMENTS.filter((a) => a.type === filter);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-[#DAB619]" />
            <h3 className="font-semibold text-gray-900">Recent Achievements</h3>
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white">
            <option value="all">All Types</option>
            <option value="badge_earned">Badges</option>
            <option value="featured">Featured</option>
            <option value="hall_of_fame">Hall of Fame</option>
            <option value="appreciation">Appreciation</option>
            <option value="milestone">Milestones</option>
          </select>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100" />
          <div className="space-y-4">
            {filteredAchievements.map((achievement) => {
              const typeConfig = ACHIEVEMENT_TYPE_CONFIG[achievement.type];
              const TypeIcon = typeConfig ? ACHIEVEMENT_ICONS[typeConfig.iconKey] || Medal : Medal;
              const BadgeIcon = achievement.badgeIconKey ? ACHIEVEMENT_ICONS[achievement.badgeIconKey] : null;
              return (
                <div key={achievement.id} className="relative flex gap-4 group">
                  <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-2 border-white group-hover:scale-110 transition-transform" style={{ backgroundColor: typeConfig?.bgColor }}>
                    {achievement.type === 'badge_earned' && BadgeIcon ? (
                      <BadgeIcon size={18} style={{ color: achievement.badgeColor }} />
                    ) : (
                      <TypeIcon size={18} style={{ color: typeConfig?.color }} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group-hover:shadow-sm">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-gray-900 text-sm">{achievement.user}</span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ color: typeConfig?.color, backgroundColor: typeConfig?.bgColor }}>
                              {typeConfig?.label}
                            </span>
                          </div>
                          {achievement.type === 'badge_earned' && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="text-xs text-gray-500">Earned:</span>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border" style={{ color: achievement.badgeColor, backgroundColor: achievement.badgeBgColor, borderColor: achievement.badgeColor }}>
                                {BadgeIcon && <BadgeIcon size={10} />} {achievement.badge}
                              </span>
                            </div>
                          )}
                          {achievement.type === 'appreciation' && (
                            <p className="text-xs text-gray-500 mt-1">From: <span className="font-medium">{achievement.company}</span></p>
                          )}
                          {achievement.type === 'milestone' && (
                            <div className="flex items-center gap-1 mt-1">
                              <Confetti size={14} className="text-[#DAB619]" />
                              <span className="text-xs font-medium text-[#DAB619]">{achievement.milestone}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{formatTimeAgo(achievement.timestamp)}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
        <button className="w-full flex items-center justify-center gap-1 text-sm text-[#DAB619] font-medium hover:underline">
          View All Achievements
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default AchievementTimeline;
