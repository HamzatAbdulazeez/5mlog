import React from 'react'

export const Security = () => {
  return (
    <div className='fw-500'>
        <form>
            <div className='mt-6'>
                <label className='fw-500'>Old Password</label>
                <input type="password"   className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='mt-6'>
                <label className='fw-500'>New Password</label>
                <input type="password"   className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='mt-6'>
                <label className='fw-500'>Confirm New Password</label>
                <input type="password"   className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='text-end mt-8'><button className='btn-primary'>Update</button></div>
        </form>
    </div>
  )
}
