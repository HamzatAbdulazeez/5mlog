import { Input, Textarea } from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { clearMessage } from '../../../../store/slices/messages'
import { updateDriver } from '../../../../store/slices/settings'

export const RiderForm = () => {

    // const user = useSelector((state) => state.auth.user);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();
    let formRef = useRef();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [serviceType, setServiceType] = useState()
    // user?.service_information?.type_of_service_render
    const [vehicleType, setVehicleType] = useState()
    // user?.service_information?.vehicle_type
    const [otherVehicle, setOtherVehicle] = useState()
    // user?.service_information?.other_vehicle_type
    const [preferredRoute, setPreferredRoute] = useState()
    // user?.service_information?.preferred_route
    const [accountName, setAccountName] = useState()
    // user?.bank_information?.account_name
    const [accountCur, setAccountCur] = useState()
    // user?.bank_information?.account_name
    const [accountNumber, setAccountNumber] = useState()
    // user?.bank_information?.bank_account_number
    const [bankName, setBankName] = useState()
    // user?.bank_information?.bank_name
    const [routingNumber, setRoutingNumber] = useState()
    // user?.bank_information?.routing_number
    const [accountAddress, setAccountAddress] = useState()
    // user?.bank_information?.address

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const formdata = new FormData(formRef);

        dispatch(updateDriver(formdata))
            .then(() => {
                setSuccessful(true)
                setDisableBtn(false);
            })
            .catch(() => {
                setSuccessful(false)
                setDisableBtn(false);
            });
        }

        const changeServiceType = (event) => {
            setServiceType(event.target.value);
            setSuccessful(false)
        }
        const changeVehicleType = (event) => {
            setVehicleType(event.target.value);
            setSuccessful(false)
        }
        const changeOtherVehicle = (event) => {
            setOtherVehicle(event.target.value);
            setSuccessful(false)
        }
        const changePrefferedRoute = (event) => {
            setPreferredRoute(event.target.value);
            setSuccessful(false)
        }
        const changeAccountName = (event) => {
            setAccountName(event.target.value);
            setSuccessful(false)
        }
        const changeAccountCur = (event) => {
            setAccountCur(event.target.value);
            setSuccessful(false)
        }
        const changeAccountNumber = (event) => {
            setAccountNumber(event.target.value);
            setSuccessful(false)
        }
        const changeRoutingNumber = (event) => {
            setRoutingNumber(event.target.value);
            setSuccessful(false)
        }
        const changeAccountAddress = (event) => {
            setAccountAddress(event.target.value);
            setSuccessful(false)
        }
        const changeBankName = (event) => {
            setBankName(event.target.value);
            setSuccessful(false)
        }

    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error((Object.values(message.errors).toString()));
            }
            else {
                toast.success(message.message);
                localStorage.setItem("user", JSON.stringify(message.data));
            }
        }
        setSuccessful(false);
    }

  return (
    <div>
        <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
            <div className='border-b border-gray-400 pb-4'>
                <p className='fw-500'>Please <Link to="/dashboard/settings" className='underline text-gray-500'>Click here</Link> to fill in your personal info.</p>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='block fw-600'>Service Information</p>
                <div className='mt-3'>
                    <label className='block mb-2 fw-500'>Type of Service Render</label>
                    <select label='Service Type' name='type_of_service_render'  value={serviceType} onChange={changeServiceType} className="p-2 font-light fs-500 rounded-lg border border-gray-400 w-full text-gray-600">
                        <option value='Pickup Service'>Pickup Service</option>
                        <option value='Inter-State Service'>Inter-State Service</option>
                        <option value='Oversea Shipping (Air Freight)'>Overseas Shipping (Air Freight)</option>
                        <option value='Oversea Shipping (Ocean Freight)'>Overseas Shipping (Ocean Freight)</option>
                        <option value='Express Shipping'>Express Shipping</option>
                        <option value='Procurement Services'>Procurement Services</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <label className='block mb-2 fw-500'>Means of Service(Vehicle Type)</label>
                    <div className='lg:flex items-center'>
                        <div className='lg:w-6/12 lg:pr-3'>
                            <select label='Vehicle Type' name='vehicle_type' value={vehicleType} onChange={changeVehicleType} className="p-2 font-light fs-500 rounded-lg border border-gray-400 w-full text-gray-600">
                                <option value='Motor Bike'>Motor Bike</option>
                                <option value='Car'>Car</option>
                                <option value='Mini Van'>Mini Van</option>
                                <option value='Truck'>Truck</option>
                                <option value='Others'>Others</option>
                            </select>
                        </div>
                        <div className='lg:w-6/12 lg:pl-2'>
                            <Input label='Others (please state)' name='other_vehicle_type' value={otherVehicle} onChange={changeOtherVehicle}/>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='block mb-2 fw-500'>Preferred Route</label>
                    <Textarea label='Please Enter your preffered routes' name='preferred_route' value={preferredRoute} onChange={changePrefferedRoute}/>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Account Information</p>
                <div className='mt-4'>
                    <Input type="text" label="Account Name" required name='account_name' value={accountName} onChange={changeAccountName}/>
                </div>
                <div className='mt-4'>
                    <select label='Account Currency' name='account_currency' value={accountCur} onChange={changeAccountCur} className="p-2 font-light fs-500 rounded-lg border border-gray-400 w-full text-gray-600">
                        <option value='NGN'>NGN</option>
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                    </select>
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Bank Name" required name='bank_name' value={bankName} onChange={changeBankName}/>
                </div>
                <div className='mt-4'>
                    <Input type="number" label="Bank Account Number (IBAN)" required name='bank_account_number' value={accountNumber} onChange={changeAccountNumber} />
                </div>
                <div className='mt-4'>
                    <Input type="number" label="Routing Number" required name='routing_number' value={routingNumber} onChange={changeRoutingNumber} />
                </div>
                <div className='mt-4'>
                    <Input type="text" label="Bank Address" required name='adress' value={accountAddress} onChange={changeAccountAddress} />
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button className='btn-primary lg:px-16'  disabled={disableBtn}>Update My Details</button>
            </div>
        </form>
        {successful ? displayMessage(message) : ''}
  </div>
  )
}
