import React from 'react'
import { FaListOl } from 'react-icons/fa'

export const ViewRequest = () => {
  return (
    <div className='min-h-screen'>
        <div className='px-3 py-10 bg-white'>
            <p className='fw-600 text-xl pb-4'>Driver(s) Request for Delivery</p>
            <p className='flex items-center fw-600 text-xl'><span className='pr-1'><FaListOl/></span> Order Id: <span className='text-primary pl-6'>PKD-R456-56782</span></p>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3'>
            <div className='lg:grid-2 justify-between bg-white lg:p-10 lg:pt-4 shadow-md rounded-lg'>
                <div className='mt-6'>
                    <div className='bg-light lg:p-6 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Driver's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>MetalBox</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Total Deliveries:</p>
                            <p>42</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Route:</p>
                            <p>Abuja/Lagos</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Vehicle Type:</p>
                            <p>Motor Bike</p>
                        </div>
                        <div className='mt-3'>
                            <button className='btn bg-primary w-full text-white fw-600'>Approve Request</button>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='bg-light lg:p-6 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Driver's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>MetalBox</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Total Deliveries:</p>
                            <p>42</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Route:</p>
                            <p>Abuja/Lagos</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Vehicle Type:</p>
                            <p>Motor Bike</p>
                        </div>
                        <div className='mt-3'>
                            <button className='btn bg-primary w-full text-white fw-600'>Approve Request</button>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='bg-light lg:p-6 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Driver's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>MetalBox</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Total Deliveries:</p>
                            <p>42</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Route:</p>
                            <p>Abuja/Lagos</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Vehicle Type:</p>
                            <p>Motor Bike</p>
                        </div>
                        <div className='mt-3'>
                            <button className='btn bg-primary w-full text-white fw-600'>Approve Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
