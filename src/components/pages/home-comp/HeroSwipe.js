import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


export const HeroSwipe = () => {
  return (
    <Swiper>
            <SwiperSlide>
                <div className='w-full flex items-center font-primary'>
                    <div className='w-7/12 relative -top-5'>
                        <p className='fw-600 lg:text-4xl lg:w-11/12 lg:tracking-wide'>We provide end-to-end Logistics solutions for Individuals, Companies and Government Agencies.</p>
                        <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                    </div>
                    <div className='w-5/12'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669978350/5mlog/Group_237754_1_r1wmg8.png" alt="hero1" className='w-11/12' />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
  )
}
