import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from 'react-router-dom';

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
        className='lg:max-h-03 max-h-72 lg:mt-0'
        >
            <SwiperSlide>
                <div className='bg-log bg-cover bg-center h-full'>
                    <div className='box h-full flex items-center font-primary'>
                        <div className='lg:w-7/12 w-9/12 lg:relative text-white'>
                            <p className='fw-600 lg:text-4xl text-xl lg:w-11/12 lg:tracking-wide'>We provide end-to-end <span className=''>Logistics</span> solutions for Individuals, Companies and Government Agencies.</p>
                            <Link to="/"><button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button></Link>
                        </div>
                        {/* <div className='w-5/12'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669978350/5mlog/Group_237754_1_r1wmg8.png" alt="hero1" className='w-11/12' />
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-air lg:bg-fit bg-cover bg-center h-full'>
                    <div className='box h-full flex items-center font-primary'>
                        <div className='w-8/12 lg:w-7/12 text-white lg:relative top-5'>
                            <p className='fw-600 text-xl lg:text-4xl lg:w-11/12 lg:tracking-wide'><sapn className="hidden lg:inline">Our efficient global logistics network and delivery service provides </sapn><span className='text-orange-400 fw-700'>Air freight</span> and logistics transportation services.</p>
                            <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                        </div>
                        {/* <div className='w-5/12 relative -top-4 lg:top-0'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473627/5mlog/Group_237785_rssvaq.png" alt="hero1" className='lg:w-11/12 w-full' />
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-ocean lg:bg-fit bg-cover bg-center h-full'>
                    <div className='box h-full flex items-center font-primary'>
                        <div className='w-8/12 lg:w-7/12 lg:relative text-white'>
                            <p className='fw-600 text-xl lg:text-4xl lg:w-11/12 lg:tracking-wide'>Sea and <span className='fw-700 text-red-400'>ocean freight</span> and shipment  services globally.</p>
                            <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                        </div>
                        {/* <div className='w-6/12 relative -top-5 lg:-top-10'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473631/5mlog/Group_237762_r8khfw.png" alt="hero1" className='w-full' />
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='bg-ware lg:bg-fit bg-cover bg-center h-full'>
                    <div className='box h-full flex items-center font-primary'>
                        <div className='w-9/12 lg:w-6/12 relative text-white'>
                            <p className='fw-600 text-xl lg:text-4xl lg:w-11/12 lg:tracking-wide'>We provide safe <span className='fw-700 text-pink-700'>warehouse management</span> services to protect your goods in the meantime.</p>
                            <button className='lg:px-10 px-5 shadow-md fw-600 text-white lg:py-4 py-2 rounded-md bg-primary mt-10'>Get Started</button>
                        </div>
                        {/* <div className='w-6/12 relative -top-6'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670473600/5mlog/Group_237786_xhxm1v.png" alt="hero1" className='w-11/12' />
                        </div> */}
                    </div>
               </div>
            </SwiperSlide>
    </Swiper>
  )
}
