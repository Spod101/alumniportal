import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/DashboardPage'
import DirectoryPage from './pages/directory/DirectoryPage'
import ViewProfile from './pages/directory/ViewProfile'
import TrainingPage from './pages/training/TrainingPage'
import CertificationsPage from './pages/training/CertificationsPage'
import AchievementsPage from './pages/achievements/AchievementsPage'
import EventsPage from './pages/events/EventsPage'
import AnnouncementsPage from './pages/announcements/AnnouncementsPage'
import CompanyNewsPage from './pages/announcements/CompanyNewsPage'
import PolicyChangesPage from './pages/announcements/PolicyChangesPage'
import PartnershipsPage from './pages/announcements/PartnershipsPage'
import AlumniStoriesPage from './pages/announcements/AlumniStoriesPage'
import MentorshipLanding from './pages/mentorship/LandingPage'
import MentorList from './pages/mentorship/MentorList'
import RequestMentorship from './pages/mentorship/RequestMentorship'
import BecomeMentor from './pages/mentorship/BecomeMentor'
import MentorSignUp from './pages/mentorship/MentorSignUp'
import VolunteerPrograms from './pages/mentorship/VolunteerPrograms'
import DocumentsPage from './pages/documents/DocumentsPage'
import DocumentsListPage from './pages/documents/DocumentsListPage'
import DocumentPreviewPage from './pages/documents/DocumentPreviewPage'
import DocumentRequestPage from './pages/documents/DocumentRequestPage'
import ProfilePage from './pages/ProfilePage'
import CareerPage from './pages/career/CareerPage'
import JobApplicationForm from './pages/career/JobApplicationForm'
import Jobdetails from './pages/jobdetails/Jobdetails'
import FeedbackPage from './pages/feedback/FeedbackPage'
import AlumniFeedbackPage from './pages/feedback/AlumniFeedbackPage'
import ProgramEvaluationPage from './pages/feedback/ProgramEvaluationPage'
import ProgramEvaluationSection2 from './pages/feedback/ProgramEvaluationSection2'
import ProgramEvaluationSection3 from './pages/feedback/ProgramEvaluationSection3'
import SuggestionsImprovementPage from './pages/feedback/SuggestionsImprovementPage'
import RecentReviewsPage from './pages/feedback/RecentReviewsPage'

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
        <Route path="/mentorship" element={<MentorshipLanding />} />
        <Route path="/mentorship/mentors" element={<MentorList />} />
        <Route path="/mentorship/request" element={<RequestMentorship />} />
        <Route path="/mentorship/become-mentor" element={<BecomeMentor />} />
        <Route path="/mentorship/signup" element={<MentorSignUp />} />
        <Route path="/mentorship/volunteer" element={<VolunteerPrograms />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/documents/list" element={<DocumentsListPage />} />
        <Route path="/documents/preview" element={<DocumentPreviewPage />} />
        <Route path="/documents/request" element={<DocumentRequestPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/feedback/alumni" element={<AlumniFeedbackPage />} />
        <Route path="/feedback/program-evaluation" element={<ProgramEvaluationPage />} />
        <Route path="/feedback/program-evaluation/section-2" element={<ProgramEvaluationSection2 />} />
        <Route path="/feedback/program-evaluation/section-3" element={<ProgramEvaluationSection3 />} />
        <Route path="/feedback/suggestions" element={<SuggestionsImprovementPage />} />
        <Route path="/feedback/reviews" element={<RecentReviewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/job-application" element={<JobApplicationForm />} />
        <Route path="/career/job-details" element={<Jobdetails />} />
        {/* Backwards-compatible alias for older job details path */}
        <Route path="/jobdetails/Jobdetails" element={<Navigate to="/career/job-details" replace />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </MainLayout>
  )
}
