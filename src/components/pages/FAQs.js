import React from 'react'
import Accordion from './home-comp/Accordion'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'

export const FAQs = () => {
  return (
    <div>
        <Header/>
         {/* faq hero */}
         <div className='bg-faq lg:bg-fit bg-cover lg:h-80 h-44'>
            <div className='box h-full'>
                <div className='grid h-full items-center'>
                    <p className='lg:text-3xl fw-700 text-white'>Frequently Asked Questions</p>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div>
                    <p className='text-center text-2xl fw-700 py-4'>Popular Questions</p>
                    <div className='lg:mt-16 lg:w-10/12 mt-10 mx-auto'>
                        <Accordion/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
