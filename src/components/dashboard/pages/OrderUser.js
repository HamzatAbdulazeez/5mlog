import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getExpressOrder, getInterstateOrder, getOverseaOrder, getPickupOrder, getProcureOrder, getWarehouseOrder } from '../../../store/slices/userOrder'

export const OrderUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const success = useSelector((state) => state.order.success);
    let order = useSelector((state) => state.order.userOrder);
    let interstate = useSelector((state) => state.order.interstateOrder);
    let oversea = useSelector((state) => state.order.overseaOrder);
    let procurement = useSelector((state) => state.order.procureOrder);
    let express = useSelector((state) => state.order.expressOrder);
    let warehouse = useSelector((state) => state.order.warehouseOrder);

    useEffect(() => {
        dispatch(getPickupOrder())
        dispatch(getInterstateOrder())
        dispatch(getOverseaOrder())
        dispatch(getProcureOrder())
        dispatch(getExpressOrder())
        dispatch(getWarehouseOrder())
    }, [dispatch])
    const pickup = order.length;
    const inter = interstate.length;
    const over = oversea.length;
    const procure = procurement.length;
    const expres = express.length;
    const ware = warehouse.length;
    const pickupNew = order.filter(where => where.status === "New" );
    const interNew = interstate.filter(where => where.status === "New" );
    const overNew = oversea.filter(where => where.status === "New" );
    const procureNew = procurement.filter(where => where.status === "New" );
    const expresNew = express.filter(where => where.status === "New" );
    const wareNew = warehouse.filter(where => where.status === "New" );
    const pickupNews = pickupNew.length
    const interNews = interNew.length
    const overNews = overNew.length
    const procureNews = procureNew.length
    const expresNews = expresNew.length
    const wareNews = wareNew.length


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
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : pickupNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : pickup}</p></div>
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
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : interNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : inter}</p></div>
                        </div>
                    </div>
                    <div className='bg-green-200  mt-6 lg:mt-0  flex hover:scale-105 duration-500  items-center triangle cursor-pointer' onClick={() => {navigate("/dashboard/oversea-order")}}>
                        <div className='w-6/12 text-green-800 py-8 fw-600 text-center text-lg px-6 h-full bg-green-100 grid place-content-center'>
                            <div>
                                <p>Overseas Shipping</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='w-4/12 py-8 px-4 bg-green-200 fs-500 fw-500'>
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : overNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : over}</p></div>
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
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : procureNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : procure}</p></div>
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
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : expresNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : expres}</p></div>
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
                            <div className='flex justify-between items-center'><p>New</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : wareNews}</p></div>
                            <div className='flex justify-between items-center'><p>Total</p><p className='fw-600 text-red-600 text-lg'>{ success === false?  "--" : ware}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
