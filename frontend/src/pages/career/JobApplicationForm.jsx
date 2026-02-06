import React from 'react'

export default function JobApplicationForm() {
  return (
    <>
      <div className="w-full px-2 lg:px-4">
        <h2 className="text-xl lg:text-2xl text-yellow-500 pl-4 lg:pl-8 font-semibold pt-6 lg:pt-[30px]">Job Application Form</h2>
        <hr className="border-t-2 border-grey-500 my-1" />
        <div className="flex justify-center w-full py-2 pt-10 lg:pt-20">
          <div className="w-full max-w-[750px]">
            <label className="block text-sm mb-3 font-sm pl-4">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input type="nameField" className="w-full px-4 py-1 border border-gray-300 shadow-md rounded-lg" />
          </div>
        </div>

        <div className="flex justify-center w-full py-2 pt-4 lg:pt-6">
          <div className="w-full max-w-[750px] grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-y-10 gap-x-10 xl:gap-x-20">
            <div>
              <label className="block text-sm mb-3 font-sm pl-4">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="emailField"
                className="w-full px-4 py-1 border border-gray-300 shadow-md rounded-lg"
                placeholder="yourname@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-3 font-sm pl-4">Phone Number</label>
              <input
                type="phoneField"
                className="w-full px-4 py-1 border border-gray-300 shadow-md rounded-lg"
                placeholder="(02) 0000 0000"
              />
            </div>

            <div>
              <label className="block text-sm mb-3 font-sm pl-4">
                Earliest Possible Start Date <span className="text-red-500">*</span>
              </label>
              <input type="date" className="w-full xl:w-[220px] px-4 py-1 border border-gray-300 shadow-md rounded-lg" />
            </div>

            <div>
              <label className="block text-sm mb-3 font-sm pl-4">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="phoneField"
                className="w-full px-4 py-1 border border-gray-300 shadow-md rounded-lg"
                placeholder="+63 00000000000"
              />
            </div>

            <div className="xl:col-span-2">
              <label className="block text-sm mb-3 font-sm pl-4">Cover Letter</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 shadow-md rounded-lg resize-none h-24" />
              <label className="block text-xs text-gray-400 mt-1 pl-4">Please do not exceed 200 words</label>
            </div>

            <div className="xl:col-span-2">
              <label className="block text-sm mb-3 font-sm pl-4">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <input type="file" className="w-full xl:w-[350px] px-4 py-1 border border-gray-300 shadow-md rounded-lg" />
              <label className="block text-sm text-gray-400 mt-1 pl-4 italic">Valid file formats: PDF</label>
            </div>

            <div className="w-full flex justify-center xl:col-span-2 pt-8 lg:pt-10">
              <button className="w-full xl:w-[150px] bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md border border-gray-400">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

