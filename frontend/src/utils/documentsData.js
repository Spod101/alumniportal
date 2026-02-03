// Documents & Records – centralized data

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

// Masterlist data (simpler structure)
export const DOCUMENTS_MASTERLIST = [
  { id: 1, name: "Professional_Experience_Summary.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 2, name: "Outstanding_Performance_Certificate.pdf", category: "Certificate", uploadDate: "Jan 23, 2026" },
  { id: 3, name: "Employment_Verification_Letter.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 4, name: "Program_Completion_Record_MZ.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 5, name: "Cybersec_Cert_MZ.pdf", category: "Certificate", uploadDate: "Jan 23, 2026" },
  { id: 6, name: "Training_Record_2026.pdf", category: "Document", uploadDate: "Jan 23, 2026" },
  { id: 7, name: "Community_Cert_MZ.pdf", category: "Certificate", uploadDate: "Jan 23, 2026" },
];

// Document request form options
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
