import React, {useRef, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Register = () => {

    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const captchaRef = useRef(null)

  return (
    <div className='flex lg:h-screen items-center'>
        <div className='lg:w-7/12 px-8 lg:px-0 overflow-y-scroll lg:py-8'>
            <div className='lg:w-10/12 xl:w-8/12 mx-auto'>
                <Link to="/">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt='register' className='lg:pt-12 relative -left-4 lg:left-0' />
                </Link>
                <p className='my-6 fw-600 text-xl lg:text-2xl'>Sign Up!</p>
            </div>
            <div className='lg:w-10/12 xl:w-8/12 mx-auto'>
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
                    <div className='lg:flex mt-6 lg:mt-4'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Refferal</label>
                            <input type="text" placeholder="Enter referral code (if any)" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                            <label className='fw-500'>Account User Typpe</label>
                            <select  className="w-full p-2 mt-2 lg:py-1 rounded border border-gray-400">
                                <option>Select UserType</option>
                                <option>Dispatch</option>
                                <option>Driver</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6 mt-6 lg:mt-4'>
                            <label className='fw-500'>Password</label>
                            {/* <input type="password" placeholder="Enter your password" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/> */}
                            <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                <input
                                    type={passwordType}
                                    placeholder="Enter your password"
                                    className="w-full border-0 py-2 px-2 rounded"
                                />
                                <div onClick={togglePassword} className="px-3">
                                    {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-4'>
                            <label className='fw-500'>Confirm Password</label>
                            <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                <input
                                    type={passwordType}
                                    placeholder="Confirm your password"
                                    className="w-full border-0 py-2 px-2 rounded"
                                />
                                <div onClick={togglePassword} className="px-3">
                                    {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                </div>
                            </div>
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
                    <div className='mt-8'>
                        <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700'>
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className='mt-6'>Already have an account? <Link to="/login" className="fw-500 text-green-600">Log In</Link></p>
            </div>
        </div>
        <div className='lg:w-5/12 lg:block hidden border h-screen bg-register bg-cover fixed right-0'>

        </div>
    </div>
  )
}
