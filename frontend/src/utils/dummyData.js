// =============================================================================
// PROFILE DATA
// =============================================================================

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

// =============================================================================
// DIRECTORY DATA
// =============================================================================

export const EMPLOYEE_PHOTO_URL =
  'https://tse4.mm.bing.net/th/id/OIP.l96pfbLLzrd2hc-WZhDdtAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3';

export const DIRECTORY_EMPLOYEES = [
  { id: 1, position: 'Senior Frontend Developer', name: 'Bill Gates', department: 'Web Development Department', credentials: ['Best Portfolio Website – Regional Web Creators Summit 2024', 'Outstanding Frontend Developer Award – DevConnect Conference'], skills: ['Python', 'JavaScript', 'HTML', 'PHP', 'Laravel'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'developer', tags: ['leadership', 'mentor'] },
  { id: 2, position: 'Senior Backend Engineer', name: 'Satya Nadella', department: 'Cloud Services Department', credentials: ['Azure Cloud Excellence Award 2024', 'Most Scalable System Architecture 2023'], skills: ['C#', '.NET', 'Azure', 'SQL', 'Docker'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['leadership', 'innovator'] },
  { id: 3, position: 'UX/UI Designer', name: 'Evan You', department: 'Product Design Department', credentials: ['Best User Interface Award 2024', 'Design Innovation Recognition'], skills: ['Figma', 'Adobe XD', 'Vue.js', 'CSS', 'Illustrator'], photo: EMPLOYEE_PHOTO_URL, status: 'remote', role: 'designer', tags: ['innovator', 'collaborator'] },
  { id: 4, position: 'DevOps Engineer', name: 'Sarah Connor', department: 'Infrastructure Department', credentials: ['Infrastructure Automation Excellence 2024', 'Zero Downtime Achievement'], skills: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['collaborator', 'innovator'] },
  { id: 5, position: 'Data Scientist', name: 'Andrew Ng', department: 'AI Research Department', credentials: ['Machine Learning Breakthrough Award', 'AI Research Paper of the Year'], skills: ['Python', 'TensorFlow', 'PyTorch', 'R', 'SQL'], photo: EMPLOYEE_PHOTO_URL, status: 'on-leave', role: 'engineer', tags: ['mentor', 'leadership'] },
  { id: 6, position: 'Product Manager', name: 'Sheryl Sandberg', department: 'Product Management Department', credentials: ['Product Launch Excellence Award', 'User Growth Achievement'], skills: ['Agile', 'JIRA', 'SQL', 'Analytics', 'Strategy'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'manager', tags: ['leadership', 'collaborator'] },
  { id: 7, position: 'Mobile App Developer', name: 'Tim Cook', department: 'Mobile Development Department', credentials: ['Best Mobile App 2024', 'iOS Development Excellence Award'], skills: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'XCode'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'developer', tags: ['innovator', 'collaborator'] },
  { id: 8, position: 'Security Analyst', name: 'Kevin Mitnick', department: 'Cybersecurity Department', credentials: ['Security Excellence Award 2024', 'Zero Vulnerability Detection'], skills: ['Penetration Testing', 'Network Security', 'SIEM', 'Cryptography', 'Firewalls'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['innovator'] },
  { id: 9, position: 'Database Administrator', name: 'Michael Stonebraker', department: 'Data Management Department', credentials: ['Database Optimization Award 2024', 'Data Integrity Excellence'], skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['mentor'] },
  { id: 10, position: 'QA Automation Engineer', name: 'James Bach', department: 'Quality Assurance Department', credentials: ['Quality Excellence Award 2024', 'Zero Production Bugs 2023'], skills: ['Selenium', 'Cypress', 'Jest', 'TestRail', 'JIRA'], photo: EMPLOYEE_PHOTO_URL, status: 'remote', role: 'engineer', tags: ['collaborator', 'innovator'] },
  { id: 11, position: 'Business Analyst', name: 'Indra Nooyi', department: 'Business Operations Department', credentials: ['Business Process Improvement Award', 'Stakeholder Satisfaction Excellence'], skills: ['Business Analysis', 'Process Mapping', 'SQL', 'Tableau', 'Power BI'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'manager', tags: ['leadership', 'collaborator'] },
  { id: 12, position: 'Technical Writer', name: 'Ann Handley', department: 'Documentation Department', credentials: ['Best Technical Documentation 2024', 'Clarity and Precision Award'], skills: ['Technical Writing', 'Markdown', 'Git', 'Documentation', 'API Docs'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'designer', tags: ['collaborator'] },
  { id: 13, position: 'Full Stack Developer', name: 'Guido van Rossum', department: 'Web Development Department', credentials: ['Full Stack Excellence Award 2024', 'Python Contribution Recognition'], skills: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'developer', tags: ['innovator', 'mentor'] },
  { id: 14, position: 'Cloud Architect', name: 'Werner Vogels', department: 'Cloud Services Department', credentials: ['Cloud Architecture Excellence', 'Scalability Design Award'], skills: ['AWS', 'Terraform', 'Kubernetes', 'Microservices', 'CI/CD'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['leadership', 'innovator'] },
  { id: 15, position: 'Scrum Master', name: 'Jeff Sutherland', department: 'Agile Department', credentials: ['Scrum Implementation Excellence', 'Team Productivity Award'], skills: ['Scrum', 'Agile', 'JIRA', 'Team Leadership', 'Retrospectives'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'manager', tags: ['leadership', 'collaborator'] },
  { id: 16, position: 'Machine Learning Engineer', name: 'Yoshua Bengio', department: 'AI Research Department', credentials: ['ML Innovation Award 2024', 'Research Paper of the Year'], skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Data Science'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['innovator', 'mentor'] },
  { id: 17, position: 'IT Support Specialist', name: 'Kevin Systrom', department: 'IT Support Department', credentials: ['Customer Satisfaction Award', 'Fast Resolution Excellence'], skills: ['Helpdesk', 'Networking', 'Hardware', 'Windows/Mac', 'Ticketing'], photo: EMPLOYEE_PHOTO_URL, status: 'inactive', role: 'engineer', tags: ['collaborator'] },
  { id: 18, position: 'Sales Engineer', name: 'Marc Benioff', department: 'Sales Department', credentials: ['Top Sales Performance 2024', 'Technical Sales Excellence'], skills: ['Sales', 'CRM', 'Technical Demos', 'Product Knowledge', 'Negotiation'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'manager', tags: ['leadership'] },
  { id: 19, position: 'Content Strategist', name: 'Seth Godin', department: 'Marketing Department', credentials: ['Content Strategy Award 2024', 'Best Marketing Campaign'], skills: ['Content Strategy', 'SEO', 'Social Media', 'Copywriting', 'Analytics'], photo: EMPLOYEE_PHOTO_URL, status: 'remote', role: 'designer', tags: ['innovator'] },
  { id: 20, position: 'Systems Administrator', name: 'Linus Torvalds', department: 'Infrastructure Department', credentials: ['Systems Excellence Award', 'Infrastructure Reliability'], skills: ['Linux', 'Bash', 'Networking', 'Virtualization', 'Monitoring'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'engineer', tags: ['innovator', 'mentor'] },
  { id: 21, position: 'Product Designer', name: 'Jony Ive', department: 'Product Design Department', credentials: ['Design Excellence Award 2024', 'User Experience Innovation'], skills: ['Figma', 'Sketch', 'Prototyping', 'User Research', 'UI/UX'], photo: EMPLOYEE_PHOTO_URL, status: 'inactive', role: 'designer', tags: ['innovator', 'collaborator'] },
  { id: 22, position: 'Data Engineer', name: 'DJ Patil', department: 'Data Management Department', credentials: ['Data Engineering Excellence', 'ETL Pipeline Innovation'], skills: ['Python', 'Spark', 'Airflow', 'SQL', 'Data Warehousing'], photo: EMPLOYEE_PHOTO_URL, status: 'inactive', role: 'engineer', tags: ['innovator'] },
  { id: 23, position: 'HR Technology Specialist', name: 'Reid Hoffman', department: 'HR Department', credentials: ['HR Tech Implementation Award', 'Employee Experience Innovation'], skills: ['HRIS', 'Workday', 'Recruitment Systems', 'Analytics', 'Automation'], photo: EMPLOYEE_PHOTO_URL, status: 'inactive', role: 'manager', tags: ['collaborator'] },
  { id: 24, position: 'Blockchain Developer', name: 'Vitalik Buterin', department: 'Emerging Technologies Department', credentials: ['Blockchain Innovation Award', 'Smart Contract Excellence'], skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Cryptography'], photo: EMPLOYEE_PHOTO_URL, status: 'active', role: 'developer', tags: ['innovator'] },
];

// =============================================================================
// TRAINING DATA
// =============================================================================

export const TRAINING_COURSES = [
  { id: 1, title: 'HTML & CSS Mastery 2025 - Build Modern Websites', description: 'Master modern HTML5 and CSS3 from scratch. Build responsive, accessible websites with Flexbox, Grid, and animations.', category: 'Programming', duration: '3 Months', skill: 'HTML/CSS', department: 'Engineering', role: 'Frontend Developer', instructor: { name: 'Lira Johnson', avatar: 'https://i.pravatar.cc/150?img=1' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg', platform: 'Udemy', url: 'https://www.udemy.com/course/html-css-mastery-2025/' },
  { id: 2, title: 'AWS Cloud Practitioner Essentials', description: 'Learn AWS fundamentals including EC2, S3, and RDS. Prepare for the AWS Certified Cloud Practitioner exam.', category: 'Cloud', duration: '2 Months', skill: 'AWS', department: 'Engineering', role: 'Cloud Architect', instructor: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=5' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', platform: 'IBM SkillsBuild', url: 'https://skillsbuild.org/' },
  { id: 3, title: 'React.js Fundamentals - Complete Guide', description: 'Master React hooks, components, and state management. Build modern single-page applications from scratch.', category: 'Programming', duration: '4 Months', skill: 'React', department: 'Engineering', role: 'Full Stack Developer', instructor: { name: 'Mike Ross', avatar: 'https://i.pravatar.cc/150?img=8' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg', platform: 'Udemy', url: 'https://www.udemy.com/' },
  { id: 4, title: 'Azure Fundamentals AZ-900', description: 'Microsoft Azure basics including cloud concepts, core services, security, privacy, compliance, and pricing.', category: 'Cloud', duration: '3 Months', skill: 'Azure', department: 'IT', role: 'Cloud Engineer', instructor: { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=9' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', platform: 'Microsoft Learning', url: 'https://learn.microsoft.com/training/' },
  { id: 5, title: 'Leadership and Management Essentials', description: 'Develop critical leadership skills, team management, and strategic thinking for modern business environments.', category: 'Management', duration: '2 Months', skill: 'Leadership', department: 'Operations', role: 'Manager', instructor: { name: 'Robert Wilson', avatar: 'https://i.pravatar.cc/150?img=11' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', platform: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/' },
  { id: 6, title: 'Python for Data Science', description: 'Learn Python programming with focus on data analysis, Pandas, NumPy, and data visualization techniques.', category: 'Data Science', duration: '3 Months', skill: 'Python', department: 'Analytics', role: 'Data Scientist', instructor: { name: 'Alex Turner', avatar: 'https://i.pravatar.cc/150?img=12' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg', platform: 'Udemy', url: 'https://www.udemy.com/' },
  { id: 7, title: 'Cybersecurity Fundamentals', description: "IBM's comprehensive cybersecurity course covering network security, threats, and protection strategies.", category: 'Security', duration: '4 Months', skill: 'Cybersecurity', department: 'IT', role: 'Security Analyst', instructor: { name: 'Lisa Park', avatar: 'https://i.pravatar.cc/150?img=15' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', platform: 'IBM SkillsBuild', url: 'https://skillsbuild.org/' },
  { id: 8, title: 'Power Platform Fundamentals', description: 'Microsoft Power Apps, Power Automate, and Power BI basics for business process automation.', category: 'Low-Code', duration: '2 Months', skill: 'Power Platform', department: 'Operations', role: 'Business Analyst', instructor: { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=3' }, price: 0, image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', platform: 'Microsoft Learning', url: 'https://learn.microsoft.com/training/' },
];

export const TRAINING_PLATFORMS = [
  { name: 'Microsoft Learning', href: 'https://learn.microsoft.com/training/', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Udemy', href: 'https://www.udemy.com/', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg' },
  { name: 'LinkedIn Learning', href: 'https://www.linkedin.com/learning/', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
  { name: 'IBM SkillsBuild', href: 'https://skillsbuild.org/', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

export const TRAINING_ITEMS_PER_PAGE = 6;

// =============================================================================
// CERTIFICATION DATA
// =============================================================================

export const CONTINUE_CERTIFICATIONS = [
  { id: 1, title: 'AWS Certified Solutions Architect', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', instructor: { name: 'Lira', avatar: 'https://i.pravatar.cc/150?img=1' }, status: 'Live', progress: 3, totalLessons: 7, link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
  { id: 2, title: 'AWS Certified Solutions Architect', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', instructor: { name: 'John', avatar: 'https://i.pravatar.cc/150?img=2' }, status: 'Live', progress: 7, totalLessons: 7, link: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/' },
  { id: 3, title: 'AWS Certified Solutions Architect', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', instructor: { name: 'Sara', avatar: 'https://i.pravatar.cc/150?img=3' }, status: 'Live', progress: 1, totalLessons: 7, link: 'https://aws.amazon.com/certification/certified-developer-associate/' },
  { id: 4, title: 'AWS Certified Solutions Architect', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', instructor: { name: 'Mike', avatar: 'https://i.pravatar.cc/150?img=4' }, status: 'Live', progress: 7, totalLessons: 7, link: 'https://aws.amazon.com/certification/certified-sysops-admin-associate/' },
  { id: 5, title: 'AWS Certified Solutions Architect', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', instructor: { name: 'Emma', avatar: 'https://i.pravatar.cc/150?img=5' }, status: 'Live', progress: 2, totalLessons: 7, link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
  { id: 6, title: 'AWS Certified Solutions Architect', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop', instructor: { name: 'David', avatar: 'https://i.pravatar.cc/150?img=6' }, status: 'Live', progress: 6, totalLessons: 7, link: 'https://aws.amazon.com/certification/certified-security-specialty/' },
];

export const MY_CERTIFICATES = [
  { id: 1, name: 'Cloud Architect', title: 'AWS Certified Solutions Architect', holderName: 'Enter Name Here', issuer: 'Amazon Web Services', issueDate: 'Jul 2023', expiryDate: 'Present', description: 'Lorem ipsum dolor sit amet of cloud computing and architecture fundamentals with AWS certification.', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
  { id: 2, name: 'DevOps Engineer', title: 'AWS Certified DevOps Engineer', holderName: 'Enter Name Here', issuer: 'Amazon Web Services', issueDate: 'Aug 2023', expiryDate: 'Present', description: 'Lorem ipsum dolor sit amet of deployment and operations on AWS infrastructure with hands-on experience.', link: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/' },
  { id: 3, name: 'Data Engineer', title: 'AWS Certified Data Engineer', holderName: 'Enter Name Here', issuer: 'Amazon Web Services', issueDate: 'Sep 2023', expiryDate: 'Present', description: 'Lorem ipsum dolor sit amet of data pipeline development and analytics with AWS specialized tools.', link: 'https://aws.amazon.com/certification/' },
  { id: 4, name: 'Cloud Architect', title: 'AWS Certified Solutions Architect', holderName: 'Enter Name Here', issuer: 'Amazon Web Services', issueDate: 'Jul 2022', expiryDate: 'Present', description: 'Lorem ipsum dolor sit amet of cloud architecture design patterns and best practices with AWS.', link: 'https://aws.amazon.com/certification/' },
  { id: 5, name: 'Security Engineer', title: 'AWS Certified Security Specialist', holderName: 'Enter Name Here', issuer: 'Amazon Web Services', issueDate: 'Jun 2023', expiryDate: 'Present', description: 'Lorem ipsum dolor sit amet of security principles and implementation on the AWS platform.', link: 'https://aws.amazon.com/certification/' },
  { id: 6, name: 'Solutions Architect', title: 'AWS Certified Solutions Architect', holderName: 'Enter Name Here', issuer: 'Amazon Web Services', issueDate: 'May 2023', expiryDate: 'Present', description: 'Lorem ipsum dolor sit amet of designing distributed systems and scalable architectures on AWS.', link: 'https://aws.amazon.com/certification/' },
];

// =============================================================================
// DOCUMENTS DATA
// =============================================================================

export const DOCUMENTS_SEED = [
  { id: 1, name: "Professional_Experience_Summary.pdf", size: "7.1 MB", date: "1 day ago", star: false, category: "Document" },
  { id: 2, name: "Employment_Verification_Letter.pdf", size: "6.8 MB", date: "13 days ago", star: false, category: "Document" },
  { id: 3, name: "Program_Completion_Record_MZ.pdf", size: "4.9 MB", date: "1 day ago", star: false, category: "Document" },
  { id: 4, name: "Outstanding_Performance_Certificate.pdf", size: "4.4 MB", date: "1 week ago", star: true, category: "Certificate" },
  { id: 5, name: "WebDev_Cert_MZ.pdf", size: "1.8 MB", date: "1 day ago", star: true, category: "Certificate" },
  { id: 6, name: "Cybersec_Cert_MZ.pdf", size: "2.9 MB", date: "2 days ago", star: true, category: "Certificate" },
  { id: 7, name: "Community_Cert_MZ.pdf", size: "3.6 MB", date: "3 days ago", star: true, category: "Certificate" },
  { id: 8, name: "Service_Record_MZ.pdf", size: "3.4 MB", date: "2 days ago", star: false, category: "Document" },
  { id: 9, name: "Performance_Report_MZ.pdf", size: "2.4 MB", date: "2 days ago", star: false, category: "Document" },
  { id: 10, name: "Internship_Cert_MZ.pdf", size: "2.1 MB", date: "6 days ago", star: true, category: "Certificate" },
  { id: 11, name: "Professional_Endorsement_Letter_MZ.pdf", size: "4.0 MB", date: "2 weeks ago", star: false, category: "Document" },
  { id: 12, name: "Training_Record_2026.pdf", size: "1.2 MB", date: "3 weeks ago", star: false, category: "Document" },
];

export const RECENT_DOCUMENTS_SEED = [
  { id: 101, name: "Mark_Zuckerberg_Resume.pdf", size: "3.8 MB", date: "1 hour ago" },
  { id: 102, name: "Mark_Zuckerberg_Certificate.pdf", size: "1.5 MB", date: "1 day ago" },
  { id: 103, name: "Mark_Zuckerberg_OJT.pdf", size: "5.5 MB", date: "2 days ago" },
];

export const DOCUMENT_REQUESTS = [
  { id: 1, title: "Employment Verification Letter", status: "Pending" },
  { id: 2, title: "Employment Verification Letter", status: "Pending" },
  { id: 3, title: "Employment Verification Letter", status: "Pending" },
  { id: 4, title: "Employment Verification Letter", status: "Pending" },
  { id: 5, title: "Employment Verification Letter", status: "Approved" },
];

export const DOCUMENTS_MASTERLIST = [
  { id: 1, name: "Professional_Experience_Summary.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 2, name: "Outstanding_Performance_Certificate.pdf", category: "Certificate", uploadDate: "Jan 23, 2026" },
  { id: 3, name: "Employment_Verification_Letter.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 4, name: "Program_Completion_Record_MZ.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 5, name: "Cybersec_Cert_MZ.pdf", category: "Certificate", uploadDate: "Jan 23, 2026" },
  { id: 6, name: "Training_Record_2026.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 7, name: "Community_Cert_MZ.pdf", category: "Certificate", uploadDate: "Jan 23, 2026" },
];

export const DOCUMENT_TYPES = [
  "0-01 Onboarding Certificate",
  "0-02 Employment Contract",
  "0-03 Job Offer Letter",
  "0-04 Certificate of Employment",
  "0-05 Training Completion Certificate",
  "0-06 Internship Completion Certificate",
  "0-07 Promotion Notice",
  "0-08 Termination Notice",
  "0-09 Clearance Certificate",
  "0-10 NDA / Confidentiality Agreement",
];

export const DEPARTMENTS = [
  "Unleash E-commerce and Marketing Department",
  "System Administration Department",
  "Graphics Design Department",
  "Web Development Department",
  "QA Department",
];

export const PRIMARY_REQUESTS = [
  "Employment Application",
  "Onboarding Requirements Submission",
  "Document Request",
  "Contract Signing",
];

export const DELIVERY_OPTIONS = [
  "Digital Copy (Email - PDF)",
  "Digital Copy (Portal Download)",
  "Printed Copy (Office Pickup)",
  "Both Digital and Printed Copy",
];

// =============================================================================
// ACHIEVEMENT DATA
// =============================================================================

export const FEATURED_ALUMNI = [
  {
    id: 1,
    name: 'Maria Elena Santos',
    currentRole: 'Senior Software Engineer',
    currentCompany: 'Google Philippines',
    hsiTenure: '2018-2022',
    hsiRole: 'Web Developer',
    location: 'Makati City, Philippines',
    image: null,
    month: 'January 2026',
    quote: 'HSI gave me the foundation to dream big and the skills to make those dreams a reality. The mentorship and community here are unparalleled.',
    achievements: [
      'Led development of AI-powered healthcare solutions at Google',
      'Speaker at Google I/O Extended Manila 2025',
      'Mentored 50+ junior developers',
    ],
    badges: ['Top Performer', 'Mentor', 'Industry Leader'],
    stats: { connections: 1234, endorsements: 89, mentees: 50 },
    socialLinks: { linkedin: '#', email: 'maria.santos@email.com' },
    alumniType: 'Former Employee',
  },
  {
    id: 2,
    name: 'John Patrick Dela Cruz',
    currentRole: 'Founder & CEO',
    currentCompany: 'TechStartup PH',
    hsiTenure: '2015-2019',
    hsiRole: 'Project Manager',
    location: 'Quezon City, Philippines',
    image: null,
    month: 'December 2025',
    quote: 'The project management skills and team collaboration I learned at HSI helped me build a company that now employs over 200 people.',
    achievements: [
      'Forbes 30 Under 30 Asia 2024',
      'Raised $5M Series A funding',
      'Created 200+ tech jobs in the Philippines',
    ],
    badges: ['Innovator', 'Community Champion', 'Certified'],
    stats: { connections: 2456, endorsements: 156, mentees: 30 },
    socialLinks: { linkedin: '#', email: 'john.delacruz@email.com' },
    alumniType: 'Former Employee',
  },
  {
    id: 3,
    name: 'Ana Marie Reyes',
    currentRole: 'QA Lead',
    currentCompany: 'Ubisoft Philippines',
    hsiTenure: '2019-2021',
    hsiRole: 'QA / Web Dev',
    location: 'Singapore',
    image: null,
    month: 'November 2025',
    quote: 'Starting as an intern at HSI taught me attention to detail and quality standards that I carry with me to this day.',
    achievements: [
      'Led QA for 3 AAA game titles',
      'Implemented automated testing framework saving 40% QA time',
      'Promoted to lead within 2 years',
    ],
    badges: ['Industry Leader', 'Top Performer', 'Mentor'],
    stats: { connections: 1890, endorsements: 123, mentees: 45 },
    socialLinks: { linkedin: '#', email: 'ana.reyes@email.com' },
    alumniType: 'Former Intern',
  },
];

export const BADGE_COLORS = {
  'Top Performer': { color: '#DAB619', bgColor: '#FFF8E1' },
  'Mentor': { color: '#3B82F6', bgColor: '#E3F2FD' },
  'Certified': { color: '#199A08', bgColor: '#E8F5E9' },
  'Industry Leader': { color: '#9333EA', bgColor: '#F3E8FF' },
  'Community Champion': { color: '#EC4899', bgColor: '#FCE7F3' },
  'Innovator': { color: '#F97316', bgColor: '#FFF7ED' },
};

export const BADGE_CONFIG = {
  certified: {
    name: 'Certified Alumni',
    color: '#199A08',
    bgColor: '#E8F5E9',
    iconKey: 'certificate',
    description: 'Verified employee/intern alumni status',
    criteria: 'Complete profile verification and current employment update',
    tier: 'standard',
  },
  top_performer: {
    name: 'Top Performer',
    color: '#DAB619',
    bgColor: '#FFF8E1',
    iconKey: 'trophy',
    description: 'Outstanding professional achievements',
    criteria: 'Recognized for exceptional career accomplishments post-HSI',
    tier: 'gold',
  },
  mentor: {
    name: 'Mentor',
    color: '#3B82F6',
    bgColor: '#E3F2FD',
    iconKey: 'handHeart',
    description: 'Actively guides current employees and interns',
    criteria: 'Successfully mentor at least 5 current or former colleagues',
    tier: 'gold',
  },
  industry_leader: {
    name: 'Industry Leader',
    color: '#9333EA',
    bgColor: '#F3E8FF',
    iconKey: 'crown',
    description: 'Recognized leader in their industry',
    criteria: 'Hold executive position or significant industry influence',
    tier: 'platinum',
  },
  innovator: {
    name: 'Innovator',
    color: '#F97316',
    bgColor: '#FFF7ED',
    iconKey: 'rocket',
    description: 'Pioneer in innovation and entrepreneurship',
    criteria: 'Launch startup, patent, or innovative project after leaving HSI',
    tier: 'platinum',
  },
};

export const TIER_CONFIG = {
  platinum: { label: 'Platinum', color: '#6366F1', bgColor: '#EEF2FF' },
  gold: { label: 'Gold', color: '#DAB619', bgColor: '#FFF8E1' },
  silver: { label: 'Silver', color: '#6B7280', bgColor: '#F3F4F6' },
  standard: { label: 'Standard', color: '#199A08', bgColor: '#E8F5E9' },
};

export const BADGE_HOLDERS = [
  { id: 1, name: 'Maria Santos', email: 'maria.santos@email.com', alumniType: 'Former Employee', hsiRole: 'Web Developer', hsiTenure: '2018-2022', badges: ['certified', 'mentor', 'top_performer'] },
  { id: 2, name: 'John Dela Cruz', email: 'john.delacruz@email.com', alumniType: 'Former Employee', hsiRole: 'Project Manager', hsiTenure: '2015-2019', badges: ['certified', 'industry_leader', 'innovator'] },
  { id: 3, name: 'Ana Reyes', email: 'ana.reyes@email.com', alumniType: 'Former Intern', hsiRole: 'QA / Web Dev', hsiTenure: '2019-2021', badges: ['certified', 'mentor'] },
  { id: 4, name: 'Carlos Garcia', email: 'carlos.garcia@email.com', alumniType: 'Former Employee', hsiRole: 'Game Developer', hsiTenure: '2019-2023', badges: ['certified', 'top_performer'] },
  { id: 5, name: 'Patricia Lim', email: 'patricia.lim@email.com', alumniType: 'Former Employee', hsiRole: 'HR', hsiTenure: '2016-2021', badges: ['certified', 'top_performer'] },
  { id: 6, name: 'Miguel Torres', email: 'miguel.torres@email.com', alumniType: 'Former Intern', hsiRole: 'GFX / Game Dev', hsiTenure: '2020-2021', badges: ['certified', 'mentor'] },
  { id: 7, name: 'Sofia Chen', email: 'sofia.chen@email.com', alumniType: 'Former Employee', hsiRole: 'Unleash Web Dev', hsiTenure: '2017-2022', badges: ['certified', 'innovator', 'industry_leader'] },
  { id: 8, name: 'David Kim', email: 'david.kim@email.com', alumniType: 'Former Intern', hsiRole: 'Sys Admin / QA', hsiTenure: '2021-2022', badges: ['certified', 'top_performer'] },
];

export const BADGE_HOLDERS_PAGE_SIZE = 8;

export const RECENT_ACHIEVEMENTS = [
  { id: 1, type: 'badge_earned', user: 'Maria Santos', hsiRole: 'Web Developer', alumniType: 'Former Employee', badge: 'Industry Leader', badgeIconKey: 'crown', badgeColor: '#9333EA', badgeBgColor: '#F3E8FF', timestamp: '2026-01-27T10:30:00', description: 'Recognized for exceptional leadership at Google Philippines' },
  { id: 2, type: 'featured', user: 'John Dela Cruz', hsiRole: 'Project Manager', alumniType: 'Former Employee', timestamp: '2026-01-26T14:00:00', description: 'Selected as Featured Alumni of the Month for January 2026' },
  { id: 3, type: 'badge_earned', user: 'Ana Reyes', hsiRole: 'QA / Web Dev', alumniType: 'Former Intern', badge: 'Top Performer', badgeIconKey: 'trophy', badgeColor: '#DAB619', badgeBgColor: '#FFF8E1', timestamp: '2026-01-25T09:15:00', description: 'Promoted to QA Lead at Ubisoft Philippines' },
  { id: 4, type: 'hall_of_fame', user: 'Angela Reyes', hsiRole: 'QA', alumniType: 'Former Employee', timestamp: '2026-01-24T16:00:00', description: 'Inducted into Hall of Fame as QA Director at Blizzard' },
  { id: 5, type: 'appreciation', user: 'Carlos Garcia', hsiRole: 'Game Developer', alumniType: 'Former Employee', company: 'Gameloft', timestamp: '2026-01-23T11:45:00', description: 'Received Best Game Developer Award from Gameloft Manila' },
  { id: 6, type: 'badge_earned', user: 'Patricia Lim', hsiRole: 'HR', alumniType: 'Former Employee', badge: 'Mentor', badgeIconKey: 'handHeart', badgeColor: '#3B82F6', badgeBgColor: '#E3F2FD', timestamp: '2026-01-22T13:30:00', description: 'Completed 50 mentoring sessions with current HSI employees' },
  { id: 7, type: 'milestone', user: 'Miguel Torres', hsiRole: 'GFX / Game Dev', alumniType: 'Former Intern', milestone: '1000 Points', timestamp: '2026-01-21T10:00:00', description: 'Reached 1000 achievement points milestone' },
  { id: 8, type: 'badge_earned', user: 'Sofia Chen', hsiRole: 'Unleash Web Dev', alumniType: 'Former Employee', badge: 'Innovator', badgeIconKey: 'rocket', badgeColor: '#F97316', badgeBgColor: '#FFF7ED', timestamp: '2026-01-20T15:20:00', description: 'Now CTO at Canva, leading technical architecture' },
];

export const ACHIEVEMENT_TYPE_CONFIG = {
  badge_earned: { iconKey: 'medal', color: '#DAB619', bgColor: '#FFF8E1', label: 'Badge Earned' },
  featured: { iconKey: 'crown', color: '#9333EA', bgColor: '#F3E8FF', label: 'Featured' },
  hall_of_fame: { iconKey: 'trophy', color: '#199A08', bgColor: '#E8F5E9', label: 'Hall of Fame' },
  appreciation: { iconKey: 'heart', color: '#EC4899', bgColor: '#FCE7F3', label: 'Appreciation' },
  milestone: { iconKey: 'star', color: '#3B82F6', bgColor: '#E3F2FD', label: 'Milestone' },
};

export const RECOGNITION_TYPES = {
  'Promotion': { iconKey: 'trendUp', color: '#199A08', bgColor: '#E8F5E9' },
  'Leadership Award': { iconKey: 'crown', color: '#9333EA', bgColor: '#F3E8FF' },
  'Developer of the Year': { iconKey: 'code', color: '#3B82F6', bgColor: '#E3F2FD' },
  'Technical Excellence': { iconKey: 'star', color: '#F97316', bgColor: '#FFF7ED' },
  'Project Completion': { iconKey: 'target', color: '#06B6D4', bgColor: '#ECFEFF' },
  'Team Player Award': { iconKey: 'users', color: '#EC4899', bgColor: '#FCE7F3' },
  'Innovation Award': { iconKey: 'rocket', color: '#EF4444', bgColor: '#FEE2E2' },
  'Employee of the Month': { iconKey: 'trophy', color: '#DAB619', bgColor: '#FFF8E1' },
  'Certification Achievement': { iconKey: 'certificate', color: '#14B8A6', bgColor: '#CCFBF1' },
};

export const APPRECIATION_POSTS_INITIAL = [
  { id: 1, company: 'Google Philippines', title: 'Promoted to Senior Software Engineer', honoree: 'Maria Elena Santos', hsiRole: 'Web Developer', hsiTenure: '2020-2024', currentRole: 'Senior Software Engineer', alumniType: 'Employee', content: 'We are thrilled to announce that Maria Elena Santos has been promoted to Senior Software Engineer! Maria has consistently demonstrated exceptional technical skills and leadership in developing AI-powered accessibility features that have helped millions of users worldwide.', recognitionType: 'Promotion', postedDate: '2026-01-25', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop', featured: true },
  { id: 2, company: 'Ubisoft Philippines', title: 'QA Team Lead of the Year 2025', honoree: 'Ana Marie Reyes', hsiRole: 'QA / Web Dev', hsiTenure: '2021-2023', currentRole: 'QA Lead', alumniType: 'Intern', content: 'Ana Marie Reyes has been recognized as QA Team Lead of the Year for her outstanding leadership in managing a team of 30 testers. Her attention to detail and quality standards developed at HSI continue to drive excellence in our game development pipeline.', recognitionType: 'Leadership Award', postedDate: '2026-01-20', image: null, featured: true },
  { id: 3, company: 'Gameloft Manila', title: 'Developer of the Year 2025', honoree: 'Carlos Garcia', hsiRole: 'Game Developer', hsiTenure: '2019-2022', currentRole: 'Senior Game Developer', alumniType: 'Employee', content: 'Carlos Garcia has been awarded Developer of the Year for his exceptional contributions to our flagship mobile game. His innovative gameplay mechanics have significantly enhanced user engagement and helped achieve over 10 million downloads.', recognitionType: 'Developer of the Year', postedDate: '2026-01-15', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop', featured: false },
  { id: 4, company: 'Accenture Philippines', title: 'Technical Excellence Award Q4 2025', honoree: 'Patricia Lim', hsiRole: 'Web Developer', hsiTenure: '2018-2021', currentRole: 'Solutions Architect', alumniType: 'Employee', content: 'Patricia Lim receives the Technical Excellence Award for designing and implementing a scalable microservices architecture that reduced system latency by 60%. Her technical expertise continues to set benchmarks for excellence.', recognitionType: 'Technical Excellence', postedDate: '2026-01-10', image: null, featured: true },
  { id: 5, company: 'Globe Telecom', title: 'Network Migration Project Completion', honoree: 'David Kim', hsiRole: 'Sys Admin / QA', hsiTenure: '2022-2024', currentRole: 'IT Infrastructure Specialist', alumniType: 'Intern', content: 'David Kim successfully led the completion of our nationwide 5G network migration project ahead of schedule. His meticulous planning and execution ensured zero downtime during the transition.', recognitionType: 'Project Completion', postedDate: '2026-01-05', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop', featured: false },
  { id: 6, company: 'Canva', title: 'Innovation Award - AI Design Tools', honoree: 'Sofia Chen', hsiRole: 'Unleash Web Dev', hsiTenure: '2020-2024', currentRole: 'Tech Lead', alumniType: 'Employee', content: 'Sofia Chen has been recognized with the Innovation Award for pioneering AI-powered design automation tools that have transformed how millions of users create content.', recognitionType: 'Innovation Award', postedDate: '2025-12-28', image: null, featured: true },
];

export const APPRECIATION_FORM_INITIAL = {
  recognitionType: '',
  company: '',
  honoree: '',
  alumniType: '',
  currentRole: '',
  hsiRole: '',
  hsiTenureStart: '',
  hsiTenureEnd: '',
  title: '',
  content: '',
  imageUrl: '',
};

export const ACHIEVEMENT_STATS = [
  { label: 'Total Badges Awarded', value: '1,247', iconKey: 'medal', color: '#DAB619', bgColor: '#FFF8E1' },
  { label: 'Featured Alumni', value: '48', iconKey: 'crown', color: '#9333EA', bgColor: '#F3E8FF' },
  { label: 'Appreciation Posts', value: '156', iconKey: 'heart', color: '#EC4899', bgColor: '#FCE7F3' },
  { label: 'Active Alumni', value: '214', iconKey: 'users', color: '#3B82F6', bgColor: '#E3F2FD' },
];

export const ACHIEVEMENT_TABS = [
  { id: 'overview', label: 'Overview', iconKey: 'sparkle' },
  { id: 'badges', label: 'Alumni Badges', iconKey: 'medal' },
  { id: 'featured', label: 'Featured Alumni', iconKey: 'crown' },
  { id: 'appreciation', label: 'Appreciation Posts', iconKey: 'heart' },
];

// =============================================================================
// ANNOUNCEMENT CATEGORIES
// =============================================================================

export const ANNOUNCEMENT_CATEGORIES = [
  { label: 'All Announcements', path: '/announcements' },
  { label: 'Company News', path: '/announcements/company-news' },
  { label: 'Policy Changes', path: '/announcements/policy-changes' },
  { label: 'Partnerships & Advocacies', path: '/announcements/partnerships' },
  { label: 'Alumni Success Stories', path: '/announcements/alumni-stories' },
];
