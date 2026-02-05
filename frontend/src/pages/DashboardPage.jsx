import React from 'react'
import { Link } from 'react-router-dom'
import TemporaryStorage from '../utils/TemporaryStorage'
import {
  FiAward,
  FiBell,
  FiBookOpen,
  FiCalendar,
  FiChevronRight,
  FiFileText,
  FiTarget,
  FiUsers,
  FiLayers,
  FiUser,
  FiMapPin,
  FiClock,
  FiHelpCircle,
} from 'react-icons/fi'

// Placeholder data for dashboard previews
const UPCOMING_EVENTS = [
  { id: 1, title: 'Alumni Tech Talk: AI in 2026', date: 'Feb 10', time: '2:00 PM', location: 'Online' },
  { id: 2, title: 'Career Fair – Spring 2026', date: 'Feb 18', time: '10:00 AM', location: 'Main Campus' },
  { id: 3, title: 'Class of 2020 Reunion', date: 'Feb 22', time: '6:00 PM', location: 'Grand Ballroom' },
]

const RECENT_ANNOUNCEMENTS = [
  { id: 1, title: 'Expansion into Southeast Asia', category: 'Company News', date: 'Jan 23' },
  { id: 2, title: 'Updated Workplace Health & Safety Policy', category: 'Policy', date: 'Jan 23' },
  { id: 3, title: 'Tech AI Partnership Announcement', category: 'Partnerships', date: 'Jan 22' },
]

const QUICK_ACTIONS = [
  { label: 'Request a document', to: '/documents', icon: FiFileText },
  { label: 'Find a mentor', to: '/mentorship/mentors', icon: FiLayers },
  { label: 'Browse jobs', to: '/career', icon: FiTarget },
  { label: 'View events', to: '/events', icon: FiCalendar },
]

const QUICK_LINKS = [
  { label: 'Documents & records', to: '/documents', icon: FiFileText, desc: 'Request or view documents' },
  { label: 'Career & jobs', to: '/career', icon: FiTarget, desc: 'Browse opportunities' },
  { label: 'Events', to: '/events', icon: FiCalendar, desc: 'Upcoming events' },
  { label: 'Directory', to: '/directory', icon: FiUsers, desc: 'Connect with alumni' },
  { label: 'Training & certifications', to: '/training', icon: FiBookOpen, desc: 'Learning paths & certs' },
  { label: 'Mentorship', to: '/mentorship', icon: FiLayers, desc: 'Mentors & volunteer programs' },
  { label: 'Announcements', to: '/announcements', icon: FiBell, desc: 'News and updates' },
  { label: 'Achievements', to: '/achievements', icon: FiAward, desc: 'Recognition & badges' },
]

const SIDEBAR_LINKS = [
  { label: 'Profile', to: '/profile', icon: FiUser },
  { label: 'Documents', to: '/documents', icon: FiFileText },
  { label: 'Career', to: '/career', icon: FiTarget },
  { label: 'Events', to: '/events', icon: FiCalendar },
  { label: 'Directory', to: '/directory', icon: FiUsers },
  { label: 'Mentorship', to: '/mentorship', icon: FiLayers },
]

const CARD_CLASS =
  'rounded-xl bg-white border border-[#e6e6e6] shadow-[0_2px_12px_rgba(17,24,39,0.04)]'

const DEFAULT_PROFILE = {
  name: 'Bill Gates',
  position: 'Senior Frontend Developer',
  photo: 'https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
}

function getProfile() {
  const stored = TemporaryStorage.getProfile()
  if (!stored) return DEFAULT_PROFILE
  return {
    name: stored.name ?? DEFAULT_PROFILE.name,
    position: stored.position ?? DEFAULT_PROFILE.position,
    photo: stored.photo ?? DEFAULT_PROFILE.photo,
  }
}

