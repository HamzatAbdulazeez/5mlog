import React, {useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const ContactForm = () => {

    const captchaRef = useRef(null)

  return (
    <div>
        <div className='lg:flex'>
            <div className='lg:w-6/12 lg:pr-6'>
                <label className='fw-500'>First Name</label>
                <input type="text" placeholder="Enter your first name" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                <label className='fw-500'>Last Name</label>
                <input type="text" placeholder="Enter your last name" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
        </div>
        <div className='lg:flex mt-6 lg:mt-4'>
            <div className='lg:w-6/12 lg:pr-6'>
                <label className='fw-500'>Phone Number</label>
                <input type="text" placeholder="Enter phone number" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                <label className='fw-500'>Your Email</label>
                <input type="text" placeholder="Enter your email" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
        </div>
        <div className='mt-6'>
            <label className='fw-500'>Your Message</label>
            <textarea className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400 h-24"></textarea>
        </div>
        <div className="mt-4 w-full overflow-hidden">
            <ReCAPTCHA
                sitekey='6Ldn9IUjAAAAAH89eGuKD2wq2OGK6ugV-zHXxeEA'
                ref={captchaRef}
            />
        </div>
        <div className='text-end mt-6'>
            <button className='btn-primary'>Send Message</button>
        </div>
    </div>
  )
}
