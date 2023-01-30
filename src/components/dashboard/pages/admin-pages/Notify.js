import { Avatar } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { MdNotificationsActive } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { getAllNotify } from '../../../../store/slices/notify'

export const Notification = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllNotify())
    })
  return (
    <div className='min-h-screen'>
        <div className='p-1'>
            <div className='bg-white p-5 flex justify-center shadow-md'>
                <p className='fw-600 lg:text-xl fs-600 flex items-center'><span className='text-xl text-primary pr-2'><MdNotificationsActive/></span>Notifications (2)</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mx-auto'>
            <div className='lg:w-9/12 mx-auto'>
                <div className='bg-white unread lg:p-4 p-2 flex shadow mt-2'>
                    <Avatar src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671296462/5mlog/icons8-delivery-van-67_nrcygq.png' alt='notiify' className='bg-gray-100'/>
                    <div className='pl-3'>
                        <label className='bg-blue-100 text-blue-700 fs-200 fw-500 p-1 rounded'>Pickup Service</label>
                        <p>A customer has requested for a pickup service to ikeja from ogba.</p>
                        <p className='italic fs-300'>5 min ago</p>
                    </div>
                </div>
                <div className='bg-white unread lg:p-4 p-2 flex shadow mt-2'>
                    <Avatar src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671296462/5mlog/icons8-truck-64_lolbe8.png' alt='notiify' className='bg-gray-100'/>
                    <div className='pl-3'>
                        <label className='bg-orange-100 text-orange-700 fs-200 fw-500 p-1 rounded'>Oversea Shipping</label>
                        <p>A customer has requested for a pickup service to ikeja from ogba.</p>
                        <p className='italic fs-300'>5 min ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
