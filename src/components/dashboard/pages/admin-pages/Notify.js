import { Avatar } from '@material-tailwind/react'
import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect} from 'react'
import { MdNotificationsActive } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotify } from '../../../../store/slices/notify'

export const Notification = () => {

    const token = JSON.parse(localStorage.getItem('lynchpin'));


    const dispatch = useDispatch()
    const item = useSelector((state) => state.notify.allNotify)

    useEffect(() => {
        dispatch(getAllNotify())
    }, [dispatch])

    const ReadNotify = ( id) => {
        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL }/read/notification/${id}`,
            headers: { 
                'Authorization': 'Bearer ' + token 
            }
        }
        return axios(config);
    }
    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(getAllNotify())
    //     }, 1000);
    // }, [ReadNotify])

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
  return (
    <div className='min-h-screen'>
        <div className='p-1'>
            <div className='bg-white p-5 flex justify-center shadow-md'>
                <p className='fw-600 lg:text-xl fs-600 flex items-center'><span className='text-xl text-primary pr-2'><MdNotificationsActive/></span>Notifications ({item?.length})</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mx-auto'>
            
            {
                item.length > 0? 
                item.map(item => (
                    <div className='lg:w-9/12 mx-auto' key={item.id}>
                        {
                            item?.status === 'Unread'?
                            <div className='bg-white unread lg:p-4 p-2 flex shadow mt-2' onClick={()=>{ReadNotify(item?.id)}}>
                                {
                                    item?.subject === "5M Logistics"?
                                    <Avatar src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275776/5mlog/logo_2_tndgql.png' alt='notiify' className='bg-gray-100'/>
                                    :
                                    <Avatar src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671296462/5mlog/icons8-delivery-van-67_nrcygq.png' alt='notiify' className='bg-gray-100'/>
                                }
                                <div className='pl-3'>
                                    {
                                        item?.subject === "5M Logistics"?
                                        <label className='bg-blue-100 text-blue-700 fs-200 fw-500 p-1 rounded'>{item?.subject}</label>
                                        :
                                        <label className='bg-orange-100 text-orange-700 fs-200 fw-500 p-1 rounded'>{item?.subject}</label>
                                    }
                                    <p>{item?.message}</p>
                                    <p className='italic fs-300'>{dayjs(item?.created_at).fromNow() }</p>
                                </div>
                            </div>
                        :
                        <div className='bg-white lg:p-4 p-2 flex shadow mt-2'>
                            {
                                item?.subject === "5M Logistics"?
                                <Avatar src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671275776/5mlog/logo_2_tndgql.png' alt='notiify' className='bg-gray-100'/>
                                :
                                <Avatar src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671296462/5mlog/icons8-delivery-van-67_nrcygq.png' alt='notiify' className='bg-gray-100'/>
                            }
                            <div className='pl-3'>
                                {
                                    item?.subject === "5M Logistics"?
                                    <label className='bg-blue-100 text-blue-700 fs-200 fw-500 p-1 rounded'>{item?.subject}</label>
                                    :
                                    <label className='bg-orange-100 text-orange-700 fs-200 fw-500 p-1 rounded'>{item?.subject}</label>
                                }
                                <p>{item?.message}</p>
                                <p className='italic fs-300'>{dayjs(item?.created_at).fromNow() }</p>
                            </div>
                        </div>
                        }
                    </div>
                ))
                :
                <p className='text-center'>No Notifications</p>
            }
        </div>
    </div>
  )
}
