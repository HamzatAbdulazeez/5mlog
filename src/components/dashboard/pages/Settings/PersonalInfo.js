import React from 'react'

export const PersonalInfo = () => {
  return (
    <div className='fs-500'>
        <form>
            <div className='lg:flex'>
                <div className='mt-6 lg:pr-2 lg:w-6/12'>
                    <label className='fw-500'>Full Name</label>
                    <input type="text" value="Green Mouse"  className='w-full p-2 border border-gray-400 rounded mt-2'/>
                </div>
                <div  className='mt-6 lg:pl-2 lg:w-6/12'>
                    <label className='fw-500'>Email</label>
                    <input type="text" value="Greenmouse@gmail.com" className='w-full p-2 border border-gray-400 rounded mt-2' />
                </div>
            </div>
            <div  className='lg:flex'>
                <div  className='mt-6 lg:pr-2 lg:w-6/12'>
                    <label className='fw-500'>Phone Number</label>
                    <input type="text" value="080 00000000" className='w-full p-2 border border-gray-400 rounded mt-2'/>
                </div>
                <div  className='mt-6 lg:pl-2 lg:w-6/12'>
                    <label className='fw-500'>City</label>
                    <input type="text" value="" className='w-full p-2 border border-gray-400 rounded mt-2' />
                </div>
            </div>
            <div  className='lg:flex '>
                <div  className='mt-6 lg:pr-2 lg:w-6/12'>
                    <label className='fw-500'>State</label>
                    <input type="text" value="" className='w-full p-2 border border-gray-400 rounded mt-2'/>
                </div>
                <div  className='mt-6 lg:pl-2 lg:w-6/12'>
                    <label className='fw-500'>Country</label>
                    <input type="text" value="" className='w-full p-2 border border-gray-400 rounded mt-2'/>
                </div>
            </div>
            <div className='text-end mt-8'><button className='btn-primary'>Update</button></div>
        </form>
    </div>
  )
}
