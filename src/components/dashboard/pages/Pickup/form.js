import { Input } from '@material-tailwind/react'
import React from 'react'

export const PickupForm = () => {
  return (
    <div>
        <form>
            <div className='border-b border-gray-400 pb-4'>
                <p className='block fw-600'>Preffered Vehicle for Pickup</p>
                <div className='flex mt-4'>
                    <div className='w-6/12 lg:w-3/12'>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Motor Bike</label>
                    </div>
                    <div className=''>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Car</label>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-6/12 lg:w-3/12'>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Mini Van</label>
                    </div>
                    <div className=''>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Truck</label>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Pick Location</p>
                <div className='mt-4'>
                    <Input type="text" label="Pickup Address"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Drop-off Address"/>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Sender's Info</p>
                <div className='mt-4'>
                    <Input type="text" label="Enter complete address of sender"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Sender's Name"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Sender's Phone Number"/>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Receiver's Info</p>
                <div className='mt-4'>
                    <Input type="text" label="Enter complete address of receiver"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Receiver's Name"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Receiver's Phone Number"/>
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button className='btn-primary lg:px-16'>Proceed</button>
            </div>
        </form>
    </div>
  )
}
