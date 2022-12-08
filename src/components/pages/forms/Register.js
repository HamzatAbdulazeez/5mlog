import React, {useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const Register = () => {

    const captchaRef = useRef(null)

  return (
    <div>
        <div>
            <form>
                <div className='lg:flex'>
                    <div className='lg:w-6/12 lg:pr-6'>
                        <label className='fw-500'>Full Name</label>
                        <input type="email" placeholder="Enter your full name" className="w-full p-2 lg:py-1 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                        <label className='fw-500'>Sex</label>
                        <select  className="w-full p-2 mt-2 lg:py-1 rounded border border-gray-400">
                            <option>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
                <div className='lg:flex mt-6 lg:mt-4'>
                    <div className='lg:w-6/12 lg:pr-6'>
                        <label className='fw-500'>Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                        <label className='fw-500'>Phone Number</label>
                        <input type="number" placeholder="Enter phone number" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='lg:w-6/12 lg:pr-6 mt-6 lg:mt-4'>
                        <label className='fw-500'>Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-4'>
                        <label className='fw-500'>Confirm Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                </div>
                <div className='flex items-start my-5'>
                    <input type="checkbox" className='mt-2 mr-3'/>
                    <p className='fs-500'>By Signing Up, I Agree to the Terms and Conditions and Privacy Policy</p>
                </div>
                <div className="mt-4 w-full overflow-hidden">
                    <ReCAPTCHA
                        sitekey="6Lc2fk4jAAAAALrd7ZbSKm0sFi9DH4XH1DMdFwzo"
                        ref={captchaRef}
                    />
                </div>
                <div className='mt-4'>
                    <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700'>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
