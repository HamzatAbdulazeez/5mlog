import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React from 'react'

export const WarehouseForm = () => {
  return (
    <div>
        <form>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Warehouse Location</p>
                <div className='mt-4'>
                    <Select label='Select Warehouse Location'>
                        <Option>Houston Texas</Option>
                        <Option>Lagos Ikeja</Option>
                        <Option>Plaza Abuja</Option>
                        <Option>Ogbomosho Oyo</Option>
                    </Select>
                </div>
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Package Information</p>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="text" label="Package Name"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="number" label="Pakage Quantity"/>
                    </div>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Dimensions (L*W*H)"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Weight (LBS)"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Value ($)"/>
                </div>
                <div className='mt-4'>
                    <Textarea type="text" label="Description"/>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Storage Infomation</p>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="date" label="Start Date"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="date" label="End Date"/>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Owner's Information</p>
                <div className='mt-4'>
                    <Input type="text" label="Name"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Phone Number"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Enter complete address"/>
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button className='btn-primary lg:px-16'>Proceed</button>
            </div>
        </form>
    </div>
  )
}
