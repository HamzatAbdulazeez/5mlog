import React from 'react'
import { FaArrowLeft, FaListOl, FaSearchLocation } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { OrderProgress } from './OrderItems/OrderProgress'

export const OrderDetailUser = () => {
  return (
    <div className='min-h-screen'>
        <div className='shadow-lg p-4 bg-white'>
            <div>
                <Link to="/dashboard/myorders"><p className='flex items-center text-gray-600 '><span className='pr-4'><FaArrowLeft/></span>Orders</p></Link>
            </div>
            <div className='pt-4 pr-4'>
                <p className='flex items-center fw-600 text-xl'><span className='pr-1'><FaListOl/></span> Order Id: <span className='text-primary pl-6'>ORD-R456-56782</span></p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6 lg:mt-0'>
            <div className='bg-white rounded-lg  p-5 mx-auto lg:p-10'>
                <div className='bg-white lg:grid-3s justify-between '>
                    <div className='shadow-lg lg:p-6 p-3 rounded-lg bg-red-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span> PickUp</p>
                        <p className='flex items-center fw-600 text-xl'>ORD-R456-56782</p>
                        <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span> 2, Metalbox, Ikeja industrial estate, Lagos Nigeria.</p>
                        <p className='flex fs-500 mt-2'>Lagos Nigeria</p>
                        <p className='flex fs-500 mt-2'>+2348 000 000 000</p>
                    </div>
                    <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-green-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Dropoff</p>
                        <p className='flex items-center fw-600 text-xl'>ORD-R456-56782</p>
                        <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span> 2, Ogba, Ikeja industrial estate, Lagos Nigeria.</p>
                        <p className='flex fs-500 mt-2'>Lagos Nigeria</p>
                        <p className='flex fs-500 mt-2'>+2348 000 000 000</p>
                    </div>
                    <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-blue-100'>
                    <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Logistics Info</p>
                    <p className='flex items-center fw-600 text-xl'>TRK-R456-56782</p>
                    <p className='mt-6'><span>Order Status:</span><span className='pl-2'>Ongoing</span></p>
                    <p className='mt-2'><span>Vehicle Type:</span><span className='pl-2'>Motor-Bike</span></p>
                    <p className='mt-2'><span>Estimated Delivery Time:</span><span className='pl-2'>3 Hours</span></p>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto mt-8 py-10 lg:py-20'>
                    <OrderProgress/>
                </div>
                <div className='lg:grid-83 mt-8 lg:mt-12'>
                    <div  className='lg:p-6 p-3 grid-2 text-black rounded-lg shadow-lg bg-light'>
                        <div>
                            <div>
                                <p className='fw-600'>Package Name</p>
                                <p className='mt-1'>Mobile Gadget from Computer Village</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-600'>Preferred Transport</p>
                                <p className='mt-1'>Motor Bike</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='fw-600'>Package Name</p>
                                <p className='mt-1'>Mobile Gadget from Computer Village</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-600'>Package Weight</p>
                                <p className='mt-1'>405 grams</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:p-6 p-3 rounded-lg shadow-lg bg-light text-blue-800 grid place-content-center text-center'>
                        <div className='text-'>
                            <p className='fw-600'>Price</p>
                            <p className='text-xl fw-600'>NGN 60,000</p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid-2 justify-between mt-8 lg:mt-12'>
                    <div className='bg-light lg:p-6 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Sender's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>Green Mouse</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Phone:</p>
                            <p>08123456789</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Address:</p>
                            <p>Green Mouse</p>
                        </div>
                    </div>
                    <div className='bg-light lg:p-6 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Receiver's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>MetalBox</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Phone:</p>
                            <p>08123456789</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Address:</p>
                            <p>Green Mouse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
