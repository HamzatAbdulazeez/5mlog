import React, {useState} from 'react'
import { Input, Select, Option, Button } from '@material-tailwind/react'
import { FaTimes } from 'react-icons/fa'

export const Staff = () => {
    const[staff, setStaff] = useState(false)
    const staffModal = () => {
        setStaff(true)
    }
    const CloseModal = () => {
        setStaff(false)
    }

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-users  lg:bg-fill bg-cover  text-white w-full bg-white lg:flex justify-between items-center lg:pl-12 px-4'>
            <div className=''>
                <p className='fw-600 lg:text-2xl text-xl'>5M Logistics Staff</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Store and manage informations of all staffs in 5M Logistics.</p>
            </div>
            {/* add inventory */}
            <div className=''>
                <button onClick={staffModal} className="bg-primary fw-600 px-4 lg:px-7 py-2 rounded-md shadow-xl">Add New Staff</button>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6'>
            <div className='bg-white p-5 lg:p-10 rounded'>

            </div>
        </div>
        {
            staff && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-4'>Add New Staff</p>
                        <div className='lg:px-6 py-6'>
                            <div>
                                <form>
                                    <div>
                                      <label className='fs-500 mb-2 block'>Full Name</label>
                                      <Input type="text" label="Full Name of Staff" />
                                    </div>
                                    <div className='mt-5'>
                                      <label className='fs-500 mb-2 block'>Position / Level</label>
                                      <Input type="text" label="" />
                                    </div>
                                    {/* <div className='lg:flex'>
                                        <div className='mt-5 lg:w-6/12 lg:pr-2'>
                                            <label className='fs-500 mb-2 block'>Quantity (units)</label>
                                            <Input type="text" label="Number of items" />
                                        </div>
                                        <div className='mt-5 lg:w-6/12 lg:pl-2'>
                                            <label className='fs-500 mb-2 block'>Net Value ($)</label>
                                            <Input type="text" label="Net Value" />
                                        </div>
                                    </div> */}
                                    <div  className='mt-5'>
                                        <label className='fs-500 mb-2 block'>Staff Location</label>
                                        <Select label='Select Type'>
                                            <Option>Houston Texas</Option>
                                            <Option>Ikeja Lagos</Option>
                                            <Option>Abuja</Option>
                                            <Option>Ogbomoso Oyo</Option>
                                            <Option>Ahafsusan Kaduna</Option>
                                        </Select>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Date Joined</label>
                                            <Input type="date" label="" />
                                        </div>
                                        <div className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Contact No</label>
                                            <Input type="number" label="Phone number" />
                                        </div>
                                    </div>
                                    <div className='text-end mt-6'>
                                        <Button className='bg-primary lg:px-10'>Create Staff</Button>
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
