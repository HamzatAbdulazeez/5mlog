import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from "../../../../store/slices/messages";
import { addProcurement } from "../../../../store/slices/apiServices";


export const ProcureUser = () => {
    let formRef = useRef(null);

    const { message } = useSelector((state) => state.message);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [itemType, setItemType] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const changeItemType = (values) => {
        setItemType(values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const formdata = new FormData(formRef);
        formdata.append("item_type", itemType);

        dispatch(addProcurement(formdata))
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
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Item Information</p>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='item_name' required label="Item Name (as inputted during item purchase)"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="number" name='item_value' required label="Item Quantity"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Select label='Item type' value={itemType} onChange={changeItemType}>
                            <Option value='Mobile Gadgets'>Mobile Gadgets</Option>
                            <Option value='Electronics'>Electronics</Option>
                            <Option value='Bags'>Bags</Option>
                            <Option value='Clothings'>Clothings</Option>
                            <Option value='Working Tools'>Working tools</Option>
                        </Select>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="text" name='item_store_name' required label="Store Name (e.g Amazon)"/>
                    </div>
                </div>
                <div className='mt-4'>
                      <Textarea type="text" name='item_description' required label="Description"/>
                </div>
                  {/*<div className='mt-4'>
                    <Input type="text" label="Tracking ID (optional)"/>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Value ($)"/>
                </div> */}
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Owner's Infomation</p>
                <div className='mt-4'>
                      <Input type="text" name='owner_full_name' required label="Full Name"/>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='owner_address' required label="Address"/>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='owner_email' required label="Email"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="text" name='owner_phone_number' required label="Phone Number"/>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Shipment Information</p>
                <div className='mt-4'>
                      <Input type="date" name='date_of_shipment' required label="Date of Shipment"/>
                  </div>
                  <div className='mt-2'>
                      <Input type="text" name='shipping_from_street_address' required label="Street Address" />
                  </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='shipping_from_city' required label="City"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="text" name='shipping_from_state_province_region' required label="State / Province / Region"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='shipping_from_zip_portal_code' required label="Zip / Postal Code"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="text" name='shipping_from_country' required label="Country"/>
                    </div>
                </div>
                <p className='mt-4 fw-600'>Shipping To</p>
                <div className='mt-2'>
                      <Input type="text" name='shipping_to_street_address' required label="Street Address"/>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='shipping_to_city' required label="City"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="text" name='shipping_to_state_province_region' required label="State / Province / Region"/>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='shipping_to_zip_portal_code' required label="Zip / Postal Code"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="text" name='shipping_to_country' required label="Country"/>
                    </div>
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