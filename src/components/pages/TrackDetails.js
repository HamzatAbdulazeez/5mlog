import { Button } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { FaListOl, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'


export const TrackDetails = () => {
    const auth = useSelector((state) => state.auth);

  return (
    <div className='font-primary fs-500 lg:fs-600'>
        <Header/>
        <div className='section'>
            <div className='box'>
                <div>
                    <p className='lg:text-2xl text-lg fw-600'>Track your Shipment</p>
                    <p className='h-1 w-48 bg-primary'></p>
                </div>
                <div className='lg:grid-83 lg:mt-12 mt-7'>
                    <div className='bg-light shadow-lg lg:p-6 px-3 py-4'>
                        <div className='mb-6'>
                            <p>Current status:</p>
                            <p className='text-lg lg:text-2xl'>Ongoing</p>
                        </div>
                        <div className='flex'>
                            <div className='w-4/12 pr-1'>
                                <p className='p-1 lg:p-2 bg-primary'></p>
                                <div className='lg:p-4 py-4 px-2 bg-op'>
                                    Dispatched
                                </div>
                            </div>
                            <div className='w-4/12 pr-1'>
                                <p className='p-1 lg:p-2 bg-primary'></p>
                                <div className='lg:p-4 py-4 px-2'>
                                    Ongoing
                                </div>
                            </div>
                            <div className='w-4/12'>
                                <p className='p-1 lg:p-2 bg-primary'></p>
                                <div className='lg:p-4 py-4 px-2'>
                                    Completed
                                </div>
                            </div>
                        </div>
                        <div className='lg:grid-2 lg:mt-8 mt-6'>
                            <div>
                                <p className='fw-500 lg:fs-700 fs-600'>Estimated delivery time:</p>
                                <p>14 Hours</p>
                            </div>
                            <div className=' mt-6 lg:mt-0'>
                                <p className='fw-500 lg:fs-700 fs-600'>Delivery Location:</p>
                                <p>Street, City, State, Country</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light mt-6 lg:mt-0 shadow-lg lg:p-6 px-3 py-4'>
                        <div>
                            <div>
                                <p className='fw-500'>Service Type:</p>
                                <p className='fs-500'>Pickup Service</p>
                            </div>
                            <div className='mt-3'>
                                <p className='fw-500'>Tracking Number:</p>
                                <p className='fs-500'>TR56OGK0PLRR66666</p>
                            </div>
                            <div className='mt-3'>
                                <p className='fw-500'>Package Description:</p>
                                <p className='fs-500'>13 units of iphone 14 pro max</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Button className='w-full bg-primary'>Contact Us</Button>
                        </div>
                    </div>
                </div>
                {auth.isLoggedIn? 
                    <div className='bg-white lg:grid-3s justify-between mt-8 lg:mt-12'>
                        <div className='shadow-lg lg:p-6 p-3 rounded-lg bg-red-100'>
                            <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span> PickUp</p>
                            <p className='flex items-center fw-600 text-xl'></p>
                            <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span></p>
                            <p className='flex fs-500 mt-2'>.</p>
                            <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span></p>
                        </div>
                        <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-green-100'>
                            <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Dropoff</p>
                            <p className='flex items-center fw-600 text-xl'></p>
                            <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span> </p>
                            <p className='flex fs-500 mt-2'>.</p>
                            <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span></p>
                        </div>
                        <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-blue-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Logistics Info</p>
                        <p className='flex items-center fw-600 text-xl'></p>
                        <p className='mt-6'><span>Order Status:</span><span className='pl-2'></span></p>
                        <p className='mt-2'><span>Vehicle Type:</span><span className='pl-2'></span></p>
                        <p className='mt-2'><span>Current Location:</span><span className='pl-2'></span></p>
                        </div>
                    </div> : null} 
            </div>
        </div>
        <Footer/>
    </div>
  )
}
