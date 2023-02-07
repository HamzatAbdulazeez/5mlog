import { Input, Textarea } from '@material-tailwind/react'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from "../../../../store/slices/messages";
import { addInterState } from "../../../../store/slices/apiServices";

export const InterStateUser = () => {
    let formRef = useRef(null);

    const { message } = useSelector((state) => state.message);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);



    const handleSubmit = (event) => {
            event.preventDefault();
            setDisableBtn(true);

            const formdata = new FormData(formRef);

            dispatch(addInterState(formdata))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                })
                .catch(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                });
    }


    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error((Object.values(message.errors).toString()));
            }
            else {
                toast.success(message.message);
            }
        }
        setSuccessful(false);
    }

  return (
    <div>
          <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
            {/* <div className='border-b border-gray-400 pb-4'>
                <p className='block fw-600'>Preffered Vehicle for Pickup</p>
                <div className='flex mt-4'>
                    <div className='w-6/12 lg:w-3/12'>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Motor Bike</label>
                    </div>
                    <div className=''>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Car</label>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-6/12 lg:w-3/12'>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Mini Van</label>
                    </div>
                    <div className=''>
                        <input type="radio" name="vehicle" />
                        <label className='pl-4'>Truck</label>
                    </div>
                </div>
            </div> */}
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Package Location</p>
                <div className='mt-4'>
                      <Input type="text" label="Package Address" name="package_address" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Drop-off Address" name="dropoff_address" required />
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Sender's Info</p>
                <div className='mt-4'>
                      <Input type="text" label="Enter complete address of sender" name="sender_address" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Sender's Name" name="sender_name" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Sender's Phone Number" name="sender_phone_number" required />
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Receiver's Info</p>
                <div className='mt-4'>
                      <Input type="text" label="Enter complete address of receiver" name="receiver_address" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Receiver's Name" name="receiver_name" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Receiver's Phone Number" name="receiver_phone_number" required />
                </div>
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Package Information</p>
                <div className='mt-4'>
                      <Input type="text" label="Dimensions (L*W*H)" name="dimension" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Weight (LBS)" name="weight" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Value ($)" name="value" required />
                </div>
                <div className='mt-4'>
                      <Textarea type="text" label="Description" name="description" required />
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button disabled={disableBtn} className='btn-primary lg:px-16'>Proceed</button>
            </div>
          </form>
          {successful ? displayMessage(message) : ''}
    </div>
  )
}