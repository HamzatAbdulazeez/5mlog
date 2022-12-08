import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { FiLayers } from 'react-icons/fi'
import { TbTruckDelivery } from 'react-icons/tb'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { HeroSwipe } from './home-comp/HeroSwipe'
import Review from './home-comp/Review'

export const Hompage = () => {
  return (
    <div>
        <div className='font-primary'>
            <Header/>
            {/* hero banner */}
            <div className='py-5 relative'>
                <div  className='box'>
                    <div className=''>
                        <HeroSwipe/>
                    </div>
                    {/* tracking */}
                    {/* <div className='absolute track w-full'>
                        <div className='lg:w-7/12 mx-auto rounded-lg bg-white shadow-lg px-2 py-2'>
                            <input type="text" placeholder="Enter your tracking ID" className="py-3 px-6 lg:text-lg w-10/12"/>
                            <button className='w-2/12 lg:text-xl fw-600 py-3 bg-primary rounded-lg text-white'>Track</button>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* about us */}
            <div className='section bg-process lg:bg-fit'>
                <div className='box'>
                    <div className='lg:w-11/12 mx-auto lg:flex items-center flex-row-reverse'>
                        <div className='lg:w-6/12'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904736/5mlog/Group_237745_xdhv41.png" alt="img" className='w-9/12 mx-auto'/>
                        </div>
                        <div className='lg:w-6/12'>
                            <p className='lg:text-2xl text-lg fw-600 lg:fw-700'>About Us</p>
                            <div className='mt-8'>
                                <p>Lorem laborum esse magna nulla officia ea incididunt in magna. Irure proident veniam reprehenderit reprehenderit pariatur laboris sunt aute ea laboris. Sit laboris sunt minim adipisicing ullamco excepteur est magna. Ex et consectetur voluptate sunt est.</p>
                                <p className='mt-4'>Fugiat ad sit velit anim. Do veniam deserunt irure adipisicing. Cillum proident consequat non ipsum enim voluptate voluptate consectetur consequat amet commodo ut adipisicing. Fugiat proident dolor cillum laborum ipsum minim mollit ex cupidatat proident qui consectetur.</p>
                                <button className='mt-4 lg:mt-8 text-primary fw-600'>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section bg-stats bg-cover bg-center'>
                <div className='box'>
                    <div>
                        <p className='lg:text-2xl text-lg fw-600 lg:fw-700 text-center text-white'>Stats and Recent Accomplishments.</p>
                        <div className='lg:grid-3s justify-between mt-10 lg:mt-16'>
                            <div className='flex items-center justify-center bg-white lg:p-6 xl:px-12 rounded-lg'>
                                <TbTruckDelivery className='text-7xl'/>
                                <p className='fw-600 text-2xl ml-4'>200</p>
                                <div className='ml-4 mt-1 fs-700'>
                                    <p>Deliveries</p>
                                    <p className='relative -top-1'>Worldwide</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center bg-white lg:p-6 xl:px-12 rounded-lg'>
                                <FaUsers className='text-7xl'/>
                                <p className='fw-600 text-2xl ml-4'>3100</p>
                                <div className='ml-4 mt-1 fs-700'>
                                    <p>Satisfied</p>
                                    <p className='relative -top-1'>Clients</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center bg-white lg:p-6 xl:px-12 rounded-lg'>
                                <FiLayers  className='text-7xl'/>
                                <p className='ml-4 mt-1 text-2xl fw-500'>1200</p>
                                <div className='ml-4 mt-1 fs-700'>
                                    <p>Projects</p>
                                    <p className='relative -top-1'>Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* what we do */}
            <div className='section'>
                <div className='box lg:pt-12'>
                    <div className='lg:flex items-center'>
                        <div className='w-6/12'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904755/5mlog/Group_237727_pbqshc.png" alt="wwd" className='w-full lg:w-10/12 mx-auto' />
                        </div>
                        <div className='w-6/12'>
                            <p className='lg:text-2xl text-lg fw-600 lg:fw-700'>What we Do</p>
                            <div className='mt-8'>
                                <div className='flex'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904666/5mlog/Rectangle_19547_cuxzyk.png" alt="wwd" />
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='fw-600'>Air Freight</p>
                                        <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat. Morbi tristique magna non erat suscipit, vel aliquam elit iaculis.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Rectangle_19548_eyiogp.png" alt="wwd" />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Ocean Freight</p>
                                        <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat. Morbi tristique magna non erat suscipit, vel aliquam elit iaculis.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904666/5mlog/Rectangle_19549_yolvyo.png" alt="wwd" />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Ground Shipping</p>
                                        <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat. Morbi tristique magna non erat suscipit, vel aliquam elit iaculis.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Rectangle_19550_tcter1.png" alt="wwd" />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Package Delivery</p>
                                        <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat. Morbi tristique magna non erat suscipit, vel aliquam elit iaculis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* the process */}
            <div className='section bg-process lg:bg-fit'>
                <div className='box'>
                    <div>
                        <div>
                            <p  className='lg:text-2xl text-lg fw-600 lg:fw-700 text-center'>The Process</p>
                            <p className='lg:w-6/12 mx-auto text-center fs-500 mt-2'>We have created a seamless process that you can follow to receive your orders and the process is explained below.</p>
                        </div>
                        <div className='mt-8 lg:mt-12 lg:grid-3 justify-evenly'>
                            <div className='text-center shadow-md lg:py-12 px-5'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237747_mriujj.png' alt="process" className='mx-auto w-20' />
                                <p className='my-6 fs-700 fw-600'>Sign Up</p>
                                <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat.</p>
                            </div>
                            <div className='text-center shadow-md lg:py-12 px-5'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237748_qdcoyz.png' alt="process" className='mx-auto w-20' />
                                <p className='my-6 fs-700 fw-600'>Select a Service</p>
                                <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat.</p>
                            </div>
                            <div className='text-center shadow-md lg:py-12 px-5'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237746_e8x861.png' alt="process" className='mx-auto w-20' />
                                <p className='my-6 fs-700 fw-600'>Await your Delivery</p>
                                <p className='fs-500'>Duis ex mi, lacinia vel felis quis, sollicitudin fringilla odio. Integer quis viverra erat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reviws */}
            <div className='section'>
                <div className='box'>
                    <div className='lg:flex items-center'>
                        <div className='w-5/12 text-center'>
                            <p className='fs-400 text-gray-500'>Our Testimonials</p>
                            <p className='lg:text-2xl fw-600 mb-6'>What are our customers saying</p>
                            <p>Reprehenderit in irure non laborum enim sit adipisicing quis non et magna. Deserunt nostrud eiusmod Lorem sit. Do reprehenderit culpa irure adipisicing laborum incididunt do eiusmod velit. Qui labore cupidatat veniam enim officia eiusmod dolore elit commodo nisi.</p>
                        </div>
                        <div className='w-7/12'>
                            <Review/>
                        </div>
                    </div>
                </div>
            </div>
            {/* newsletter */}
            <div className='section'>
                <div className='box mb-12 lg:mb-24'>
                    <div>
                        <div>
                            <p className='lg:text-3xl text-lg fw-600 lg:fw-700 text-center'>Newsletter</p>
                            <p  className='text-center fs-500 mt-2'>Be the first to get notified on our latest news and updates</p>
                        </div>
                        <div className='lg:w-10/12 flex mt-6 lg:mt-12 mx-auto rounded-lg bg-white shadow-lg px-2 lg:px-4 lg:py-4 py-2'>
                            <input type="text" placeholder="your Email" className="py-3 px-6 bg-light lg:text-lg w-9/12"/>
                            <div className='w-3/12 pl-4'>
                                <button className='w-full lg:text-xl fw-600 py-3 bg-primary text-white pl-2'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}
