import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import {FaListOl} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import authHeader from '../../../services/auth-header'
import { Spinner } from '../../assets/Spinner'
import { Button } from '@material-tailwind/react'
import jsPDF from 'jspdf'
import { formatPriceNgn } from '../assets/RegexFormat/Format'
import dayjs from 'dayjs'


export const PrintPayment = () => {

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
    const generatePDF = () => {

        const width = document.getElementById('report').offsetWidth
        const height = document.getElementById('report').offsetHeight

        const report = new jsPDF('p','pt',[width, height]);
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
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
                    <div className='p-5 w-01 fs-500 mx-auto border-2 rounded border-gray-500' id='report'>
                        <div className=''>
                            <div className='w-5/12'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904666/5mlog/Rectangle_19530_wiuj5i.png' className='w-28' alt='' />
                            </div>
                            <div className='mt-5'>
                                <p className='fw-600'>{order?.service_type} <span>Service</span></p>
                                <div className='flex'>
                                    <p className='mt-4 fw-500 w-6/12'>{order?.order_id}</p>
                                    <p className='mt-4 fw-500 w-6/12'>{dayjs(order?.created_at).format('YYYY-MM-DD')}<span className='block'>{dayjs(order?.created_at).format('HH:MM')}</span></p>
                                </div>
                                <p className='mt-4 fw-600'>Amount Paid: <span className='pl-3'>{ order?.price? formatPriceNgn(order?.price) : "Paid"}</span></p>
                            </div>
                            <div className='flex mt-5'>
                                <div className='w-6/12 pr-3'>
                                    <div>
                                        <p className='fw-500'>From:</p>
                                    </div>
                                    <div>
                                        <p>{order?.pickup_address? order?.pickup_address : order?.package_address? order?.package_address : order?.shipping_from_street_address? order?.shipping_from_street_address + " " + order?.shipping_from_city : "" }</p>
                                        <p>{order?.shipping_from_state_province_region? order?.shipping_from_state_province_region : ""} {order?.shipping_from_country? order?.shipping_from_country : ""}</p>
                                    </div>
                                </div>
                                <div className='w-6/12'>
                                    <div>
                                        <p  className='fw-500'>To:</p>
                                    </div>
                                    <div>
                                        <p>{order?.dropoff_address? order?.dropoff_address : order?.shipping_to_street_address? order?.shipping_to_street_address + " " + order?.shipping_to_city : ""}</p>
                                        <p>{order?.shipping_to_state_province_region? order?.shipping_to_state_province_region : ""} {order?.shipping_to_country? order?.shipping_to_country : ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' pt-3'>
                        {
                            order?.service_type === "Pickup" || order?.service_type === "InterState" ? 
                                <div>
                                    <div className='py-2 flex'>
                                        <p className='w-4/12 lg:w-3/12 fw-500'>Name:</p>
                                        <p>{order?.sender_name}</p>
                                    </div>
                                    <div className='py-2 flex'>
                                        <p className='w-4/12 lg:w-3/12 fw-500'>Phone:</p>
                                        <p>{order?.sender_phone_number}</p>
                                    </div>
                                    <div className='py-2 flex'>
                                        <p className='w-4/12 lg:w-3/12 fw-500'>Address:</p>
                                        <p className='w-8/12 lg:w-9/12'>{order?.sender_address}</p>
                                    </div>
                                </div>
                            : ""
                        }
                        { order?.service_type === "Pickup" || order?.service_type === "InterState" ?  "" :
                                <div>
                                    <div className='py-2 flex'>
                                    <div className='lg:w-6/12'>
                                        <p className='w-3/12 fw-500'>Name:</p>
                                        <p>{order?.owner_full_name? order?.owner_full_name : "Null"}</p>
                                    </div>
                                    <div className='lg:w-6/12  mt-6 lg:mt-0'>
                                        <p className='w-3/12 fw-500'>Email:</p>
                                        <p>{order?.owner_email? order?.owner_email : "Null"}</p>
                                    </div>
                                </div>
                                <div className='py-2 flex '>
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
                <div className='text-center mt-6'>
                    <Button onClick={generatePDF} className='bg-primary'>
                        Save/Print
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}