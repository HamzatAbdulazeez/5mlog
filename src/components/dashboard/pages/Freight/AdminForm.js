import { Input, Option, Select, Textarea } from '@material-tailwind/react'
import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from "../../../../store/slices/messages";
import { adminAddFreight } from "../../../../store/slices/apiServices";


export const FreightAdmin = () => {
      let formRef = useRef(null);

      const { message } = useSelector((state) => state.message);

      const [successful, setSuccessful] = useState(false);
      const [disableBtn, setDisableBtn] = useState(false);
      const [freight, setFreight] = useState("");


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

                  dispatch(adminAddFreight(formdata))
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
                  toast.error("Freight field is required", { duration: 5000 });
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
                              <label className='block fw-600 mb-4'>Preffered Freight Service</label>
                              <Select label='Select Freight' value={freight} onChange={changeFreight} >
                                    <Option value='Air Freight' selected>Air Freight</Option>
                                    <Option value='Ocean Freight'>Ocean Freight</Option>
                              </Select>
                        </div>
                        <div className='border-b border-gray-400 py-6'>
                              <p className='fw-600'>Sender's Infomation</p>
                              <div className='mt-4'>
                                    <Input type="text" name='owner_full_name' label="Full Name" required />
                              </div>
                              <div className='mt-4'>
                                    <Input type="text" name='owner_address' label="Address" required />
                              </div>
                              <div className='lg:flex'>
                                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                                          <Input type="text" name='owner_email' label="Email" required />
                                    </div>
                                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                                          <Input type="text" name='owner_phone_number' label="Phone Number" required />
                                    </div>
                              </div>
                        </div>
                        <div className='border-b border-gray-400 py-6'>
                              <p className='fw-600'>Shipment Information</p>
                              <div className='mt-4'>
                                    <Input type="date" name='date_of_shipment' label="Date of Shipment" required />
                              </div>
                              <p className='mt-4 fw-600'>Shipping From</p>
                              <div className='mt-2'>
                                    <Input type="text" name='shipping_from_street_address' label="Street Address" required />
                              </div>
                              <div className='lg:flex'>
                                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                                          <Input type="text" name='shipping_from_city' label="City" required />
                                    </div>
                                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                                          <Input type="text" name='shipping_from_state_province_region' label="State / Province / Region" required />
                                    </div>
                              </div>
                              <div className='lg:flex'>
                                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                                          <Input type="text" name='shipping_from_zip_portal_code' label="Zip / Postal Code" required />
                                    </div>
                                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                                          <Input type="text" name='shipping_from_country' label="Country" required />
                                    </div>
                              </div>
                              <p className='mt-4 fw-600'>Shipping To</p>
                              <div className='mt-2'>
                                    <Input type="text" name='shipping_to_street_address' label="Street Address" required />
                              </div>
                              <div className='lg:flex'>
                                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                                          <Input type="text" name='shipping_to_city' label="City" required />
                                    </div>
                                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                                          <Input type="text" name='shipping_to_state_province_region' label="State / Province / Region" required />
                                    </div>
                              </div>
                              <div className='lg:flex'>
                                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                                          <Input type="text" name='shipping_to_zip_portal_code' label="Zip / Postal Code" required />
                                    </div>
                                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                                          <Input type="text" name='shipping_to_country' label="Country" required />
                                    </div>
                              </div>
                        </div>
                        <div className='border-b border-gray-400 py-6'>
                              <p className='fw-600'>Package Information</p>
                              <div className='lg:flex'>
                                    <div className='mt-4 lg:w-6/12 lg:pr-3'>
                                          <Input type="text" name='package_name' label="Package Name" required />
                                    </div>
                                    <div className='mt-4 lg:w-6/12 lg:pl-3'>
                                          <Input type="number" name='package_quantity' label="Pakage Quantity" required />
                                    </div>
                              </div>
                              <div className='mt-4'>
                                    <Input type="text" name='package_dimension' label="Dimensions (L*W*H)" required />
                              </div>
                              <div className='mt-4'>
                                    <Input type="text" name='package_weight' label="Weight (LBS)" required />
                              </div>
                              <div className='mt-4'>
                                    <Input type="text" name='package_value' label="Value ($)" required />
                              </div>
                              <div className='mt-4'>
                                    <Textarea type="text" name='package_description' label="Description" required />
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