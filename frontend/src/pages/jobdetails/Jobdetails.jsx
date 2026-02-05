import React from 'react'
import MapEmbed from './maps.jsx'
import CopyUrlButton from './urlfetcher.jsx'
import { useNavigate } from 'react-router-dom'
import hsiLogo from './icon/hsi-logo.png'
import facebookIcon from './icon/facebook.png'
import twitterIcon from './icon/twitter.png'
import linkedinIcon from './icon/linkedin.png'
import gmailIcon from './icon/gmail.png'

function JobBox({ title, children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #eee', padding: 16, borderRadius: 20, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      <div style={{ color: '#666' }}>{children}</div>
    </div>
  )
}

function CompanyHeader({ company }) {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
        padding: 16,
        borderRadius: 20,
        border: '1px solid #eee',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div><img src={hsiLogo} alt="HSI" style={{ width: 53, height: 53 }} /></div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>{company.companyName}</div>
          <div style={{ fontSize: 12, color: '#666' }}>{company.type}</div>
          <div style={{ fontSize: 12, color: '#666' }}>{company.jobsCount}</div>
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate('/job-application')}
          style={{
            background: '#DAB619',
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}


function JobInformationSection({ info }) {
  const rows = [
    ['Work Mode', info.WorkMode],
    ['Experience', info.Experience],
    ['No. of vacancy', info.NoOfVacancy],
    ['Job type', info.JobType],
    ['Location', info.Location],
    ['Offered Salary', info.OfferedSalary],
  ]

  return (
    <div
      style={{
        background: '#fff',
        padding: 16,
        borderRadius: 20,
        border: '1px solid #eee',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <div style={{ fontSize: 21, fontWeight: 600, marginBottom: 6 }}>{info.title}</div>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 12 }}>Basic Job Information</div>

      <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 2px 1fr'}}>
        {rows.map(([label, value]) => (
          <React.Fragment key={label}>
            <div style={{ color: '#333' }}>{label}</div>
            <div style={{ color: '#666' }}>:</div>
            <div style={{ textAlign: 'left', paddingLeft: 12, color: '#666' }}>{value}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

function JobDescription({ description }) {
  const navigate = useNavigate()
  return (
    <JobBox>
      <h4 style={{ marginTop: 0, marginBottom: 12, fontSize: 18, fontWeight: 600 }}>Job Description</h4>
      <p>{description.JobDescription}</p>
      <h4 style={{ marginTop: 12, marginBottom: 12, fontSize: 18, fontWeight: 600 }}>Requirements:</h4>
      <p style={{whiteSpace: 'pre-line' }}>{description.Requirements}</p>
      <h4 style={{ marginTop: 12, marginBottom: 12, fontSize: 18, fontWeight: 600 }}>Responsibilities:</h4>
      <p style={{ whiteSpace: 'pre-line' }}>{description.Responsibilities}</p>
    
    <div style={{ display: 'flex', justifyContent: 'right', marginTop: 20 }}>
    <button
          onClick={() => navigate('/job-application')}
          style={{
            alignContent: '',
            background: '#DAB619',
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          Apply 
        </button> </div>
    </JobBox>
    
  )
}

function SideSection({ title, children }) {
  return (
    <div style={{ background: 'transparent', border: 'none', padding: 0 }}>
      <h4 style={{ margin: '0 0 8px 0', marginTop: "15px" }}>{title}</h4>
      <div style={{ color: '#666' }}>{children}</div>
    
    </div>
  )
}

export default function CompanyDetails({ job }) {
  const sample =
    job ||
    ({
      companyName: 'Highly Succeed Inc.',
      type: 'IT Solutions',
      jobsCount: '33+ jobs',
      title: 'Full stack developer',
      summary: 'Build and maintain UI components',
      about: 'Highly Succeed is a Philippines-based IT servicing and product company that specializes on a wide range of web based services. We are composed of professionals in graphic design, web development, custom application creation, and mobile application.',
      location: 'Highly Succeed Inc., Mandaluyong City, Metro Manila',
      socmed: 'https://example.com/company',
      WorkMode: 'Hybrid',
      Experience: '2+ years',
      NoOfVacancy: '[6]',
      JobType: 'Full-time',
      Location: 'Manadaluyong City, Metro Manila',
      OfferedSalary: 'PHP 50,000/month (negotiable)',
      JobDescription: `We are seeking a highly organized and creative Events Manager to plan, coordinate, and execute a variety of events that align with our company's goals and values.  The Events 
                      Manager will oversee all aspects of event planning, from concept development and budgeting 
                      to on-site execution and post-event evaluation.`,
      Requirements: `1. Lorem ipsum dolor sit amet
                     2. Consectetur adipiscing elit
                     3. Sed do eiusmod tempor incididunt
                     4. Ut labore et dolore magna aliqua
                     5. Ut enim ad minim veniam`,
      Responsibilities: `1. Lorem ipsum dolor sit amet
                         2. Consectetur adipiscing elit
                         3. Sed do eiusmod tempor incididunt
                         4. Ut labore et dolore magna aliqua
                         5. Ut enim ad minim veniam`

    })
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    sample.location
  )}`

  return (
    <div style={{ display: 'flex', gap: 24, padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CompanyHeader company={sample} />
        <JobInformationSection info={sample}>
        </JobInformationSection>
        <JobDescription description={sample} />
      </div>
      <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <SideSection title="About Company">{sample.about}
          <a href={"https://highlysucceed.com"} target="_blank" rel="noopener noreferrer" style={{ color: '#DAB619', textDecoration: 'none' }} 
          >{"\nLearn More"}</a>
        </SideSection>
        <SideSection title="Location">
          <MapEmbed query={sample.location} height={180} />
        </SideSection>
        <SideSection title="Refer to a Friend">
          <div style={{ display: 'flex', marginTop: "15px", gap: 30, justifyContent: "center" }}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(mapUrl)}`}
              target="_blank"
              rel="noreferrer"
              title="Share on Facebook"
            >
              <img src={facebookIcon} alt="Facebook" style={{ width: 53, height: 53 }} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(sample.title + ' - ' + mapUrl)}`}
              target="_blank"
              rel="noreferrer"
              title="Share on Twitter"
            >
              <img src={twitterIcon} alt="Twitter" style={{ width: 53, height: 53 }} />
            </a>

            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(mapUrl)}&title=${encodeURIComponent(sample.title)}`}
              target="_blank"
              rel="noreferrer"
              title="Share on LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" style={{ width: 53, height: 53 }} />
            </a>

            <a
              href={`mailto:?subject=${encodeURIComponent(sample.title)}&body=${encodeURIComponent(mapUrl)}`}
              target="_blank"
              rel="noreferrer"
              title="Share via Email"
            >
              <img src={gmailIcon} alt="Email" style={{ width: 53, height: 53 }} />
            </a>
          </div>  
        </SideSection>
        <SideSection title="Copy job URL Link">
          <CopyUrlButton />
        </SideSection>

      </div>
    </div>
  )
}
