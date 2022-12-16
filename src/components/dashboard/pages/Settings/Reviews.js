import React from 'react'

export const Reviews = () => {
  return (
    <div>
        <form>
            <div className='mt-6'>
                <label className='fw-500'>Name</label>
                <input type="text"   className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='mt-6'>
                <label className='fw-500'>Profession</label>
                <input type="text"   className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='mt-6'>
                <label className='fw-500'>Review</label>
                <textarea className='w-full h-24 p-2 border border-gray-400 rounded mt-2'></textarea>
            </div>
            <div className='text-end mt-8'><button className='btn-primary'>Submit</button></div>
        </form>
    </div>
  )
}
