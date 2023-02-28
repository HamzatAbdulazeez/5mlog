import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { FaArrowLeft, FaListOl } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import authHeader from '../../../../services/auth-header'
import { Spinner } from '../../../assets/Spinner'

export const WarehouseDetailUser = () => {

    const user = useSelector((state) => state.auth.user)
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
                {
                    user.account_type === "Customer" || user.account_type === "Partner" ?
                    <Link to="/dashboard/myorders"><p className='flex items-center text-gray-600 '><span className='pr-4'><FaArrowLeft/></span>Orders</p></Link>
                    :
                    ''
                }
            </div>
            <div className='pt-4 pr-4'>
                <p className='flex items-center overflow-x-scroll fw-600 lg:text-xl'><span className='pr-1'><FaListOl/></span> Order Id: <span className='text-primary pl-3'>{order?.order_id}</span><span className='text-primary pl-6'></span></p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6 lg:mt-0'>
            <div className='bg-white rounded-lg  p-5 mx-auto lg:p-10'>
                <div className='bg-light rounded-lg lg:mb-10 shadow-lg'>
                    <p className='fw-600 bg-green-100 rounded-t-lg lg:px-10 px-4 py-6 text-lg lg:text-xl uppercase'>Package Information</p>
                    <div className='lg:px-10 lg:py-8 p-4'>
                        <div className='lg:flex '>
                            <div className='lg:w-6/12 border-b border-gray-300 pb-3'>
                                <p className='w-3/12 fw-500'>Name:</p>
                                <p>{order?.package_name? order?.package_name : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3 lg:pt-0'>
                                <p className='w-3/12 fw-500'>Quantity:</p>
                                <p>{order?.package_quantity? order?.package_quantity  + "unit(s)" : "Null"}</p>
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3'>
                                <p className='w-3/12 fw-500'>Weight(each):</p>
                                <p>{order?.package_weight? order?.package_weight : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3'>
                                <p className='w-3/12 fw-500'>Dimension:</p>
                                <p>{order?.package_dimension? order?.package_dimension : "Null"}</p>
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3'>
                                <p className='w-3/12 fw-500'>Value:</p>
                                <p>{order?.package_value? order?.package_value : "Null"}</p>
                            </div>
                            <div className='lg:w-6/12 border-b border-gray-300 py-3'>
                                <p className='w-3/12 fw-500'>Service:</p>
                                <p>Warehousing</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <p className='w-3/12 fw-500'>Description:</p>
                            <p className='w-full shadow-md bg-white p-2 h-24 rounded-lg mt-2'>{order?.package_description? order?.package_description : "Null"}</p>
                        </div>
                    </div>
                </div>
                <div className='lg:grid-2 justify-between mt-8 lg:mt-12'>
                    <div className='bg-light lg:p-6 p-5 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Storage Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-4/12 lg:w-3/12 fw-500'>Location:</p>
                            <p>{order?.warehouse_location}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-4/12 lg:w-3/12 fw-500'>Start Date:</p>
                            <p>{order?.storage_start_date}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-4/12 lg:w-3/12 fw-500'>End Date:</p>
                            <p>{order?.storage_end_date}</p>
                        </div>
                    </div>
                    <div className='bg-light lg:p-6 mt-6 lg:mt-0 p-5 shadow-md rounded'>
                        <p className='fw-600 pb-4'>Customer's Information</p>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Name:</p>
                            <p>{order?.owner_full_name}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Phone:</p>
                            <p>{order?.owner_phone_number}</p>
                        </div>
                        <div className='py-2 border-b border-gray-300 flex'>
                            <p className='w-3/12 fw-500'>Address:</p>
                            <p>{order?.owner_address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}