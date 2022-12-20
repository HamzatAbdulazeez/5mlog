import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { Track } from './home-comp/Track'

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
        <div className='section bg-light'>
            <div className='box'>
                <div>
                    <div className='text-center relative lg:py-6' >
                        <p className='fw-600 lg:text-2xl'>What We Do</p>
                        <p className='w-8 mx-auto h-1 mt-2 bg-black'></p>
                        <p className='absolute hidden lg:block w-02 border text-8xl top-0 left-1/4 opacity-10 fw-600 text-gray-400'>SERVICES</p>
                    </div>
                    <div className='lg:grid-2 justify-between items-center bg-light lg:mt-12 mt-10'>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-0 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671135730/5mlog/5mlog-removebg-preview_ldzwir.png" alt="services" className='lg:w-9/12 mx' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600'>Logistics</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>Daily delivery to clients at any destination seamlessly and without damaging through trucking or bike shipping to your doorstep is made possible in the shortest possible time available to clients.</p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-0 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670492401/5mlog/Rectangle_10_1_orf93q.png" alt="services" className='lg:w-9/12  ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Air Freight</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>We offer air freight services to handle both your international freight forwarding and domestic delivery in a seamless and timely pattern to suit your needs.</p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473610/5mlog/Rectangle_19600_hfc0wv.png" alt="services" className='lg:w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Ocean Freight</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>We offer ocean freight, depending on your choice of transportation shipping containers worth of goods from 20ft to 40ft to their final destination without hassle or risks involved.</p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671135374/5mlog/Rectangle_185_dxvvfk.png" alt="services" className='lg:w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Warehousing</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>We offer a good network of warehouses to take care of your Warehousing need. Our Warehousing services are designed to add value to your business. </p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670492401/5mlog/Rectangle_10_1_orf93q.png" alt="services" className='lg:w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Procurement</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>With our wealth of experience in product sourcing, negotiation and supply chain management, we can help do your procurement in a cost-effective way.</p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473614/5mlog/Rectangle_19599_q73ooh.png" alt="services" className='lg:w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Export Packaging</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>We specialize in large item packaging, specialty crating and heavy equipments packaging for exportation, covering several countries.</p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671135374/5mlog/Rectangle_186_wdnw5d.png" alt="services" className='lg:w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Same-Day delivery</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>When you need your shipment at any destination of your choice in the shortest possible time; We provide reliable, quality and affordable same delivery of your goods and services. </p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10 lg:h-64'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670492401/5mlog/Rectangle_10_1_orf93q.png" alt="services" className='lg:w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Express Shipping</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>We also offer express shipping to shorten the delivery time of your item, in this case accelerate the shipping process.</p>
                                <Link to="/login" className="text-primary mt-3 lg:mt-5 fw-600">Get Started</Link>
                            </div>
                        </div>
                        {/* <div className='border lg:flex flex-row-reverse p-5 bg-white shadow-md mt-6 lg:mt-10'>
                            <div className='lg:w-4/12 grid place-content-center'>
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670492401/5mlog/Rectangle_10_1_orf93q.png" alt="services" className='w-9/12 ar-32' />
                            </div>
                            <div className='lg:w-8/12 lg:pr-8'>
                                <p className='text-lg fw-600 lg:mt-0 mt-4'>Door-to-Door Delivery</p>
                                <p className='my-7 fs-500 lg:mt-7 mt-4'>When you need your shipment at any destination of your choice in the shortest possible time; then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <Track/>
    </div>
  )
}
