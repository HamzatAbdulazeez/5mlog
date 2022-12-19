import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateProfile } from '../../../../store/slices/settings';
import { clearMessage } from "../../../../store/slices/messages";

export const PersonalInfo = () => {
    const user = useSelector((state) => state.auth.user);
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [name, setFullNames] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [gender, setGender] = useState(user?.sex);
    const [phone, setPhone] = useState(user?.phone_number);
    const [city, setCity] = useState(user?.city);
    const [state, setState] = useState(user?.state);
    const [country, setCountry] = useState(user?.country);

    const changeName = (event) => {
        setFullNames(event.target.value);
        setSuccessful(false)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setSuccessful(false)
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
        setSuccessful(false)
    }

    const changeCity = (event) => {
        setCity(event.target.value);
        setSuccessful(false)
    }

    const changeState = (event) => {
        setState(event.target.value);
        setSuccessful(false)
    }

    const changeCountry = (event) => {
        setCountry(event.target.value);
        setSuccessful(false)
    }

    const changeGender = (event) => {
        setGender(event.target.value);
        setSuccessful(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const formdata = new FormData(formRef);

        dispatch(updateProfile(formdata))
            .then(() => {
                setSuccessful(true)
                setDisableBtn(false);
            })
            .catch(() => {
                setSuccessful(false)
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
                localStorage.setItem("user", JSON.stringify(message.data));
            }
        }
        setSuccessful(false);
    }

    return (
        <div className='fs-500'>
            <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
                <div className='lg:flex'>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>Full Name</label>
                        <input type="text" name='name' value={name} onChange={changeName} required className='w-full p-2 border border-gray-400 rounded mt-2' />
                    </div>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>Gender</label>
                        <select name='sex' value={gender} className="w-full p-2 mt-2 rounded border border-gray-400" onChange={changeGender} required>
                            <option disabled>Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>Email</label>
                        <input type="text" name='email' value={email} onChange={changeEmail} required className='w-full p-2 border border-gray-400 rounded mt-2' />
                    </div>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>Phone Number</label>
                        <input type="text" name='phone_number' value={phone} onChange={changePhone} required className='w-full p-2 border border-gray-400 rounded mt-2' />
                    </div>
                </div>
                <div className='lg:flex '>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>City</label>
                        <input type="text" name='city' value={city} onChange={changeCity} className='w-full p-2 border border-gray-400 rounded mt-2' />
                    </div>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>State</label>
                        <input type="text" name='state' value={state} onChange={changeState} className='w-full p-2 border border-gray-400 rounded mt-2' />
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='mt-6 lg:pr-2 lg:w-6/12'>
                        <label className='fw-500'>Country</label>
                        <input type="text" name='country' value={country} onChange={changeCountry} className='w-full p-2 border border-gray-400 rounded mt-2' />
                    </div>
                </div>
                <div className='text-end mt-8'><button className='btn-primary' type='submit' disabled={disableBtn}>Update</button></div>
            </form>
            {successful ? displayMessage(message) : ''}
        </div>
    )
}
