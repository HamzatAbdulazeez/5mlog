import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { Track } from './home-comp/Track'

export const About = () => {
  return (
    <div className='font-primary'>
        <Header/>
        {/* about hero */}
        <div className='bg-about lg:bg-fit bg-cover lg:h-80 h-44'>
            <div className='box h-full'>
                <div className='grid h-full items-center'>
                    <p className='lg:text-3xl fw-700 text-white'>About Us</p>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div>
                    <div>
                        <p className='w-1 h-12 mx-auto bg-black'></p>
                        <p className='text-center font-light text-xl lg:tracking-wide mt-3'>ABOUT 5M LOGISTICS</p>
                    </div>
                    <div className='lg:flex items-center lg:mt-16 mt-8'>
                        <div className='lg:w-6/12 grid-2'>
                            <div className='row-span-2 px-2'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473614/5mlog/Rectangle_19599_q73ooh.png' alt="wwa" className='w-full' />
                            </div>
                            <div className='px-2 pb-1'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473610/5mlog/Rectangle_19600_hfc0wv.png' alt="wwa" className='w-full' />
                            </div>
                            <div className='px-2 pt-1'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473595/5mlog/Rectangle_19601_mtu4i5.png' alt="wwa" className='w-full' />
                            </div>
                        </div>
                        <div className='lg:w-6/12 mt-8 lg:mt-0'>
                            <p className='lg:text-2xl lg:fw-600 text-xl'>Who We Are</p>
                            <p className='my-6'>5M Logistics is a team providing top notch services in Freight, transportation and delivery to clients and users globally hereby boosting businesses and increasing sales and exchange between users worldwide.</p>
                            <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-about2 lg:bg-fit bg-cover mt-12 lg:h-96 h-auto'>
            <div className='box h-full py-12'>
                <div className='grid h-full items-center justify-center'>
                    <p className='lg:text-3xl text-xl fw-600 text-white text-center'>Core Values</p>
                    <div>
                        <div className='lg:flex lg:w-full mt-8 lg:mt-0 justify-evenly mx-auto'>
                            <div className='lg:w-5/12 bg-white lg:px-5 py-3 lg:py-6 rounded-md flex items-center'>
                                <div className='w-3/12'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670490204/5mlog/Rectangle_66_phnh1h.png" alt="corevalues" className='w-12 mx-auto' />
                                </div>
                                <div className='w-9/12'>
                                    <p className='text-lg fw-600'>Our Mission</p>
                                    <p className='fs-500'>Deliver value through quality freight and transportation services.</p>
                                </div>
                            </div>
                            <div className='lg:w-5/12  mt-6 lg:mt-0 bg-white lg:px-5 py-3 rounded-md flex items-center'>
                                <div className='w-3/12'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670490204/5mlog/Rectangle_67_cmhnux.png" alt="corevalues" className='w-12 mx-auto' />
                                </div>
                                <div className='w-9/12'>
                                    <p className='text-lg fw-600'>Our Mission</p>
                                    <p className='fs-500'>To become the no #1 Freight and Logistics service providers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section bg-process lg:bg-fit bg-cover'>
            <div className='box lg:py-6'>
                <div>
                    <div>
                        <p className='w-1 h-12 mx-auto bg-black'></p>
                        <p className='text-center font-light text-xl lg:tracking-wide mt-3'>OUR RECENT SERVICES</p>
                    </div>
                </div>
                <div className='lg:flex lg:mt-16 mt-10'>
                    <div className='lg:w-4/12 text-center'>
                        <p className='text-2xl fw-600'>203+</p>
                        <p className='fs-500 mt-4'>Land Deliveries</p>
                    </div>
                    <div className='lg:w-4/12 text-center mt-6 lg:mt-0'>
                        <p className='text-2xl fw-600'>146+</p>
                        <p className='fs-500 mt-4'>Air Freight Services</p>
                    </div>
                    <div className='lg:w-4/12 text-center mt-6 lg:mt-0'>
                        <p className='text-2xl fw-600'>109+</p>
                        <p className='fs-500 mt-4'>Ocean Shipping</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <Track/>
    </div>
  )
}
