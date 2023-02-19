import { Input} from '@material-tailwind/react'
import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { updateOrders } from '../../../../store/slices/adminOrder';


export const UpdateDetails = ({CloseModal, order, reload}) => {

    const dispatch = useDispatch();
    console.log(order.price)
    // eslint-disable-next-line
    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const { register, getValues } = useForm();

    const [price, setPrice] = useState(order.price);
    const [status, setStatus] = useState(order.status);
    const [progress, setProgress] = useState(order.progress);
    const [location, setLocation] = useState(order.current_location);
    const [time, setTime] = useState(order.estimated_delivery_time);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);
        
        const id = order.order_id
        const values = getValues();
        const myData = {...values, id}

            dispatch(updateOrders(myData))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false)
                    CloseModal()
                    reload()
                })
                .catch(() => {
                    setSuccessful(false)
                    setDisableBtn(false)
                });
    }

    const changePrice = (event) => {
        setPrice(event.target.value);
        setSuccessful(false)
    }

    const changeStatus = (event) => {
        setStatus(event.target.value);
        setSuccessful(false)
    }

    const changeProgress = (event) => {
        setProgress(event.target.value);
        setSuccessful(false)
    }

    const changeLocation = (event) => {
        setLocation(event.target.value);
        setSuccessful(false)
    }

    const changeTime = (event) => {
        setTime(event.target.value);
        setSuccessful(false)
    }

  return (
    <div>
        <p className='text-center fw-600 border-b border-gray-300 pb-4'>Update details for this Order </p>
        <div className='lg:px-6 py-6'>
            <p className='mb-4'>Order Id: <span>PKP-9758-3444</span></p>
            <div>
                <form  onSubmit={handleSubmit}>
                    <Input type="number" label="Enter Amount(naira)" name='price' value={price} {...register("price")} onChange={changePrice} required/>
                    <div  className='my-5'>
                        <select label='Order status' name='status' value={status} {...register("status")} onChange={changeStatus} className="p-2 font-light fs-500 rounded-lg border border-gray-400 w-full text-gray-600" required>
                            <option value='New' selected>New</option>
                            <option value='Updated'>Updated</option>
                            <option value='Ongoing'>Ongoing</option>
                            <option value='Completed'>Delivered</option>
                            <option value='Cancelled'>Cancelled</option>
                        </select>
                    </div>
                    <div>
                        <Input type="number" min={0} max={100} label='Order Progress (0-100)' name='progress' value={progress}  {...register("progress")} onChange={changeProgress}/>
                    </div>
                    <div className='mt-5'>
                        <Input type="text" label='Order current location' name='current_location' value={location} {...register("current_location")} onChange={changeLocation}/>
                    </div>
                    <div className='mt-5'>
                        <Input type="text" label='Estimated Delivery Time' name='estimated_delivery_time' value={time} {...register("estimated_delivery_time")} onChange={changeTime}/>
                    </div>
                    <div className='text-end mt-6'>
                        <button className='btn-primary lg:px-8' disabled={disableBtn}>Update Order Details</button>
                    </div>
                </form>
            </div>
        </div>
        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
    </div>
  )
}
