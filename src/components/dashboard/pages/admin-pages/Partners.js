import React, {useEffect} from 'react'
import { FaUsers } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getPartners } from '../../../../store/slices/users';
import { Spinner2 } from '../../../assets/Spinner';
import { PartnerTable } from '../../assets/Tables/Admin-Table/partner';

export const Partners = () => {

  const dispatch = useDispatch()

    const success = useSelector((state) => state.userlist.success);

    useEffect(() => {
        dispatch(getPartners())
    }, [dispatch])

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-partner bg-center text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>5M Global Partners</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>View details and monitors users (partners) on your this site.</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-2xl text-primary"><FaUsers/></span>Partners Listing</p>
                </div>
                <div>
                    { success === false?  <Spinner2/> : <PartnerTable />}
                </div>
            </div>
        </div>
    </div>
  )
}
