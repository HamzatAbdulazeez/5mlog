import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import {FaListOl} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import authHeader from '../../../services/auth-header'
import { Spinner } from '../../assets/Spinner'


export const DriverReport = () => {

    const { search } = useLocation();
    const orderId = new URLSearchParams(search).get("orderId");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchOrderDetails = async () =>{
        try {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/get/orders/by/order_id/${orderId}`
            const response = await axios.get(url, { headers: authHeader() });
            const  { data } = response.data
            const obj = data[0]
            setOrder(obj);
            setLoading(false);
            console.log(obj)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchOrderDetails() // eslint-disable-next-line 
    }, [])
    if(loading){
        return <Spinner/>
    } 

  return (
    <div className='min-h-screen'>
        <div className='shadow-lg p-4 bg-white'>
            <div className='pt-4 pr-4'>
                <p className='flex items-center fw-600 lg:text-xl'><span className='pr-1'><FaListOl/></span> Order Id: <span className='pl-2 text-primary'>{order?.order_id}</span><span className='text-primary pl-6'></span></p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6 lg:mt-0'>
            <div className='bg-white rounded-lg  p-5 mx-auto lg:p-10'>
                <div>
                    <p className='fw-500'>Driver Name:</p>
                    <div className='fw-600 mt-3 lg:w-6/12 border border-gray-400 rounded p-2'>{order?.delivery_report?.driver_assigned? 
                        <p>
                            {order?.delivery_report?.driver_assigned?.first_name +  " " + order?.delivery_report?.driver_assigned?.last_name}
                        </p> : "No details yet"}</div>
                </div>
                <div className='mt-5'>
                    <p className='fw-500'>Driver Remarks:</p>
                    <p className='fw-600 mt-3 h-48 lg:w-6/12 border border-gray-400 rounded p-2'>{order?.delivery_report?.status? order?.delivery_report?.status : "No report yet"}</p>
                </div>
                <div className='mt-5'>
                    <p className='fw-500'>Picture Proof:</p>
                    {
                        order?.delivery_report?.image?
                        <div className='border mt-6 lg:w-6/12'>
                            <img src={`${process.env.REACT_APP_MEDIA_URL+order?.delivery_report?.image}`} alt='report' className='w-full' />
                        </div>
                        :
                        <div className='border mt-6 lg:w-6/12'>
                            <p>No Image yet</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}