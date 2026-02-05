// Shared default profile data (about, projects, moreDetails, etc.) for ViewProfile and ProfilePage
export const defaultProfileMockData = {
  about:
    "I'm a technologist and entrepreneur passionate about building products that help people connect and share ideas at a global scale. I co-founded Meta (formerly Facebook) with the mission of bringing the world closer together through technology.\n\nWith a strong focus on innovation, I work on advancing social platforms, virtual and augmented reality, and long-term technologies that redefine how people interact online. I believe in building open systems, thinking long-term, and using technology to create meaningful social impact.",
  socialMedia: {
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  projects: [
    { id: 1, name: 'Unleash', logo: '🚀', link: 'Unleash.PH', industry: 'Pet Care / E-commerce', role: 'Web Developer' },
    { id: 2, name: 'mWell', logo: '💊', link: "mWell: Philippines' First All-In-One Health & Wellness App", industry: 'Health Tech / Telemedicine', role: 'Web Developer / UI Designer' },
    { id: 3, name: 'HELLO ATTY', logo: '⚖️', link: 'Highly Succeed Inc', industry: 'Legal Tech', role: 'Mobile App Developer' },
    { id: 4, name: 'The Bistro Group', logo: '🍽️', link: 'The Bistro Group', industry: 'Food & Beverage', role: 'QA / Test Engineer' },
    { id: 5, name: 'ULPI - Plant AI', logo: '🌱', link: 'Highly Succeed Inc', industry: 'Agriculture', role: 'Database Administrator' },
    { id: 6, name: 'Waste Management System', logo: '♻️', link: 'Highly Succeed Inc', industry: 'Environmental Technology', role: 'QA Engineer' },
  ],
  moreDetails: {
    number: '+(23) 123 123 1234',
    email: 'contact@example.com',
    languages: 'EN / TL / FR',
    education: 'Computer Science – Harvard',
    skills: 'Python, JavaScript, HTML, PHP, Laravel',
  },
  careerDocuments: [
    { id: 1, name: 'Resume.pdf', uploadedBy: 'J' },
  ],
};
