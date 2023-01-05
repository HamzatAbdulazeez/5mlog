import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from "../../../../store/slices/messages";
import { addWarehousing } from "../../../../store/slices/apiServices";


export const WarehouseForm = () => {
    let formRef = useRef(null);

    const { message } = useSelector((state) => state.message);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [location, setLocation] = useState("");


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const changeLocation = (values) => {
        setLocation(values);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (location !== '') {
            event.preventDefault();
            setDisableBtn(true);

            const formdata = new FormData(formRef);
            formdata.append("warehouse_location", location);

            dispatch(addWarehousing(formdata))
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
            toast.error("Warehouse Location field is required");
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
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Warehouse Location</p>
                <div className='mt-4'>
                      <Select label='Select Warehouse Location' value={location} onChange={changeLocation}>
                          <Option value='Houston Texas'>Houston Texas</Option>
                        <Option value='Lagos Ikeja'>Lagos Ikeja</Option>
                        <Option value='Plaza Abuja'>Plaza Abuja</Option>
                        <Option value='Ogbomosho Oyo'>Ogbomosho Oyo</Option>
                    </Select>
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
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Storage Infomation</p>
                <div className='lg:flex'>
                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                          <Input type="date" name='storage_start_date' required label="Start Date"/>
                    </div>
                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                          <Input type="date" name='storage_end_date' required label="End Date"/>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Owner's Information</p>
                <div className='mt-4'>
                      <Input type="text" name='owner_full_name' required label="Name"/>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='owner_address' required label="Phone Number"/>
                </div>
                <div className='mt-4'>
                      <Input type="text" name='owner_phone_number' required label="Enter complete address"/>
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
