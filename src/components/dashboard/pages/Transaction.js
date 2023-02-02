import React from 'react'
import { useEffect } from 'react'
import { GiPayMoney } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { getTransact } from '../../../store/slices/TransactService'
import { Spinner2 } from '../../assets/Spinner'
import { TransactTable } from '../assets/Tables/Transaction'

export const TransactionUser = () => {

    const dispatch = useDispatch()
    const item = useSelector((state) => state.transact.transact)
    const success = useSelector((state) => state.success)


    useEffect(() => {
        dispatch(getTransact())
    }, [dispatch])

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Transactions</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and monitor the payament made for deliveries of your items.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center'><span className="pr-2 text-primary text-xl"><GiPayMoney/></span>Transaction Listing</p>
                </div>
                <div>
                    {success === false? <Spinner2/> : 
                    <div>
                        {
                            item.length > 0? <TransactTable item={item}/>  : "No transaction"
                        }
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}