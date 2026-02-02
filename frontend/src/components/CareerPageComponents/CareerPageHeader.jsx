import React from 'react'

export default function CareerPageHeader() {
    return (
        //header section for career page
        <>
            <div className='flex flex-row gap-1'>
                <h1 className="text-4xl font-bold text-gray-900">Career & Job</h1>
                <h1 className="text-4xl font-bold text-yellow-500">Opportunities</h1>
            </div>
            <p className='text-gray-600 italic py-2'>Explore available departments and current openings within the company.</p>
        </>
        
    )
}