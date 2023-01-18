import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Tracking = () => {

    const navigate = useNavigate()
    const [value, setValue] = useState('')
    
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const gotoTrackPage = () => {
        navigate(`/tracking?trackId=${value}`)
    }

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Track Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Get location details about a particular package order.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='lg:h-80 h-56 shadow-lg lg:w-9/12 mx-auto rounded-lg bg-track bg-cover flex items-center lg:p-8 p-3'>
                <div className='w-full text-white'>
                    <p className='w-6/12 lg:text-xl xl:text-2xl fw-600'>Enter your tracking number to track your deliveries</p>
                    <div className='grid-83 mt-8 lg:mt-12'>
                        <input type="text" placeholder='Enter tracking number' className="p-2 text-black lg:p-3 rounded-md" onChange={handleChange} />
                        <button className='bg-black rounded-lg lg:text-lg fw-600' onClick={gotoTrackPage}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}