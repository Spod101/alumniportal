// Achievement & Recognition – centralized data

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

// Badge showcase: iconKey used by component to map to react-icons
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

// Recent achievements timeline – badgeIcon as string key for component mapping
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

// Company appreciation posts
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

// Overview page stats and tabs
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
