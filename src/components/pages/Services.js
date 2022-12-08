import React from 'react'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'

export const Services = () => {
  return (
    <div className='font-primary'>
        <Header/>
        {/* service hero */}
        <div className='bg-service lg:bg-fit bg-cover lg:h-80 h-44'>
            <div className='box h-full'>
                <div className='grid h-full items-center'>
                    <p className='lg:text-3xl fw-700 text-white'>Our Services</p>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div>
                    <div className='text-center relative lg:py-6' >
                        <p className='fw-600 lg:text-2xl'>Our Services</p>
                        <p className='w-8 mx-auto h-1 mt-2 bg-black'></p>
                        <p className='absolute w-02 border text-8xl top-0 left-1/4 opacity-10 fw-600 text-gray-400'>SERVICES</p>
                    </div>
                    <div className='lg:flex items-center bg-light lg:mt-12'>
                        <div className='lg:w-4/12'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670492401/5mlog/Rectangle_10_1_orf93q.png" alt="services" className='w-10/12' />
                        </div>
                        <div className='lg:w-8/12 lg:pr-16'>
                            <p className='text-lg fw-600'>Air Freight</p>
                            <p className='my-7'>When you need your shipment at any destination of your choice in the shortest possible time; then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. </p>
                            <p className='text-primary fw-600'>Get Started</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
