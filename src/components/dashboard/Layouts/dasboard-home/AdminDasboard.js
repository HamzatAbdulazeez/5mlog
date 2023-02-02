import { Breadcrumbs } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbTruckDelivery, TbPackgeExport } from "react-icons/tb"
import { AiOutlineDeliveredProcedure } from "react-icons/ai"
import {GiMoneyStack } from "react-icons/gi"
import { TbLiveView} from "react-icons/tb"
import AdminChart from '../../assets/Charts/AdminOrders'
import UsersChart from '../../assets/Charts/UserChart'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineInventory } from 'react-icons/md'
import { InventDashBoardHomeTable } from '../../assets/Tables/DbInventoey'
import { useSelector } from 'react-redux'
import axios from "axios";
import { Spinner } from '../../../assets/Spinner'

export const AdminDashboard = () => {

    const user = useSelector((state) => state.auth.user)

    const [request, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('lynchpin'));

        async function fetchDashboard() {
            try {
                setLoading(true);
                const url = `${process.env.REACT_APP_BASE_URL}/admin/get/dashboard`;
                const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + token } });
                const data = response.data.data
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetchDashboard();
    }, []);

    if (loading) {
        return <Spinner />
    }


  return (
    <div>
        <div  className="min-h-screen fs-500 relative">
            {/* header */}
            <div className="w-full py-8 pl-6 bg-white px-4">
                <p className="text-2xl fw-600">Welcome {user?.account_type === "Administrator"? "SuperAdmin" : user?.first_name}</p>
                <p className="fs-400 text-gray-600 mt-2">Control and manage all services on this website.</p>
                <Breadcrumbs className="bg-white pl-0 mt-4">
                    <Link to="/" className="opacity-60">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                    <Link to="/" className="opacity-60">
                        <span>Dashboard</span>
                    </Link>
                </Breadcrumbs>
            </div> 
            <div className='lg:p-5 px-2 py-3'>
                <div className='lg:grid-4 justify-evenly mt-6'>
                    <div className='border shadow-xl flex py-8 rounded bg-green-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-primary text-3xl w-12 h-12 circle grid place-content-center'>
                                <FaUsers/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='text-4xl fw-600'>{ request.total_users }</p>
                            <p className='fs-400'>Total Users</p>
                        </div>
                    </div>
                    <div className='border shadow-xl mt-6 lg:mt-0 flex py-8 rounded bg-blue-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-blue-400 text-3xl w-12 h-12 circle grid place-content-center'>
                                <TbPackgeExport/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='text-4xl fw-600'>{request.total_pending_order }</p>
                            <p className='fs-400'>Delivery Request</p>
                        </div>
                    </div>
                    <div className='border shadow-xl mt-6 lg:mt-0 flex py-8 rounded bg-orange-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-orange-400 text-3xl w-12 h-12 circle grid place-content-center'>
                                <TbTruckDelivery/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='text-4xl fw-600'>{request.total_completed_order }</p>
                            <p className='fs-400'>Completed Deliveries</p>
                        </div>
                    </div>
                    <div className='border shadow-xl flex mt-6 lg:mt-0  py-8 rounded bg-red-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-red-400 text-3xl w-12 h-12 circle grid place-content-center'>
                                <GiMoneyStack/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='text-4xl fw-600'>{ request.total_transactions }</p>
                            <p className='fs-400'>Transactions</p>
                        </div>
                    </div>
                </div>
                {/* table and graph */}
                <div className='mt-6 lg:mt-12 '>
                    {/* table */}
                    <div className='bg-white lg:p-4 p-4 rounded-lg'>
                        <p className='pb-2 mb-3 fw-600 text-lg flex items-center border-b border-gray-400'><span className=' pr-3'><AiOutlineDeliveredProcedure/></span>Order/Delivery Analytics</p>
                        <AdminChart/>
                    </div>
                     {/* table and graph */}
                    <div className='lg:grid-64 mt-6 lg:mt-12'>
                        {/* table */}
                        <div className='bg-white lg:p-4 px-3 py-4 rounded-lg'>
                            <div className='flex justify-between pb-2 mb-3 border-b border-gray-400'>
                                <p className='fw-600 text-lg flex items-center '><span className=' pr-3'><MdOutlineInventory/></span>New Orders</p>
                                <button className='btn-primary py-1 flex items-center'>view all <span className='pl-2 text-xl'><TbLiveView/></span></button>
                            </div>
                              <InventDashBoardHomeTable tableList={ request ? request.new_orders : null } />
                        </div>
                        <div className='bg-white lg:p-4 mt-6 lg:mt-0  px-3 py-4 rounded-lg'>
                            <p className='pb-2 mb-8 fw-600 text-lg flex items-center border-b border-gray-400'><span className=' pr-3'><FaUsers/></span>Users</p>
                              <UsersChart chartData={ request ? request : null } />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
