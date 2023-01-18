import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { FaArrowLeft, FaListOl, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import authHeader from '../../../../services/auth-header'
import { Spinner } from '../../../assets/Spinner'

export const DriverOrderDetails = () => {
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
            <div>
                <Link to="/dashboard/my-orders"><p className='flex items-center text-gray-600 '><span className='pr-4'><FaArrowLeft/></span>Orders</p></Link>
            </div>
            <div className='pt-4 pr-4'>
                <p className='flex items-center fw-600 lg:text-xl'><span className='pr-1'><FaListOl/></span> Order Id: <span className='pl-2 text-primary'>{order?.order_id}</span><span className='text-primary pl-6'></span></p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6 lg:mt-0'>
            <div className='bg-white rounded-lg  p-5 mx-auto lg:p-10'>
                <div className='bg-white lg:grid-3s justify-between '>
                    <div className='shadow-lg lg:p-6 p-3 rounded-lg bg-red-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span> PickUp</p>
                        <p className='flex items-center fw-600 text-xl'>{order?.order_id}</p>
                        <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span>{order?.pickup_address? order?.pickup_address : order?.package_address? order?.package_address : order?.shipping_from_street_address? order?.shipping_from_street_address + " " + order?.shipping_from_city : "Null" }</p>
                        <p className='flex fs-500 mt-2'>{order?.shipping_from_state_province_region? order?.shipping_from_state_province_region : "Lagos"} {order?.shipping_from_country? order?.shipping_from_country : "Nigeria"}.</p>
                        <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span>{order?.sender_phone_number? order?.sender_phone_number : "Null"}</p>
                    </div>
                    <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-green-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Dropoff</p>
                        <p className='flex items-center fw-600 text-xl'>{order?.order_id}</p>
                        <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span> {order?.dropoff_address? order?.dropoff_address : order?.shipping_to_street_address? order?.shipping_to_street_address + " " + order?.shipping_to_city : "Null"}</p>
                        <p className='flex fs-500 mt-2'>{order?.shipping_to_state_province_region? order?.shipping_to_state_province_region : "Lagos"} {order?.shipping_to_country? order?.shipping_to_country : "Nigeria"}.</p>
                        <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span>{order?.receiver_phone_number? order?.receiver_phone_number : "Null"}</p>
                    </div>
                    <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-blue-100'>
                    <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Logistics Info</p>
                    <p className='flex items-center fw-600 text-xl bg-light p-2 mt-2 rounded overflow-scroll'>{order?.tracking_number}</p>
                    <p className='mt-3'><span>Order Status:</span><span className='pl-2'>{order?.status}</span></p>
                    <p className='mt-2'><span>Vehicle Type:</span><span className='pl-2'>{order?.pickup_vehicle}</span></p>
                    <p className='mt-2'><span>Estimated Delivery Time:</span><span className='pl-2'>{ order?.estimated_delivery_time? order?.estimated_delivery_time : "In view"}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
