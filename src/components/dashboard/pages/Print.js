import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import {FaListOl} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import authHeader from '../../../services/auth-header'
import { Spinner } from '../../assets/Spinner'
import Barcode from 'react-barcode';
import { Button } from '@material-tailwind/react'
import jsPDF from 'jspdf'


export const PrintReceipt = () => {

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
                    <div className='p-5 w-03 fs-500 mx-auto border-2 rounded border-gray-500' id='report'>
                        <div className='flex items-center'>
                            <div className='w-5/12 border-r border-gray-500'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904666/5mlog/Rectangle_19530_wiuj5i.png' className='w-36' alt='' />
                            </div>
                            <div className='w-7/12 pl-4'>
                                <div>
                                    <p className='fw-500'>From:</p>
                                </div>
                                <div>
                                    <p>{order?.pickup_address? order?.pickup_address : order?.package_address? order?.package_address : order?.shipping_from_street_address? order?.shipping_from_street_address + " " + order?.shipping_from_city : "" }</p>
                                    <p>{order?.shipping_from_state_province_region? order?.shipping_from_state_province_region : ""} {order?.shipping_from_country? order?.shipping_from_country : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-y py-3 border-gray-500 flex items-center'>
                            <div className='w-6/12'>
                                <div>
                                    <p  className='fw-500'>To:</p>
                                </div>
                                <div>
                                    <p>{order?.dropoff_address? order?.dropoff_address : order?.shipping_to_street_address? order?.shipping_to_street_address + " " + order?.shipping_to_city : ""}</p>
                                    <p>{order?.shipping_to_state_province_region? order?.shipping_to_state_province_region : ""} {order?.shipping_to_country? order?.shipping_to_country : ""}</p>
                                </div>
                            </div>
                            <div className='w-6/12 flex justify-center bg-light'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1675259126/5mlog/fragile-removebg-preview_hbmxdy.png' alt='fragile' className='w-48' />
                            </div>
                        </div>
                        <div className=' pt-3'>
                            <div className='w-5/12'>
                                <p className='fw-600'>Order ID:</p>
                                <p>{order?.order_id}</p>
                            </div>
                            <div className='mt-3 overflow-hidden'>
                                <Barcode 
                                    className="w-full" 
                                    width={0.6}
                                    text= "Scan"
                                    value={`https:5mlogistics.com/tracking?trackId=${order?.tracking_number}`} 
                                    />
                            </div>
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