export default function DashboardPage() {
  const profile = getProfile()
  return (
    <div className="flex gap-8 max-w-[1400px]">
      {/* Main content */}
      <div className="flex-1 min-w-0 space-y-8">
        {/* Welcome — warm header band */}
        <div className="rounded-2xl bg-[#faf7f0] border border-[#ebe6dc] py-6 px-6">
          <h1 className="m-0 text-[24px] font-semibold text-[#1f1f1f] tracking-tight">Welcome back</h1>
          <p className="m-0 mt-1.5 text-[15px] text-[#5c5c5c]">
            Here’s what’s happening and quick access to everything you need.
          </p>
          <span className="inline-block mt-3 w-12 h-0.5 bg-accent rounded-full" aria-hidden />
        </div>

        {/* Quick actions — cream icons, accent on hover */}
        <section>
          <h2 className="m-0 mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#777]">
            <span className="border-b-2 border-accent pb-0.5">Quick actions</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_ACTIONS.map(({ label, to, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-4 p-4 ${CARD_CLASS} transition-all duration-200 group hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:-translate-y-0.5`}
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#f5f0e4] text-[#6b5d4f] group-hover:bg-accent group-hover:text-[#2c2c2c] transition-colors">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-[#1f1f1f] group-hover:text-accent-dark transition-colors">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Two columns: Events (warm) + Announcements */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming events — warm card, accent date badges */}
          <section className={`rounded-xl border border-[#e8e4dc] bg-[#faf8f4] p-0 overflow-hidden shadow-sm`}>
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#ebe6dc]">
              <h2 className="m-0 text-base font-semibold text-[#1f1f1f]">Upcoming events</h2>
              <span className="text-[10px] uppercase tracking-widest text-[#8a8278]">This month</span>
            </div>
            <div className="px-2 py-2">
              <ul className="list-none m-0 p-0 space-y-0">
                {UPCOMING_EVENTS.map((event) => (
                  <li key={event.id}>
                    <Link
                      to="/events"
                      className="flex gap-3 px-3 py-3 rounded-md hover:bg-[#f5f1e8] transition-colors group"
                    >
                      <span className="flex-shrink-0 w-9 h-9 rounded-md bg-accent text-[#2c2c2c] text-xs font-semibold flex items-center justify-center tabular-nums">
                        {event.date.split(' ').pop()}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-sm font-medium text-[#1f1f1f] group-hover:underline">
                          {event.title}
                        </span>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5 text-xs text-[#6b6359]">
                          <span className="flex items-center gap-1"><FiClock className="w-3 h-3" /> {event.time}</span>
                          <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" /> {event.location}</span>
                        </div>
                      </div>
                      <FiChevronRight className="w-4 h-4 text-[#b0a898] group-hover:text-accent-dark flex-shrink-0 self-center transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-5 pb-4 pt-0">
              <Link to="/events" className="text-xs font-medium text-accent hover:text-accent-dark transition-colors">
                View all events →
              </Link>
            </div>
          </section>

          {/* Recent announcements — category pills in accent */}
          <section className={`${CARD_CLASS} p-0 overflow-hidden`}>
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#eee]">
              <h2 className="m-0 text-base font-semibold text-[#1f1f1f]">Recent announcements</h2>
              <span className="text-[10px] uppercase tracking-widest text-[#999]">Latest</span>
            </div>
            <div className="px-2 py-2">
              <ul className="list-none m-0 p-0 space-y-0">
                {RECENT_ANNOUNCEMENTS.map((a) => (
                  <li key={a.id}>
                    <Link
                      to="/announcements"
                      className="block px-3 py-3 rounded-md hover:bg-[#faf8f4] transition-colors group"
                    >
                      <span className="block text-sm font-medium text-[#1f1f1f] group-hover:underline">
                        {a.title}
                      </span>
                      <div className="flex items-center gap-2 mt-1 text-xs text-[#777]">
                        <span className="px-2 py-0.5 rounded-md bg-accent/20 text-accent-dark font-medium">
                          {a.category}
                        </span>
                        <span>{a.date}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-5 pb-4 pt-0">
              <Link to="/announcements" className="text-xs font-medium text-accent hover:text-accent-dark transition-colors">
                View all →
              </Link>
            </div>
          </section>
        </div>

        {/* Quick links — cream icons, accent on hover */}
        <section>
          <h2 className="m-0 mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#777]">
            <span className="border-b-2 border-accent pb-0.5">Quick links</span>
          </h2>
          <ul className="list-none m-0 p-0 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map(({ label, to, icon: Icon, desc }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`flex items-center gap-3 p-4 ${CARD_CLASS} transition-all duration-200 group hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:-translate-y-0.5`}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f5f0e4] text-[#6b5d4f] group-hover:bg-accent group-hover:text-[#2c2c2c] transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-[#1f1f1f] group-hover:text-accent-dark transition-colors">{label}</span>
                    <span className="block text-xs text-[#666] mt-0.5 truncate">{desc}</span>
                  </div>
                  <FiChevronRight className="w-4 h-4 text-[#bbb] group-hover:text-accent-dark flex-shrink-0 transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right sidebar — warm + accent links */}
      <aside className="hidden xl:block w-[280px] flex-shrink-0 space-y-5">
        {/* You / Profile — avatar with accent ring */}
        <div className={`${CARD_CLASS} p-5`}>
          <div className="w-12 h-12 rounded-full bg-[#f5f0e4] border-2 border-accent/40 flex items-center justify-center overflow-hidden mb-3">
            {profile?.photo ? (
              <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
            ) : (
              <FiUser className="w-6 h-6 text-[#6b5d4f]" />
            )}
          </div>
          <p className="m-0 text-sm font-semibold text-[#1f1f1f]">{profile?.name ?? 'You'}</p>
          <p className="m-0 mt-0.5 text-xs text-[#666]">{profile?.position ?? 'Alumni member'}</p>
          <Link
            to="/profile"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dark transition-colors"
          >
            View profile <FiChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Jump to — accent on hover */}
        <div className={`${CARD_CLASS} p-4`}>
          <h3 className="m-0 mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#888]">
            Jump to
          </h3>
          <nav className="flex flex-col gap-0.5">
            {SIDEBAR_LINKS.map(({ label, to, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-2.5 py-2 px-2 rounded-md text-sm text-[#444] hover:bg-[#faf8f4] hover:text-accent-dark transition-colors group"
              >
                <Icon className="w-4 h-4 text-[#888] group-hover:text-accent-dark flex-shrink-0 transition-colors" />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Tip — warm callout with accent top edge */}
        <div className="rounded-xl border border-[#e8e4dc] border-t-4 border-t-accent bg-[#faf8f4] p-4">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-widest text-[#8a8278] mb-2">Tip</p>
          <p className="m-0 text-sm text-[#5c5c5c] leading-relaxed">
            Request transcripts or certificates from Documents — usually ready in 3–5 days.
          </p>
        </div>

        {/* Need help — accent link */}
        <div className={`${CARD_CLASS} p-4`}>
          <p className="m-0 text-sm font-semibold text-[#1f1f1f] mb-1">Need help?</p>
          <p className="m-0 text-xs text-[#666] mb-3">
            Check Announcements for updates or Documents for request status.
          </p>
          <Link
            to="/announcements"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-dark transition-colors"
          >
            Announcements <FiChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </aside>
    </div>
  )
}
