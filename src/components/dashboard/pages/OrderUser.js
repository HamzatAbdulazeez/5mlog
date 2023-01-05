import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getPickupOrder } from '../../../store/slices/userOrder'

export const OrderUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const success = useSelector((state) => state.order.success);
    let order = useSelector((state) => state.order.userOrder);

    useEffect(() => {
        dispatch(getPickupOrder())
    }, [dispatch])
    const pickup = order.length;
    const pickupNew = order.filter(where => where.status === "Pending" );
    const pickupNews = pickupNew.length

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>My Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and monitor the transportation of your items.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-5 shadow rounded-lg'>
                <div>
                    <p className='text-xl fw-600 text-center border-b pb-5'>Select the service to view the respective order(s)</p>
                </div>
                <div className='lg:grid-3sm md:grid-2 gap-y-7 lg:gap-y-12 lg:mt-6 py-6'>
                    <div className='bg-orange-200 mt-6 lg:mt-0 hover:scale-105 duration-500 flex items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/pickup-order")}}>
                        <div className='w-6/12 text-orange-800 py-8 fw-600 text-center text-lg h-full px-6 bg-orange-100 grid place-content-center'>
                            <div>
                                <p>PickUp</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-orange-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "" : pickupNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "" : pickup}</p></div>
                        </div>
                    </div>
                    <div className='bg-blue-200  mt-6 lg:mt-0  flex hover:scale-105 duration-500  items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/interstate-order")}}>
                        <div className='w-6/12 text-blue-800 py-8 fw-600 text-center text-lg h-full px-6 bg-blue-100 grid place-content-center'>
                            <div>
                                <p>Inter-State</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-blue-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>1</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>10</p></div>
                        </div>
                    </div>
                    <div className='bg-green-200  mt-6 lg:mt-0  flex hover:scale-105 duration-500  items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/oversea-order")}}>
                        <div className='w-6/12 text-green-800 py-8 fw-600 text-center text-lg px-6 h-full bg-green-100 grid place-content-center'>
                            <div>
                                <p>Oversea Shipping</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-green-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>1</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>10</p></div>
                        </div>
                    </div>
                    <div className='bg-purple-200 mt-6 lg:mt-0  hover:scale-105 duration-500 flex items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/procure-order")}}>
                        <div className='w-6/12 text-purple-800 py-8 fw-600 text-center text-lg h-full px-6 bg-purple-100 grid place-content-center'>
                            <div>
                                <p>Procurements</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-purple-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>1</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>10</p></div>
                        </div>
                    </div>
                    <div className='bg-yellow-200 mt-6 lg:mt-0  hover:scale-105 duration-500 flex items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/express-order")}}>
                        <div className='w-6/12 text-yellow-800 py-8 fw-600 text-center text-lg h-full px-6 bg-yellow-100 grid place-contents-center'>
                            <div>
                                <p>Express Shipping</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-yellow-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>1</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>10</p></div>
                        </div>
                    </div>
                    <div className='bg-red-200 mt-6 lg:mt-0  hover:scale-105 duration-500 flex items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/warehouse-order")}}>
                        <div className='w-6/12 text-red-800 py-8 fw-600 text-center text-lg px-6 bg-red-100  h-full grid place-content-center'>
                            <div>
                                <p>Warehousing</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-red-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>1</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>10</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
