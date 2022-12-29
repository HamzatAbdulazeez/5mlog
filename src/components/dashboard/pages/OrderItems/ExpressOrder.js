import { Input, Option, Select } from '@material-tailwind/react'
import React from 'react'
import { FaListAlt, FaSearch } from 'react-icons/fa'
import { UserOrderTable } from '../../assets/Tables/UserOrder'

export const ExpressOrderUser = () => {
  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Express Shipping Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and monitor the transportation of your items.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center'><sapn className="pr-2"><FaListAlt/></sapn>Orders Listing</p>
                </div>
                <div className='mb-6 lg:flex justify-between'>
                    <div className='lg:w-3/12'>
                        <Input type="search" label="Search Order" icon={<FaSearch/>} />
                    </div>
                    <div className='lg:w-3/12'>
                        <Select label="Select Status">
                            <Option>New</Option>
                            <Option>Ongoing</Option>
                            <Option>Delivered</Option>
                        </Select>
                    </div>
                </div>
                <div>
                    <UserOrderTable/>
                </div>
            </div>
        </div>
    </div>
  )
}