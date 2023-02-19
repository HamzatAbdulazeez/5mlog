import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from "../../../../store/slices/messages";
import { adminAddExpress } from "../../../../store/slices/apiServices";

export const ExpressAdmin = () => {
    let formRef = useRef(null);

    const { message } = useSelector((state) => state.message);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [freight, setFreight] = useState("Air Freight");


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const changeFreight = (values) => {
        setFreight(values);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (freight !== '') {
            event.preventDefault();
            setDisableBtn(true);

            const formdata = new FormData(formRef);
            formdata.append("freight_service", freight);

            dispatch(adminAddExpress(formdata))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                    formRef.reset();
                })
                .catch(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                });
        }
        else {
            toast.error("Freight field is required");
        }
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
            <div className='border-b border-gray-400 pb-6'>
                <label className='block fw-600 mb-4'>Type of Service</label>
                  <Select label='Select Freight' value={freight} onChange={changeFreight}>
                      <Option value='Air Freight'>Air Freight</Option>
                      <Option value='Ocean Freight'>Ocean Freight</Option>
                      <Option value='Procurement'>Procurement</Option>
                      <Option value='Others'>Others</Option>
                </Select>
            </div>
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Sender's Infomation</p>
                <div className='mt-4'>
                      <Input type="text" name='owner_full_name' required label="Full Name"/>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='owner_address' required label="Address"/>
                </div>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="email" name='owner_email' required label="Email"/>
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
                <p className='mt-4 fw-600'>Shipping From</p>
                <div className='mt-2'>
                      <Input type="text" name='shipping_from_street_address' required label="Street Address"/>
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
            <div className='border-b border-gray-400 py-6'>
                <p className='fw-600'>Package Information</p>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="text" name='package_name' required label="Package Name"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="number" name='package_quantity' required label="Pakage Quantity"/>
                    </div>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='package_dimension' required label="Dimensions (L*W*H)"/>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='package_weight' required label="Weight (LBS)"/>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='package_value' required label="Value ($)"/>
                </div>
                <div className='mt-4'>
                      <Textarea type="text" name='package_description' required label="Description"/>
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