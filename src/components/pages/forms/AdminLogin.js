import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { adminLogin } from '../../../store/slices/auth';
import { clearMessage } from "../../../store/slices/messages";

export const AdminLogin = () => {

    let formRef = useRef();
    // const  auth  = useSelector((state) => state.auth);
    const  {message}  = useSelector((state) => state.message);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        if (email === "" || password === "") {
            toast.error('All fields are required');
        }
        else if (password.length < 8) {
            toast.error('The password must be at least 8 characters.');
        }
        else {
            const formdata = new FormData(formRef);

            dispatch(adminLogin(formdata))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                })
                .catch(() => {
                    setSuccessful(false)
                    setDisableBtn(false);
                });
        }
    }
    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error(message.message);
            }
            else {
                toast.success(message.message);
                window.location.href = window.location.protocol + "//" + window.location.host + '/dashboard'
            }
        }
        setSuccessful(false);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setSuccessful(false)
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setSuccessful(false)
    }

  return (
    <div>
        <div className='bg-dark-pri'>
            <div className='flex justify-center items-center h-screen '>
                <div className='lg:w-5/12 shadow-lg xl:w-4/12 w-11/12 py-6 px-5 lg:px-10 bg-white'>
                    <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt="logo" className='lg:w-24 w-16 mx-auto' /></Link>
                    <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
                        <div>
                            <label className='fw-500'>Email</label>
                            <input type="email" name="email" value={email} onChange={changeEmail} placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='mt-6'>
                            <label className='fw-500'>Password</label>
                            <input type="password" placeholder="Enter your password" name='password' value={password} onChange={changePassword} className="w-full p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='mt-8 mb-4'>
                            <button className='w-full text-center py-2 bg-dark-pri rounded-md text-white fw-600 fs-700' disabled={disableBtn}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {successful ? displayMessage(message) : ''}
    </div>
  )
}
