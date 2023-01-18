import React, { useEffect } from 'react'
import { GoPackage } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrder } from '../../../../store/slices/driverOrder'
import { Spinner2 } from '../../../assets/Spinner'
import { MyOrderTable } from '../../assets/Tables/Driver-table/myOrder'

export const MyOrder = () => {

    const dispatch = useDispatch()
    const success = useSelector((state) => state.driver.success)

    useEffect(() => {
        dispatch(getMyOrder())
    }, [dispatch])

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-freight bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 text-xl lg:text-2xl'>My Orders</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>View and manage orders from customer / partners which are assigned to you.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3'>
          <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-primary text-2xl"><GoPackage/></span>My Order Listing</p>
                </div>
                <div>
                    {success === false?  <Spinner2/> : <MyOrderTable/>}
                </div>
            </div>
        </div>
    </div>
  )
}
