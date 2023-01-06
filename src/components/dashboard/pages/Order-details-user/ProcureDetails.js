import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { FaArrowLeft, FaListOl, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'
import { FcShipped } from 'react-icons/fc'
import { Link, useLocation } from 'react-router-dom'
import authHeader from '../../../../services/auth-header'
import { Spinner } from '../../../assets/Spinner'
import { capitalizeFirstLetter, formatPrice } from '../../assets/RegexFormat/Format'
import { OrderProgress } from '../OrderItems/OrderProgress'

export const ProcureDetailUser = () => {

    const { search } = useLocation();
    const orderId = new URLSearchParams(search).get("orderId");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchOrderDetails = async () =>{
        try {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/track/orders/${orderId}`
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
                <Link to="/dashboard/myorders"><p className='flex items-center text-gray-600 '><span className='pr-4'><FaArrowLeft/></span>Orders</p></Link>
            </div>
            <div className='pt-4 pr-4'>
                <p className='flex items-center fw-600 text-xl'><span className='pr-1'><FaListOl/></span> Order Id: ORD-R456-56782<span className='text-primary pl-6'></span></p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6 lg:mt-0'>
            <div className='bg-white rounded-lg  p-5 mx-auto lg:p-10'>
                <div className='bg-light rounded-lg lg:mb-10 shadow-lg'>
                    <p className='fw-600 bg-green-100 rounded-t-lg lg:px-10 py-6 text-xl uppercase'>Item Information</p>
                    <div className='lg:px-10 lg:py-8 p-4'>
                        <div className='lg:flex '>
                            <div className='lg:w-6/12 border-b border-gray-300 pb-3'>
                                <p className='w-3/12 fw-500'>Name:</p>
                                <p>{order?.item_name? order?.item_name : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3 lg:pt-0'>
                                <p className='w-3/12 fw-500'>Type:</p>
                                <p>{order?.item_type? order?.item_type : "Null"}</p>
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3'>
                                <p className='w-3/12 fw-500'>Store Name:</p>
                                <p>{order?.item_store_name? order?.item_store_name : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3'>
                                <p className='w-3/12 fw-500'>Quantity:</p>
                                <p>{order?.item_value? order?.item_value + "unit(s)" : "Null"}</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <p className='w-3/12 fw-500'>Description:</p>
                            <p className='w-full shadow-md bg-white p-2 h-24 rounded-lg mt-2'>{order?.item_description? order?.item_description : "No Entry"}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white lg:grid-3s justify-between '>
                    <div className='shadow-lg lg:p-6 p-3 rounded-lg bg-red-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FcShipped/></span>Shipping From</p>
                        <p className='flex items-center fw-600 text-xl'>ORD-R456-56782</p>
                        <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span>{order?.pickup_address? order?.pickup_address : order?.package_address? order?.package_address : order?.shipping_from_street_address? order?.shipping_from_street_address + " " + order?.shipping_from_city : "Null" }</p>
                        <p className='flex fs-500 mt-2'>{order?.shipping_from_state_province_region? order?.shipping_from_state_province_region : "Lagos"} {order?.shipping_from_country? order?.shipping_from_country : "Nigeria"}.</p>
                        <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span>{order?.sender_phone_number? order?.sender_phone_number : "Null"}</p>
                    </div>
                    <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-green-100'>
                        <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Dropoff</p>
                        <p className='flex items-center fw-600 text-xl'>ORD-R456-56782</p>
                        <p className='flex fs-500 mt-6'><span className='pr-1 mt-1'><FaSearchLocation/></span> {order?.dropoff_address? order?.dropoff_address : order?.shipping_to_street_address? order?.shipping_to_street_address + " " + order?.shipping_to_city : "Null"}</p>
                        <p className='flex fs-500 mt-2'>{order?.shipping_to_state_province_region? order?.shipping_to_state_province_region : "Lagos"} {order?.shipping_to_country? order?.shipping_to_country : "Nigeria"}.</p>
                        <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span>{order?.receiver_phone_number? order?.receiver_phone_number : "Null"}</p>
                    </div>
                    <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-blue-100'>
                    <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Logistics Info</p>
                    <p className='flex items-center fw-600 text-xl'>{order?.tracking_number}</p>
                    <p className='mt-6'><span>Order Status:</span><span className='pl-2'>{order?.status}</span></p>
                    <p className='mt-2'><span>Vehicle Type:</span><span className='pl-2'>{order?.pickup_vehicle}</span></p>
                    <p className='mt-2'><span>Estimated Delivery Time:</span><span className='pl-2'>{ order?.delivery_time? order?.delivery_time : "In view"}</span></p>
                    </div>
                </div>
                <div className='lg:w-11/12 mx-auto mt-8 py-10 overflow-scroll md:overflow-visible lg:py-20'>
                    <OrderProgress/>
                </div>
                <div className='lg:grid-83 mt-8 lg:mt-12'>
                    <div  className='lg:p-6 p-5 lg:grid-2 text-black rounded-lg shadow-lg bg-light'>
                        <div>
                            <div>
                                <p className='fw-600'>Name</p>
                                <p className='mt-1'>{ order?.owner_full_name? order?.owner_full_name : "Null"}</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-600'>Address</p>
                                <p className='mt-1'>{order?.owner_address? capitalizeFirstLetter(order?.owner_address) : order?.freight_service? order?.freight_service : "Null"}</p>
                            </div>
                        </div>
                        <div className='mt-6 lg:mt-0'>
                            <div>
                                <p className='fw-600'>Email</p>
                                <p className='mt-1'>{ order?.owner_email?  order?.owner_email : "Null" }</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-600'>Phone Number</p>
                                <p className='mt-1'>{ order?.owner_phone_number? order?.owner_phone_number : "Null"}</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='fw-600'>Preffered Date of Shipment</p>
                            <p className='mt-1'>{ order?.date_of_shipment? order?.date_of_shipment : "Null"}</p>
                        </div>
                    </div>
                    <div className='lg:p-6 p-5 mt-6 lg:mt-0 rounded-lg shadow-lg bg-light text-blue-800 grid place-content-center text-center'>
                        <div className='text-'>
                            <p className='fw-600'>Price</p>
                            <p className='text-xl fw-600'>NGN {formatPrice(order?.price? order.price : "In View")}</p>
                        </div>
                    </div>
                </div>
                {/* <div className='lg:grid-2 justify-between mt-8 lg:mt-12'>
                    <div className='bg-light lg:p-6 p-5 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Sender's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>{order?.sender_name}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Phone:</p>
                            <p>{order?.sender_phone_number}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Address:</p>
                            <p>{order?.sender_address}</p>
                        </div>
                    </div>
                    <div className='bg-light lg:p-6 mt-6 lg:mt-0 p-5 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Receiver's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>{order?.receiver_name}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Phone:</p>
                            <p>{order?.receiver_phone_number}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Address:</p>
                            <p>{order?.receiver_address}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-light lg:p-6 mt-7 lg:mt-12 p-5 shadow-md rounded'>
                    <p className='fw-600 pb-4'>Owner's Information</p>
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
                            <p className='lg:w-3/12 fw-500'>Phone Number:</p>
                            <p>{order?.owner_phone_number? order?.owner_phone_number : "Null"}</p>
                        </div>
                        <div className='lg:w-6/12 mt-6 lg:mt-0'>
                            <p className='w-3/12 fw-500'>Address:</p>
                            <p>{order?.owner_address? order?.owner_address : "Null"}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}