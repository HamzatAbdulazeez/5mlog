import React from 'react'
import { DashBoardPendingOrders } from '../../assets/Tables/DPendingOrders'
import { GoPackage } from 'react-icons/go'

export const MyOrder = () => {
  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-freight bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 text-xl lg:text-2xl'>My Orders</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>View and manage orders from customer / partners which are assigned to you..</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3'>
          <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-primary text-2xl"><GoPackage/></span>My Order Listing</p>
                </div>
                <div>
                    <DashBoardPendingOrders/>
                </div>
            </div>
        </div>
    </div>
  )
}
