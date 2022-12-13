import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='lg:pt-16 lg:pb-10 bg-footer bg-cover xl:bg-fit w-full'>
            <div className='box text-center'>
                <div className='lg:flex justify-end'>
                  <div className='lg:w-3/12 relative pt-6 lg:pt-0 lg:-top-6'>
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669981185/5mlog/Rectangle_19575_c9zqi4.png" alt="logo" className='lg:w-auto mx-auto w-44 ' />
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237750_spbhv7.png" alt="logo" className='lg:w-44 w-36 mx-auto mt-8' />
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237751_dqkaep.png" alt="logo" className='lg:w-44 w-36 mx-auto mt-2' />
                  </div>
                  <div className='lg:w-8/12 lg:flex text-white'>
                    <div className='lg:w-3/12 mt-10 lg:mt-0'>
                      <p className='fw-600 text-xl mb-6 mt-4'>Links</p>
                      <ul>
                        <li className='mb-4'>Home</li>
                        <li className='mb-4'>About Us</li>
                        <li className='mb-4'>Services</li>
                        <li className='mb-4'>FAQs</li>
                        <li className='mb-4'>Contact Us</li>
                      </ul>
                    </div>
                    <div className='lg:w-3/12  mt-10 lg:mt-0'>
                      <p className='fw-600 text-xl mb-6 mt-4'>Company Policy</p>
                      <ul>
                        <li className='mb-4'>Terms of Services</li>
                        <li className='mb-4'>Privacy Policy</li>
                        <li className='mb-4'>Cookies</li>
                        <li className='mb-4'>User Agreement</li>
                        <li className='mb-4'>List of Contrabands</li>
                      </ul>
                    </div>
                    <div className='lg:w-3/12  mt-10 lg:mt-0'>
                      <p className='fw-600 text-xl mb-6 mt-4'>Our Services</p>
                      <ul>
                        <li className='mb-4'>Air Shipping</li>
                        <li className='mb-4'>Ocean Shipping</li>
                        <li className='mb-4'>Auto Shipping</li>
                        <li className='mb-4'>Pakage Delivery</li>
                        <li className='mb-4'>Clearing</li>
                      </ul>
                    </div>
                    <div className='lg:w-3/12  mt-10 lg:mt-0'>
                      <p className='fw-600 text-xl mb-6 mt-4'>Socials</p>
                      <ul>
                        <li className='mb-4'>Facebook</li>
                        <li className='mb-4'>Instagram</li>
                        <li className='mb-4'>Twitter</li>
                        <li className='mb-4'>LinkedIn</li>
                        <li className='mb-4'>Whatsapp</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='mt-6 border-t-2 text-center text-white fw-500 fs-500 pt-4 opacity-60'>
                  <p className='pb-6'>© {new Date().getFullYear() }  5M Logistics ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
