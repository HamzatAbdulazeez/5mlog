import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { FaArrowLeft, FaListOl, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import authHeader from '../../../services/auth-header'
import { Spinner } from '../../assets/Spinner'
import { capitalizeFirstLetter, formatPrice } from '../assets/RegexFormat/Format'
import { OrderProgress } from './OrderItems/OrderProgress'

export const OrderDetailUser = () => {

    const { search } = useLocation();
    const orderId = new URLSearchParams(search).get("orderId");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const user = useSelector((state) => state.auth.user)

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
                {
                    user.account_type === "Customer" || user.account_type === "Partner" ?
                    <Link to="/dashboard/myorders"><p className='flex items-center text-gray-600 '><span className='pr-4'><FaArrowLeft/></span>Orders</p></Link>
                    :
                    ''
                }
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
                    <p className='flex items-center fw-600 text-xl'>{order?.tracking_number}</p>
                    <p className='mt-6'><span>Order Status:</span><span className='pl-2'>{order?.status}</span></p>
                    <p className='mt-2'><span>Vehicle Type:</span><span className='pl-2'>{order?.pickup_vehicle}</span></p>
                    <p className='mt-2'><span>Estimated Delivery Time:</span><span className='pl-2'>{ order?.estimated_delivery_time? order?.estimated_delivery_time : "In view"}</span></p>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto mt-8 py-10 overflow-scroll md:overflow-visible lg:py-20'>
                    <OrderProgress order={order}/>
                </div>
                <div className='lg:grid-83 mt-8 lg:mt-12'>
                    <div  className='lg:p-6 p-5 lg:grid-2 text-black rounded-lg shadow-lg bg-light'>
                        <div>
                            <div>
                                <p className='fw-600'>Package Name</p>
                                <p className='mt-1'>{ order?.package_name? order?.package_name : "Null"}</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-600'>Preferred Transport</p>
                                <p className='mt-1'>{order?.pickup_vehicle? capitalizeFirstLetter(order?.pickup_vehicle) : order?.freight_service? order?.freight_service : "Null"}</p>
                            </div>
                        </div>
                        <div className='mt-6 lg:mt-0'>
                            <div>
                                <p className='fw-600'>Package Value</p>
                                <p className='mt-1'>{ order?.value? "$" + order?.value : order?.package_value? "$" + order?.package_value : "Null"}</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-600'>Package Weight</p>
                                <p className='mt-1'>{ order?.weight? order?.weight + "LBS" : order?.package_weight? order?.package_weight + "LBS" : "Null"}</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='fw-600'>Package Description</p>
                            <p className='mt-1'>{ order?.description? order?.description : order?.package_description? order?.package_description : "Null"}</p>
                        </div>
                    </div>
                    <div className='lg:p-6 p-5 mt-6 lg:mt-0 rounded-lg shadow-lg bg-light text-blue-800 grid place-content-center text-center'>
                        <div className='text-'>
                            <p className='fw-600'>Price</p>
                            <p className='text-xl fw-600'>NGN {formatPrice(order?.price? order.price : "In View")}</p>
                        </div>
                    </div>
                </div>
                {
                    order?.service_type === "Pickup" || order?.service_type === "InterState" ? 
                    <div className='lg:grid-2 justify-between mt-8 lg:mt-12'>
                        <div className='bg-light lg:p-6 p-5 shadow-md rounded'>
                            <p className='fw-600 pb-4'>Sender's Information</p>
                            <div className='py-2 border-b border-gray-300 flex'>
                                <p className='w-4/12 lg:w-3/12 fw-500'>Name:</p>
                                <p>{order?.sender_name}</p>
                            </div>
                            <div className='py-2 border-b border-gray-300 flex'>
                                <p className='w-4/12 lg:w-3/12 fw-500'>Phone:</p>
                                <p>{order?.sender_phone_number}</p>
                            </div>
                            <div className='py-2 border-b border-gray-300 flex'>
                                <p className='w-4/12 lg:w-3/12 fw-500'>Address:</p>
                                <p className='w-8/12 lg:w-9/12'>{order?.sender_address}</p>
                            </div>
                        </div>
                        <div className='bg-light lg:p-6 mt-6 lg:mt-0 p-5 shadow-md rounded'>
                            <p className='fw-600 pb-4'>Receiver's Information</p>
                            <div className='py-2 border-b border-gray-300 flex'>
                                <p className='w-4/12 lg:w-3/12 fw-500'>Name:</p>
                                <p>{order?.receiver_name}</p>
                            </div>
                            <div className='py-2 border-b border-gray-300 flex'>
                                <p className='w-4/12 lg:w-3/12 fw-500'>Phone:</p>
                                <p>{order?.receiver_phone_number}</p>
                            </div>
                            <div className='py-2 border-b border-gray-300 flex'>
                                <p className='w-4/12 lg:w-3/12 fw-500'>Address:</p>
                                <p className='w-8/12 lg:w-9/12'>{order?.receiver_address}</p>
                            </div>
                        </div>
                    </div>
                    : ""
                }
                { order?.service_type === "Pickup" || order?.service_type === "InterState" ?  "" :
                    <div className='bg-light lg:p-6 mt-7 lg:mt-12 p-5 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Sender's Information</p>
                        <div className='py-2 lg:flex border-b border-gray-300'>
                            <div className='lg:w-6/12'>
                                <p className='w-3/12 fw-500'>Name:</p>
                                <p>{order?.owner_full_name? order?.owner_full_name : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12  mt-6 lg:mt-0'>
                                <p className='w-3/12 fw-500'>Email:</p>
                                <p>{order?.owner_email? order?.owner_email : "Null"}</p>
                            </div>
                        </div>
                        <div className='py-2 lg:flex border-b border-gray-300'>
                            <div className='lg:w-6/12  mt-6 lg:mt-0'>
                                <p className='fw-500'>Phone Number:</p>
                                <p>{order?.owner_phone_number? order?.owner_phone_number : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12 mt-6 lg:mt-0'>
                                <p className='w-3/12 fw-500'>Address:</p>
                                <p>{order?.owner_address? order?.owner_address : "Null"}</p>
                            </div>
                        </div>
                    </div> 
                }
            </div>
        </div>
    </div>
  )
}
