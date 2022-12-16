import React from 'react'
import { Link } from 'react-router-dom'

export const AdminLogin = () => {
  return (
    <div>
        <div className='bg-dark-pri'>
            <div className='flex justify-center items-center h-screen '>
                <div className='lg:w-5/12 shadow-lg xl:w-4/12 w-11/12 py-6 px-5 lg:px-10 bg-white'>
                    <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt="logo" className='lg:w-24 w-16 mx-auto' /></Link>
                    <form>
                        <div>
                            <label className='fw-500'>Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='mt-6'>
                            <label className='fw-500'>Password</label>
                            <input type="password" placeholder="Enter your password" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='mt-8 mb-4'>
                            <button className='w-full text-center py-2 bg-dark-pri rounded-md text-white fw-600 fs-700'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
