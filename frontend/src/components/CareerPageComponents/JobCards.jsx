import React, { useState } from 'react'
import Logo from '../../assets/hsi-logo.png'
import { useNavigate } from 'react-router-dom'

export default function JobCards() {
    //job posting mockup card
    const jobPosting = [
        {
        id: 1,
        jobTitle: "QA - Intern",
        jobDescription: "Learn QA practices under mentor guidance",
        jobTags: ["Open", "Part-time"]
        },
        {
        id: 2,
        jobTitle: "Web Developer - Intern",
        jobDescription: "Work closely with developers on real-world tasks",
        jobTags: ["Open", "Part-time"]
        },
        {
        id: 3,
        jobTitle: "QA Engineer",
        jobDescription: "Ensuring product quality and reliability",
        jobTags: ["Open", "Urgent"]
        },
    ]
    //navigation to job details page
    const navigate = useNavigate()
    const handleViewDetails = () => {
        navigate('/career/job-details')
    };

    // color function for spans
    const getSpanClasses = (label) => {
        const normalized = String(label || '').toLowerCase().replace(/[^a-z]/g, '');
        if (normalized === 'open') {
            return 'bg-green-100 text-green-700 border-green-300';
        }
        if (normalized === 'urgent') {
            return 'bg-orange-100 text-orange-700 border-orange-300';
        }
        if (normalized === 'filled') {
            return 'bg-red-100 text-red-700 border-red-300';
        }
        return 'bg-gray-100 text-gray-700 border-gray-300';
    };


return (
    <>
    {(jobPosting.map((jobPosting) => (
        <div className='bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-transform duration-200'>
            {/* card content */}
            <div className='flex justify-center'>
                <div className='w-[40%] flex-auto'>
                    <img src={Logo} alt="HSI Logo" className='h-[140px]'/>
                </div>
                
                <div className='w-[60%] flex-auto text-right'>
                    <h2 className='font-bold text-xl'>{jobPosting.jobTitle}</h2>
                    <p className='text-sm italic text-gray-700'>{jobPosting.jobDescription}</p>
                    <div className='gap-2 flex justify-end py-2 flex-wrap pl-1'>
                        {Array.isArray(jobPosting.jobTags) && jobPosting.jobTags.map((item, index) => (
                            <span
                                key={index}
                                className={`border px-5 rounded-lg max-h-fit ${getSpanClasses(item)}`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className='flex justify-end items-center pt-5'>
                            <div>
                                    <h1 className='font-bold'>Highly Succeed Inc.</h1>
                                    
                                    <h1 className='font-light italic text-gray-500 text-sm'>Mandaluyong City</h1>
                            </div>
                            <img src={Logo} alt="HSI Logo" className='h-[65px]'/>
                    </div>
                </div>
                
            </div>
            <div className='w-full flex justify-center px-10'>
            <button onClick={handleViewDetails} className='px-2 py-1 border border-gray-300 w-full text-center bg-yellow-500 rounded-lg text-white'>View Job Details</button>
            </div>
        </div>
        )))}
    </>
)
}
