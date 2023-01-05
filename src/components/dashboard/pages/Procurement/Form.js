import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React from 'react'

export const ProcureForm = () => {
  return (
    <div>
        <form>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Item Information</p>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3 overflow-hidden'>
                        <Input type="text" label="Item Name (as inputted during item purchase)"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="number" label="Item Quantity"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Select label='Item type'>
                            <Option>Mobile Gadgets</Option>
                            <Option>Electronics</Option>
                            <Option>Bags</Option>
                            <Option>Clothings</Option>
                            <Option>Working tools</Option>
                        </Select>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="text" label="Store Name (e.g Amazon)"/>
                    </div>
                </div>
                <div className='mt-4'>
                    <Textarea type="text" label="Description"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Tracking ID (optional)"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Value ($)"/>
                </div>
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Owner's Infomation</p>
                <div className='mt-4'>
                    <Input type="text" label="Full Name"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Address"/>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="text" label="Email"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="text" label="Phone Number"/>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Shipment Information</p>
                <div className='mt-4'>
                    <Input type="date" label="Date of Shipment"/>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="text" label="City"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="text" label="State / Province / Region"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="text" label="Zip / Postal Code"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="text" label="Country"/>
                    </div>
                </div>
                <p className='mt-4 fw-600'>Shipping To</p>
                <div className='mt-2'>
                    <Input type="text" label="Street Address"/>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="text" label="City"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="text" label="State / Province / Region"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                        <Input type="text" label="Zip / Postal Code"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                        <Input type="text" label="Country"/>
                    </div>
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button className='btn-primary lg:px-16'>Proceed</button>
            </div>
        </form>
    </div>
  )
}