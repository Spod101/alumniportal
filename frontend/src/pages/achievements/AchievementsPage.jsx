import React, { useState } from 'react';
import { ACHIEVEMENT_STATS, ACHIEVEMENT_TABS } from '../../utils/achievementData';
import { ACHIEVEMENT_ICONS } from '../../utils/achievementIcons';
import FeaturedAlumni from '../../components/achievements/FeaturedAlumni';
import BadgeShowcase from '../../components/achievements/BadgeShowcase';
import CompanyAppreciationPosts from '../../components/achievements/CompanyAppreciationPosts';
import AchievementTimeline from '../../components/achievements/AchievementTimeline';

const TrendUp = ACHIEVEMENT_ICONS.trendUp;

function AchievementsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'badges':
        return <BadgeShowcase />;
      case 'featured':
        return <FeaturedAlumni />;
      case 'appreciation':
        return <CompanyAppreciationPosts />;
      default:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACHIEVEMENT_STATS.map((stat, index) => {
                const Icon = ACHIEVEMENT_ICONS[stat.iconKey];
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                        <p className="text-3xl font-bold mt-2" style={{ color: stat.color }}>{stat.value}</p>
                      </div>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: stat.bgColor }}>
                        <Icon size={28} style={{ color: stat.color }} />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <TrendUp size={14} className="text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+12%</span>
                      <span className="ml-1">from last month</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <FeaturedAlumni isCompact />
            <AchievementTimeline />
            <CompanyAppreciationPosts isCompact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] px-5 sm:px-8 lg:px-12 py-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex">
            {ACHIEVEMENT_TABS.map((tab) => {
              const Icon = ACHIEVEMENT_ICONS[tab.iconKey];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab.id ? 'text-[#DAB619] border-[#DAB619] bg-[#DAB619]/5' : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

export default AchievementsPage;
