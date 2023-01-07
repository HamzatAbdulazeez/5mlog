import React, {useState} from 'react'
import { BsPeople } from 'react-icons/bs'
import { AdminOrderTable } from '../../assets/Tables/adminOrder'
import { Input, Select, Option, Button } from '@material-tailwind/react'
import { FaTimes } from 'react-icons/fa'


export const Subadmin = () => {

  const[admin, setAdmin] = useState(false)
    const adminModal = () => {
        setAdmin(true)
    }
    const CloseModal = () => {
        setAdmin(false)
    }

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Sub-Admins</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Create and manage subadmins on the site to deliver the best service to users.</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 mt-6 px-3'>
          <div className='lg:p-10 p-5 bg-green-100 shadow-lg rounded-lg'>
              <p className='fw-600 text-center text-lg lg:text-xl'>Create Dispatchers and Drivers for efficent rendering of services</p>
              <div className='text-center mt-6'>
                <button className='lg:px-12 btn bg-black text-white lg:text-lg fw-600' onClick={adminModal}>Create Now</button>
              </div>
          </div>
          <div className='lg:p-10 p-5 mt-8 bg-white rounded-lg'>
            <div className='mb-6'>
                    <p className='fw-600 flex items-center'><span className="pr-2 text-xl text-orange-600"><BsPeople/></span>Sub-admin(s) Listing</p>
                </div>
              <AdminOrderTable/>
          </div>
        </div>
        {
            admin && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-4'>Create New Admin</p>
                        <div className='lg:px-6 py-6'>
                            <div>
                                <form>
                                    <div>
                                      <label className='fs-500 mb-2 block'>Email</label>
                                      <Input type="email" label="Enter email" />
                                    </div>
                                    <div className='mt-5'>
                                      <label className='fs-500 mb-2 block'>Password</label>
                                      <Input type="password" label="Enter password" />
                                    </div>
                                    <div  className='my-5'>
                                        <label className='fs-500 mb-2 block'>Admin Type</label>
                                        <Select label='Select Type'>
                                            <Option>Dispatcher</Option>
                                            <Option>Driver</Option>
                                        </Select>
                                    </div>
                                    <div className='text-end mt-6'>
                                        <Button className='bg-primary lg:px-10'>Create Admin</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}
