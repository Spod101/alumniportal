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
            <div className='flex flex-col xl:flex-row justify-center'>
                <div className='w-full xl:w-[40%] flex-auto flex justify-center xl:justify-start'>
                    <img src={Logo} alt="HSI Logo" className='h-[100px] xl:h-[140px]'/>
                </div>
                <div className='w-full xl:w-[60%] flex-auto text-center xl:text-right pt-3 xl:pt-0'>
                    <h2 className='font-bold text-lg xl:text-xl'>{jobPosting.jobTitle}</h2>
                    <p className='text-sm italic text-gray-700'>{jobPosting.jobDescription}</p>
                    <div className='gap-2 flex justify-center xl:justify-end py-2 flex-wrap'>
                        {Array.isArray(jobPosting.jobTags) && jobPosting.jobTags.map((item, index) => (
                            <span
                                key={index}
                                className={`border px-3 xl:px-5 rounded-lg max-h-fit text-sm ${getSpanClasses(item)}`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className='flex justify-center xl:justify-end items-center pt-5 gap-2'>
                            <div>
                                    <h1 className='font-bold text-sm xl:text-base'>Highly Succeed Inc.</h1>
                                    <h1 className='font-light italic text-gray-500 text-xs xl:text-sm'>Mandaluyong City</h1>
                            </div>
                            <img src={Logo} alt="HSI Logo" className='h-[50px] xl:h-[65px]'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center px-4 xl:px-10 pt-2'>
            <button onClick={handleViewDetails} className='px-2 py-1 border border-gray-300 w-full text-center bg-yellow-500 rounded-lg text-white text-sm xl:text-base'>View Job Details</button>
            </div>
        </div>
        )))}
    </>
)
}
