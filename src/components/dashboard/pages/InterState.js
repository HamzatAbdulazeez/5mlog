import React from 'react'
import { InterStateForm } from './Pickup/InterstateForm'

export const InterState = () => {
  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Logistics Services</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>5M Logistics provides interstate shipping with convenience and comfort. Fill the form below correctly, to asertain how best we can serve you.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white lg:w-10/12 p-5 mx-auto mt-8 lg:p-10 rounded-lg'>
                <InterStateForm/>
            </div>
        </div>
    </div>
  )
}