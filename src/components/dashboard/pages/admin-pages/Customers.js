import React, {useEffect} from 'react'
import { FaUsers } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers } from '../../../../store/slices/users'
import { Spinner2 } from '../../../assets/Spinner'
import { CustomerTable } from '../../assets/Tables/Admin-Table/customer'

export const Customers = () => {

    const dispatch = useDispatch()

    const success = useSelector((state) => state.userlist.success);

    useEffect(() => {
        dispatch(getCustomers())
    }, [dispatch])

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-users  lg:bg-fill bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>5M Global Customers</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>View details and monitors users (customers) on your this site.</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-2xl text-blue-400"><FaUsers/></span>Customers Listing</p>
                </div>
                <div>
                    { success === false?  <Spinner2/> : <CustomerTable />}
                </div>
            </div>
        </div>
    </div>
  )
}
