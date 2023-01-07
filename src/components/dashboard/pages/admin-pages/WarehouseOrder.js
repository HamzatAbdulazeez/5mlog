import { Input, Select, Option, Button } from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import { FaListAlt, FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getWarehouseOrder } from '../../../../store/slices/adminOrder'
import { Spinner2 } from '../../../assets/Spinner'
import { WarehouseTable } from '../../assets/Tables/Admin-Table/warehouse'

export const WarehouseOrder = () => {

    const[payment, setPayment] = useState(false)
    const paymentModal = () => {
        setPayment(true)
    }
    const CloseModal = () => {
        setPayment(false)
    }
   
    const dispatch = useDispatch()

    const success = useSelector((state) => state.order.success);

    useEffect(() => {
        dispatch(getWarehouseOrder())
    }, [dispatch])


  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Warehousing Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and monitor the item(s) that needs warehouse services while ensuring standard storage.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center'><sapn className="pr-2"><FaListAlt/></sapn>Orders Listing</p>
                </div>
                <div>
                    { success === false?  <Spinner2/> : <WarehouseTable paymentModal={paymentModal}/>}
                </div>
            </div>
        </div>
        {
            payment && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 pb-4'>Update details for this Order </p>
                        <div className='lg:px-6 py-6'>
                            <p className='mb-4'>Order Id: <span>PKP-9758-3444</span></p>
                            <div>
                                <form>
                                    <Input type="number" label="Enter Amount(naira)" />
                                    <div  className='my-5'>
                                        <Select label='Order status'>
                                            <Option>New</Option>
                                            <Option>Ongoing</Option>
                                            <Option>Delivered</Option>
                                            <Option>Cancelled</Option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Input type="number" label='Order Progress (0-100)'/>
                                    </div>
                                    <div className='mt-5'>
                                        <Input type="text" label='Order current location'/>
                                    </div>
                                </form>
                            </div>

                            <div className='text-end mt-6'>
                                <Button className='bg-primary'>Update Order Details</Button>
                            </div>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}