import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const HeroSwipe = () => {
  return (
    <Swiper
        pagination={{
        clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]} 
        autoplay={{delay:5000}}
        slidesPerView="1"
        mousewheel={true}
        direction="vertical"
        effect="fade"
        fadeEffect= {{ crossFade: true }}
        className='lg:max-h-03 max-h-52 mt-4 lg:mt-0'
        >
            <SwiperSlide>
                <div className='w-full flex items-center font-primary'>
                    <div className='w-7/12 lg:relative -top-5'>
                        <p className='fw-600 lg:text-4xl lg:w-11/12 lg:tracking-wide'>We provide end-to-end Logistics solutions for Individuals, Companies and Government Agencies.</p>
                        <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                    </div>
                    <div className='w-5/12'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669978350/5mlog/Group_237754_1_r1wmg8.png" alt="hero1" className='w-11/12' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full flex items-center font-primary'>
                    <div className='w-7/12 lg:relative top-5'>
                        <p className='fw-600 lg:text-4xl lg:w-11/12 lg:tracking-wide'>Our efficient global logistics network and delivery service provides Air freight and logistics transportation services.</p>
                        <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                    </div>
                    <div className='w-5/12 relative -top-4 lg:top-0'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473627/5mlog/Group_237785_rssvaq.png" alt="hero1" className='lg:w-11/12 w-full' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full flex items-center font-primary'>
                    <div className='w-6/12 lg:relative -top-10'>
                        <p className='fw-600 lg:text-4xl lg:w-11/12 lg:tracking-wide'>Sea and ocean freight and shipment  services globally.</p>
                        <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                    </div>
                    <div className='w-6/12 relative -top-5 lg:-top-10'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473631/5mlog/Group_237762_r8khfw.png" alt="hero1" className='w-full' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full flex items-center font-primary'>
                    <div className='w-6/12 relative lg:-top-2'>
                        <p className='fw-600 lg:text-4xl lg:w-11/12 lg:tracking-wide'>Land shipping and package delivery to individuals and organisations.</p>
                        <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                    </div>
                    <div className='w-6/12 relative -top-6'>
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473600/5mlog/Group_237786_xhxm1v.png" alt="hero1" className='w-11/12' />
                    </div>
                </div>
            </SwiperSlide>
    </Swiper>
  )
}
