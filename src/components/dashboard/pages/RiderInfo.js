import React from 'react'
import { RiderForm } from './rider-items/riderForm'

export const RiderInfo = () => {
  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-pick bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 text-xl lg:text-2xl'>My Service Information</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>Complete and update the form below with your correct details to seaamless rendering of service to users.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white lg:w-10/12 p-5 mx-auto mt-8 lg:p-10 rounded-lg'>
                <RiderForm/>
            </div>
        </div>
    </div>
  )
}
