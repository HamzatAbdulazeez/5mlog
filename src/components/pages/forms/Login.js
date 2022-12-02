import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <div>
            <form>
                <div>
                    <label className='fw-500'>Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-between'>
                        <label className='fw-500'>Password</label>
                        <Link to="/forget" className='fs-400 fw-500 text-primary'>Forget password ?</Link>
                    </div>
                    <input type="password" placeholder="Enter your password" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                </div>
                <div className='mt-8'>
                    <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
