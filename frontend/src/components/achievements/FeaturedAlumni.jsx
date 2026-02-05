import React, { useState } from 'react';
import { FEATURED_ALUMNI, BADGE_COLORS } from '../../utils/dummyData';
import { ACHIEVEMENT_ICONS } from '../../utils/achievementIcons';

const Crown = ACHIEVEMENT_ICONS.crown;
const Star = ACHIEVEMENT_ICONS.star;
const Quotes = ACHIEVEMENT_ICONS.quotes;
const LinkedinLogo = ACHIEVEMENT_ICONS.linkedin;
const EnvelopeSimple = ACHIEVEMENT_ICONS.mail;
const CalendarBlank = ACHIEVEMENT_ICONS.calendar;
const Briefcase = ACHIEVEMENT_ICONS.briefcase;
const MapPin = ACHIEVEMENT_ICONS.mapPin;
const CaretLeft = ACHIEVEMENT_ICONS.caretLeft;
const CaretRight = ACHIEVEMENT_ICONS.caretRight;
const Sparkle = ACHIEVEMENT_ICONS.sparkle;
const Heart = ACHIEVEMENT_ICONS.heart;
const ShareNetwork = ACHIEVEMENT_ICONS.share;
const Medal = ACHIEVEMENT_ICONS.medal;
const Trophy = ACHIEVEMENT_ICONS.trophy;

function FeaturedAlumni({ isCompact = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});

  const currentAlumni = FEATURED_ALUMNI[currentIndex];

  const nextAlumni = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_ALUMNI.length);
  };

  const prevAlumni = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_ALUMNI.length) % FEATURED_ALUMNI.length);
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (isCompact) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#DAB619] to-[#c4a015] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown size={24} className="text-white" />
              <div>
                <h3 className="text-lg font-semibold text-white">Alumni of the Month</h3>
                <p className="text-white/80 text-sm">{currentAlumni.month}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={prevAlumni} className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
                <CaretLeft size={16} />
              </button>
              <button onClick={nextAlumni} className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
                <CaretRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {currentAlumni.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#DAB619] rounded-full flex items-center justify-center shadow-md">
                <Crown size={16} className="text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-gray-900 truncate">{currentAlumni.name}</h4>
              <p className="text-sm text-[#DAB619] font-medium">{currentAlumni.currentRole}</p>
              <p className="text-sm text-gray-500">{currentAlumni.currentCompany}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {currentAlumni.badges.slice(0, 3).map((badge, idx) => {
                  const colors = BADGE_COLORS[badge] || { color: '#6B7280', bgColor: '#F3F4F6' };
                  return (
                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ color: colors.color, backgroundColor: colors.bgColor }}>
                      <Medal size={10} /> {badge}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#DAB619]">
            <Quotes size={20} className="text-[#DAB619] mb-2" />
            <p className="text-sm text-gray-600 italic line-clamp-2">&quot;{currentAlumni.quote}&quot;</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-xl font-bold text-[#DAB619]">{currentAlumni.stats.connections.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Connections</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#DAB619]">{currentAlumni.stats.endorsements}</p>
              <p className="text-xs text-gray-500">Endorsements</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#DAB619]">{currentAlumni.stats.mentees}</p>
              <p className="text-xs text-gray-500">Mentees</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Crown size={24} className="text-[#DAB619]" /> Featured Alumni of the Month
            </h2>
            <p className="text-sm text-gray-500 mt-1">Celebrating outstanding alumni who inspire our community</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">{currentIndex + 1} of {FEATURED_ALUMNI.length}</span>
            <button onClick={prevAlumni} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
              <CaretLeft size={20} />
            </button>
            <button onClick={nextAlumni} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
              <CaretRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-[#DAB619] via-[#c4a015] to-[#b89c14]">
          <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm flex items-center gap-2">
            <CalendarBlank size={16} /> {currentAlumni.month}
          </div>
          <Sparkle size={40} className="absolute top-8 left-8 text-white/30" />
          <Star size={32} className="absolute bottom-8 right-32 text-white/20" />
          <Trophy size={48} className="absolute bottom-4 left-1/4 text-white/20" />
        </div>
        <div className="relative px-8 pb-8">
          <div className="absolute -top-16 left-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#DAB619] to-[#8B7000] flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white">
                {currentAlumni.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#DAB619] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <Crown size={24} className="text-white" />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button onClick={() => toggleLike(currentAlumni.id)} className={`p-2.5 rounded-lg transition-all ${liked[currentAlumni.id] ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
              <Heart size={20} className={liked[currentAlumni.id] ? 'fill-current' : ''} />
            </button>
            <button className="p-2.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
              <ShareNetwork size={20} />
            </button>
            <a href={currentAlumni.socialLinks.linkedin} className="p-2.5 rounded-lg bg-[#0077B5] text-white hover:bg-[#006097] transition-colors">
              <LinkedinLogo size={20} />
            </a>
            <a href={`mailto:${currentAlumni.socialLinks.email}`} className="p-2.5 rounded-lg bg-[#DAB619] text-white hover:bg-[#c4a015] transition-colors">
              <EnvelopeSimple size={20} />
            </a>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900">{currentAlumni.name}</h3>
            <p className="text-lg text-[#DAB619] font-semibold mt-1">{currentAlumni.currentRole}</p>
            <p className="text-gray-600">{currentAlumni.currentCompany}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-full">
                <Briefcase size={16} className="text-[#DAB619]" /> {currentAlumni.hsiRole} ({currentAlumni.hsiTenure})
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-gray-400" /> {currentAlumni.location}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {currentAlumni.badges.map((badge, idx) => {
                const colors = BADGE_COLORS[badge] || { color: '#6B7280', bgColor: '#F3F4F6' };
                return (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:shadow-sm" style={{ color: colors.color, backgroundColor: colors.bgColor, borderColor: colors.color }}>
                    <Medal size={14} /> {badge}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-6 p-6 bg-gradient-to-r from-[#FFF8E1] to-[#FFFDE7] rounded-xl border-l-4 border-[#DAB619]">
            <Quotes size={32} className="text-[#DAB619] mb-3" />
            <p className="text-gray-700 text-lg italic leading-relaxed">&quot;{currentAlumni.quote}&quot;</p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Trophy size={20} className="text-[#DAB619]" /> Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentAlumni.achievements.map((achievement, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#DAB619]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAB619]/20 transition-colors">
                      <Star size={16} className="text-[#DAB619]" />
                    </div>
                    <p className="text-sm text-gray-700">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#DAB619]">{currentAlumni.stats.connections.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">Network Connections</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#DAB619]">{currentAlumni.stats.endorsements}</p>
              <p className="text-sm text-gray-500 mt-1">Skill Endorsements</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#DAB619]">{currentAlumni.stats.mentees}</p>
              <p className="text-sm text-gray-500 mt-1">Mentees Guided</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Previous Featured Alumni</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURED_ALUMNI.map((alumni, idx) => (
            <button key={alumni.id} onClick={() => setCurrentIndex(idx)} className={`p-4 rounded-xl border-2 text-left transition-all ${idx === currentIndex ? 'border-[#DAB619] bg-[#DAB619]/5' : 'border-gray-100 hover:border-[#DAB619]/30 hover:shadow-sm'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold">
                  {alumni.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{alumni.name}</p>
                  <p className="text-xs text-gray-500">{alumni.month}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedAlumni;
