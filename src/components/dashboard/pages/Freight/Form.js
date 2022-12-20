import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React from 'react'

export const FreightForm = () => {
  return (
    <div>
        <form>
            <div className='border-b border-gray-400 pb-6'>
                <label className='block fw-600 mb-4'>Preffered Freight Service</label>
                <Select label='Select Freight'>
                    <Option>Air Freight</Option>
                    <Option>Oceean Freight</Option>
                </Select>
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
                <p className='mt-4 fw-600'>Shipping From</p>
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
            <div className='mt-6 text-end'>
                <button className='btn-primary lg:px-16'>Proceed</button>
            </div>
        </form>
    </div>
  )
}