import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const RiderForm = () => {
  return (
    <div>
        <form >
            <div className='border-b border-gray-400 pb-4'>
                <p className='fw-500'>Please <Link to="/dashboard/settings" className='underline text-gray-500'>Click here</Link> to fill in your personal info.</p>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='block fw-600'>Service Information</p>
                <div className='mt-3'>
                    <label className='block mb-2 fw-500'>Type of Service Render</label>
                    <Select label='Service Type'>
                        <Option>Pickup Service</Option>
                        <Option>Inter-State Service</Option>
                        <Option>Oversea Shipping (Air Freight)</Option>
                        <Option>Oversea Shipping (Ocean Freight)</Option>
                        <Option>Express Shipping</Option>
                        <Option>Procurement Services</Option>
                    </Select>
                </div>
                <div className='mt-3'>
                    <label className='block mb-2 fw-500'>Means of Service(Vehicle Type)</label>
                    <div className='lg:flex items-center'>
                        <div className='lg:w-6/12 lg:pr-3'>
                            <Select label='Vehicle Type'>
                                <Option>Motor Bike</Option>
                                <Option>Car</Option>
                                <Option>Mini Van</Option>
                                <Option>Truck</Option>
                                <Option>Others</Option>
                            </Select>
                        </div>
                        <div className='lg:w-6/12 lg:pl-2'>
                            <Input label='Others (please state)'/>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='block mb-2 fw-500'>Preferred Route</label>
                    <Textarea label='Please Enter your preffered routes'/>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Account Information</p>
                <div className='mt-4'>
                    <Input type="text" name="sender_address" label="Bank Name" required />
                </div>
                <div className='mt-4'>
                    <Input type="text" name="sender_name" label="Account Holder Full Name" required />
                </div>
                <div className='mt-4'>
                    <Input type="number" name="sender_phone_number" label="Bank Account Number" required />
                </div>
                <div className='mt-4'>
                    <Input type="number" name="sender_phone_number" label="NIN" required />
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button className='btn-primary lg:px-16'>Update My Details</button>
            </div>
        </form>
  </div>
  )
}
