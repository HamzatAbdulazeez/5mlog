import { Button } from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { FaListOl, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'
import axios from 'axios'
import authHeader from '../../services/auth-header'
import { Spinner2 } from '../assets/Spinner'
import { useLocation, useNavigate } from 'react-router'


export const TrackDetails = () => {
    const auth = useSelector((state) => state.auth);
    const { search } = useLocation();
    const trackId = new URLSearchParams(search).get("trackId");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const fetchTrackDetails = async () =>{
        try {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/general/track/orders/${trackId}`
            const response = await axios.get(url, { headers: authHeader() });
            const  { data } = response.data
            const obj = data[0]
            setOrder(obj);
            setLoading(false);
            console.log(data)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchTrackDetails() // eslint-disable-next-line 
    }, [])
    if(loading){
        return <Spinner2/>
    } 

  return (
    <div className='font-primary fs-500 lg:fs-600'>
        <Header/>
        <div className='section'>
            <div className='box'>
                <div>
                    <p className='lg:text-2xl text-lg fw-600'>Track your Shipment</p>
                    <p className='h-1 w-48 bg-primary'></p>
                </div>
                <div className='lg:grid-83 lg:mt-12 mt-7'>
                    <div className='bg-light shadow-lg lg:p-6 px-3 py-4'>
                        <div className='mb-6'>
                            <p>Current status:</p>
                            <p className='text-lg lg:text-2xl'>{order?.status}</p>
                        </div>
                        <div className='flex'>
                            <div className='w-4/12 pr-1'>
                                <p className='p-1 lg:p-2 bg-primary'></p>
                                <div className='lg:p-4 py-4 px-2 bg-op'>
                                    Dispatched
                                </div>
                            </div>
                            {
                                order?.status === "Dispatch"?
                                <div className='w-4/12 pr-1'>
                                    <p className='p-1 lg:p-2 bg-primary'></p>
                                    <div className='lg:p-4 py-4 px-2'>
                                        Ongoing
                                    </div>
                                </div>
                                :
                                <div className='w-4/12 pr-1'>
                                    <p className='p-1 lg:p-2 bg-primary'></p>
                                    <div className='lg:p-4 py-4 px-2 bg-op'>
                                        Ongoing
                                    </div>
                                </div>
                            }
                            {
                                order?.status === "Completed"? 
                                <div className='w-4/12'>
                                    <p className='p-1 lg:p-2 bg-primary'></p>
                                    <div className='lg:p-4 py-4 px-2 bg-op'>
                                        Completed
                                    </div>
                                </div>
                                :
                                <div className='w-4/12'>
                                    <p className='p-1 lg:p-2 bg-primary'></p>
                                    <div className='lg:p-4 py-4 px-2'>
                                        Completed
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='lg:grid-2 lg:mt-8 mt-6'>
                            <div>
                                <p className='fw-500 lg:fs-700 fs-600'>Estimated delivery time:</p>
                                <p>{order?.estimated_delivery_time}</p>
                            </div>
                            <div className=' mt-6 lg:mt-0'>
                                <p className='fw-500 lg:fs-700 fs-600'>Delivery Location:</p>
                                <p> {order?.dropoff_address? order?.dropoff_address : order?.shipping_to_street_address? order?.shipping_to_street_address + " " + order?.shipping_to_city : "Null"}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light mt-6 lg:mt-0 shadow-lg lg:p-6 px-3 py-4'>
                        <div>
                            <div>
                                <p className='fw-500'>Service Type:</p>
                                <p className='fs-500'>{order?.service_type}</p>
                            </div>
                            <div className='mt-3'>
                                <p className='fw-500'>Tracking Number:</p>
                                <p className='fs-500'>{order?.tracking_number}</p>
                            </div>
                            <div className='mt-3'>
                                <p className='fw-500'>Package Description:</p>
                                <p className='fs-500'>{order?.package_description}</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Button className='w-full bg-primary' onClick={() => navigate('/contact')}>Contact Us</Button>
                        </div>
                    </div>
                </div>
                {auth.isLoggedIn? 
                    <div className='bg-white lg:grid-3s justify-between mt-8 lg:mt-12'>
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
                            <p className='flex fs-500 mt-2'>{order?.shipping_to_state_province_region? order?.shipping_to_state_province_region : ""} {order?.shipping_to_country? order?.shipping_to_country : ""}.</p>
                            <p className='flex fs-500 mt-2 flex items-center'><span className='pr-2'><FaPhoneAlt/></span>{order?.receiver_phone_number? order?.receiver_phone_number : "Null"}</p>
                        </div>
                        <div className='shadow-lg lg:p-6 p-3 mt-6 lg:mt-0 rounded-lg bg-blue-100'>
                         <p className='flex items-center text-gray-600 fs-500'><span className='pr-1'><FaListOl/></span>Logistics Info</p>
                            <p className='flex items-center fw-600 text-xl'>{order?.tracking_number}</p>
                            <p className='mt-6'><span>Order Status:</span><span className='pl-2'>{order?.status}</span></p>
                            <p className='mt-2'><span>Vehicle Type:</span><span className='pl-2'>{order?.pickup_vehicle}</span></p>
                            <p className='mt-2'><span>Estimated Delivery Time:</span><span className='pl-2'>{ order?.estimated_delivery_time? order?.estimated_delivery_time : "In view"}</span></p>
                        </div>
                    </div> : null} 
            </div>
        </div>
        <Footer/>
    </div>
  )
}
