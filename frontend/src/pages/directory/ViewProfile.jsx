import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useChat } from '../../components/chat/ChatContext';
import { defaultProfileMockData } from '../../utils/dummyData';
import ProfileHeaderCard from '../../components/profile/ProfileHeaderCard';
import AboutMeCard from '../../components/profile/AboutMeCard';
import ProjectTableCard from '../../components/profile/ProjectTableCard';
import MoreDetailsCard from '../../components/profile/MoreDetailsCard';
import CareerDocumentsCard from '../../components/profile/CareerDocumentsCard';

export default function ViewProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openChat } = useChat();
  const employeeData = location.state?.employee;

  const profileData = {
    name: employeeData?.name || 'Unknown Employee',
    position: employeeData?.position || 'Position Not Specified',
    photo: employeeData?.photo || "https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    about: defaultProfileMockData.about,
    socialMedia: defaultProfileMockData.socialMedia,
    projects: defaultProfileMockData.projects,
    moreDetails: {
      ...defaultProfileMockData.moreDetails,
      email: employeeData?.name ? `${employeeData.name.toLowerCase().replace(/\s+/g, '.')}@company.com` : defaultProfileMockData.moreDetails.email,
      skills: employeeData?.skills?.join(', ') || defaultProfileMockData.moreDetails.skills,
    },
    careerDocuments: [
      {
        id: 1,
        name: employeeData?.name ? `${employeeData.name.replace(/\s+/g, '_')}_Resume.pdf` : defaultProfileMockData.careerDocuments[0].name,
        uploadedBy: employeeData?.name ? employeeData.name.charAt(0).toUpperCase() : 'J',
      },
    ],
  };

  const connectButton = (
    <button
      onClick={() => openChat(profileData)}
      className="px-6 py-2 bg-white text-yellow-600 border-2 border-yellow-600 rounded-full text-sm font-bold hover:bg-yellow-600 hover:text-white transition-all shadow-md"
    >
      Connect
    </button>
  );

  return (
    <div className="flex gap-6 p-6 bg-[#f5f5f0] min-h-screen">
      <div className="flex-1 flex flex-col gap-6">
        <button
          onClick={() => navigate('/directory')}
          className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors w-fit"
        >
          <FiArrowLeft className="text-xl" />
          <span className="font-semibold text-sm">Back to Directory</span>
        </button>

        <ProfileHeaderCard profileData={profileData} actionButton={connectButton} />
        <AboutMeCard about={profileData.about} />
        <ProjectTableCard projects={profileData.projects} />
      </div>

      <div className="w-[360px] flex-shrink-0 flex flex-col gap-5">
        <div className="h-6" />
        <MoreDetailsCard moreDetails={profileData.moreDetails} />
        <CareerDocumentsCard careerDocuments={profileData.careerDocuments} />
      </div>
    </div>
  );
}
