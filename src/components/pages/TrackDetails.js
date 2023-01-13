import { Button } from '@material-tailwind/react'
import React from 'react'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'

export const TrackDetails = () => {
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
                                <p className='fw-500'>Vehicle Type:</p>
                                <p className='fs-500'>Mini Van</p>
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
            </div>
        </div>
        <Footer/>
    </div>
  )
}
