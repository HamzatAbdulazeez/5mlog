import React from 'react'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'

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
                        <div className='lg:w-6/12'>
                            <p className='lg:text-2xl lg:fw-600 text-lg'>Who We Are</p>
                            <p className='my-6'>Cupidatat ut pariatur veniam aliquip minim deserunt eu. Cillum laborum eu anim exercitation fugiat ipsum laboris eu ullamco deserunt ea sint. Occaecat sint eiusmod non Lorem ullamco eiusmod irure exercitation irure. Pariatur Lorem magna minim ut tempor labore esse in adipisicing duis labore ea. Cupidatat tempor anim ut consectetur exercitation occaecat cupidatat ipsum minim velit.</p>
                            <button className='btn-primary'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-about2 lg:bg-fit bg-cover mt-12 lg:h-96 h-auto'>
            <div className='box h-full'>
                <div className='grid h-full items-center justify-center'>
                    <p className='lg:text-3xl fw-600 text-white text-center'>Core Values</p>
                    <div>
                        <div className='lg:flex lg:w-11/12 justify-evenly mx-auto'>
                            <div className='w-5/12 bg-white lg:px-5 py-3 lg:py-6 rounded-md flex items-center'>
                                <div className='w-3/12'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670490204/5mlog/Rectangle_66_phnh1h.png" alt="corevalues" className='w-12 mx-auto' />
                                </div>
                                <div className='w-9/12'>
                                    <p className='text-lg fw-600'>Our Mission</p>
                                    <p className='fs-500'>Nulla labore veniam cupidatat velit commodo et mollit. Non excepteur culpa deserunt voluptate.</p>
                                </div>
                            </div>
                            <div className='w-5/12 bg-white lg:px-5 py-3 rounded-md flex items-center'>
                                <div className='w-3/12'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670490204/5mlog/Rectangle_67_cmhnux.png" alt="corevalues" className='w-12 mx-auto' />
                                </div>
                                <div className='w-9/12'>
                                    <p className='text-lg fw-600'>Our Mission</p>
                                    <p className='fs-500'>Nulla labore veniam cupidatat velit commodo et mollit. Non excepteur culpa deserunt voluptate.</p>
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
                <div className='lg:flex lg:mt-16'>
                    <div className='lg:w-4/12 text-center'>
                        <p className='text-2xl fw-600'>203+</p>
                        <p className='fs-500 mt-4'>Land Deliveries</p>
                    </div>
                    <div className='lg:w-4/12 text-center'>
                        <p className='text-2xl fw-600'>146+</p>
                        <p className='fs-500 mt-4'>Air Freight Services</p>
                    </div>
                    <div className='lg:w-4/12 text-center'>
                        <p className='text-2xl fw-600'>109+</p>
                        <p className='fs-500 mt-4'>Ocean Shipping</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
