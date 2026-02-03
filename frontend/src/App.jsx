import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/DashboardPage'
import DirectoryPage from './pages/directory/DirectoryPage'
import ViewProfile from './pages/directory/ViewProfile'
import TrainingPage from './pages/training/TrainingPage'
import CertificationsPage from './pages/training/CertificationsPage'
import AchievementsPage from './pages/achievements/AchievementsPage'
import EventsPage from './pages/EventsPage'
import AnnouncementsPage from './pages/announcements/AnnouncementsPage'
import CompanyNewsPage from './pages/announcements/CompanyNewsPage'
import PolicyChangesPage from './pages/announcements/PolicyChangesPage'
import PartnershipsPage from './pages/announcements/PartnershipsPage'
import AlumniStoriesPage from './pages/announcements/AlumniStoriesPage'
import MentorshipPage from './pages/MentorshipPage'
import DocumentsPage from './pages/DocumentsPage'
import ProfilePage from './pages/ProfilePage'
import CareerPage from './pages/career/CareerPage'
import JobApplicationForm from './pages/career/JobApplicationForm'
import Jobdetails from './pages/jobdetails/Jobdetails'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/directory/view-profile" element={<ViewProfile />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training/certifications" element={<CertificationsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/company-news" element={<CompanyNewsPage />} />
        <Route path="/announcements/policy-changes" element={<PolicyChangesPage />} />
        <Route path="/announcements/partnerships" element={<PartnershipsPage />} />
        <Route path="/announcements/alumni-stories" element={<AlumniStoriesPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/job-application" element={<JobApplicationForm />} />
        <Route path="/career/job-details" element={<Jobdetails />} />
        {/* Backwards-compatible alias for older job details path */}
        <Route path="/jobdetails/Jobdetails" element={<Navigate to="/career/job-details" replace />} />
        <Route path="/" element={<Navigate to="/directory" replace />} />
        <Route path="*" element={<Navigate to="/directory" replace />} />
      </Routes>
    </MainLayout>
  )
}
