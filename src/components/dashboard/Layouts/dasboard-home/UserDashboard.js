import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { TbTruckDelivery, TbPackgeExport } from "react-icons/tb"

export const UserDashboard = () => {
  return (
    <div>
        <div  className="min-h-screen fs-500 relative">
            {/* header */}
            <div className="w-full py-8 bg-white px-4">
                <p className="text-2xl fw-600">Hello User</p>
                <p className="fs-400 text-gray-600 mt-2">Access our various services on your dashboard.</p>
                <Breadcrumbs className="bg-white pl-0 mt-4">
                    <Link to="/" className="opacity-60">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                    <Link to="/" className="opacity-60">
                        <span>Dashboard</span>
                    </Link>
                </Breadcrumbs>
            </div> 
            <div className='lg:grid-4 justify-evenly mt-6'>
                <div className='border shadow-xl flex py-8 rounded bg-green-100'>
                    <div className='w-4/12 grid place-content-center'>
                        <div className='bg-primary text-3xl w-12 h-12 circle grid place-content-center'>
                            <TbTruckDelivery/>
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <p className='text-4xl fw-600'>34</p>
                        <p className='fs-400'>Total Deliveries</p>
                    </div>
                </div>
                <div className='border shadow-xl flex py-8 rounded bg-blue-100'>
                    <div className='w-4/12 grid place-content-center'>
                        <div className='bg-blue-400 text-3xl w-12 h-12 circle grid place-content-center'>
                            <TbPackgeExport/>
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <p className='text-4xl fw-600'>14</p>
                        <p className='fs-400'>Delivery Request</p>
                    </div>
                </div>
                <div className='border shadow-xl flex py-8 rounded bg-orange-100'>
                    <div className='w-4/12 grid place-content-center'>
                        <div className='bg-orange-400 text-3xl w-12 h-12 circle grid place-content-center'>
                            <TbPackgeExport/>
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <p className='text-4xl fw-600'>10</p>
                        <p className='fs-400'>Ongoing Deliveries</p>
                    </div>
                </div>
                <div className='border shadow-xl flex py-8 rounded bg-red-100'>
                    <div className='w-4/12 grid place-content-center'>
                        <div className='bg-red-400 text-3xl w-12 h-12 circle grid place-content-center'>
                            <TbPackgeExport/>
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <p className='text-4xl fw-600'>14</p>
                        <p className='fs-400'>Delivered Orders</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
