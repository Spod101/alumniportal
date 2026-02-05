import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { defaultProfileMockData } from '../utils/profileData';
import TemporaryStorage from '../utils/TemporaryStorage';
import ProfileHeaderCard from '../components/profile/ProfileHeaderCard';
import AboutMeCard from '../components/profile/AboutMeCard';
import ProjectTableCard from '../components/profile/ProjectTableCard';
import MoreDetailsCard from '../components/profile/MoreDetailsCard';
import CareerDocumentsCard from '../components/profile/CareerDocumentsCard';
import EditProfileModal from '../components/profile/EditProfileModal';

const defaultMyProfile = {
  name: 'Bill Gates',
  position: 'Senior Frontend Developer',
  photo: 'https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  about: defaultProfileMockData.about,
  socialMedia: defaultProfileMockData.socialMedia,
  projects: defaultProfileMockData.projects,
  moreDetails: {
    ...defaultProfileMockData.moreDetails,
    email: 'bill.gates@company.com',
    number: '+(23) 123 123 1234',
    languages: 'EN / TL / FR',
    education: 'Computer Science - Harvard',
    skills: 'Python, JavaScript, HTML, PHP, Laravel',
  },
  careerDocuments: [
    { id: 1, name: 'Bill_Gates_Resume.pdf', uploadedBy: 'B' },
  ],
};

function mergeStoredWithDefaults(stored) {
  if (!stored) return defaultMyProfile;
  return {
    name: stored.name ?? defaultMyProfile.name,
    position: stored.position ?? defaultMyProfile.position,
    photo: stored.photo ?? defaultMyProfile.photo,
    about: stored.about ?? defaultMyProfile.about,
    socialMedia: { ...defaultMyProfile.socialMedia, ...stored.socialMedia },
    projects: stored.projects?.length ? stored.projects : defaultMyProfile.projects,
    moreDetails: { ...defaultMyProfile.moreDetails, ...stored.moreDetails },
    careerDocuments: stored.careerDocuments?.length ? stored.careerDocuments : defaultMyProfile.careerDocuments,
  };
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(() =>
    mergeStoredWithDefaults(TemporaryStorage.getProfile())
  );
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleSaveProfile = (saved) => {
    let careerDocuments = profile.careerDocuments;
    if (saved.resumeFile) {
      const initial = profile.name?.charAt(0)?.toUpperCase() || 'U';
      careerDocuments = [
        { id: 1, name: saved.resumeFile.name, uploadedBy: initial, dataUrl: saved.resumeFile.dataUrl },
      ];
    }
    const merged = {
      ...profile,
      name: saved.name,
      position: saved.position,
      photo: saved.photo,
      about: saved.about,
      socialMedia: saved.socialMedia,
      moreDetails: saved.moreDetails,
      projects: profile.projects,
      careerDocuments,
    };
    TemporaryStorage.saveProfile(merged);
    setProfile(merged);
  };

  const editButton = (
    <button
      type="button"
      onClick={() => setEditModalOpen(true)}
      className="px-6 py-2 bg-white text-yellow-600 border-2 border-yellow-600 rounded-full text-sm font-bold hover:bg-yellow-600 hover:text-white transition-all shadow-md"
    >
      Edit Profile
    </button>
  );

  return (
    <div className="flex gap-6 p-6 bg-[#f5f5f0] min-h-screen">
      <div className="flex-1 flex flex-col gap-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors w-fit"
        >
          <FiArrowLeft className="text-xl" />
          <span className="font-semibold text-sm">Back to Dashboard</span>
        </button>

        <ProfileHeaderCard profileData={profile} actionButton={editButton} />
        <AboutMeCard about={profile.about} />
        <ProjectTableCard projects={profile.projects} />
      </div>

      <div className="w-[360px] flex-shrink-0 flex flex-col gap-5">
        <div className="h-6" />
        <MoreDetailsCard moreDetails={profile.moreDetails} />
        <CareerDocumentsCard careerDocuments={profile.careerDocuments} />
      </div>

      <EditProfileModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        initialData={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
