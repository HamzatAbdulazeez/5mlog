import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { forgetPassword } from '../../../store/slices/auth';
import { clearMessage } from "../../../store/slices/messages";

export const Forget = () => {
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        if (email === "") {
            toast.error('Email field is required');
            setDisableBtn(false);
        }
        else {
            const formdata = new FormData(formRef);

            dispatch(forgetPassword(formdata))
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
                navigate('/reset-password');
            }
        }
        setSuccessful(false);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setSuccessful(false)
    }


  return (
    <div>
        <div className='flex justify-center items-center h-screen '>
            <div className='lg:w-5/12 shadow-lg xl:w-4/12 w-11/12 py-6 px-5 lg:px-10 bg-white'>
                <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt="logo" className='lg:w-20 w-16 mx-auto' /></Link>
                <div className='pb-8 pt-3'>
                    <p className='text-gray-600 fw-600 text-center'>Forget password? fill in your details and instructions will be sent to you.</p>
                </div>
                  <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
                    <div>
                        <label className='fw-500'>Email</label>
                          <input type="email" name='email' value={email} onChange={changeEmail} placeholder="Enter your email" className="w-full p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='mt-8'>
                          <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700' disabled={disableBtn}>
                            Submit
                        </button>
                    </div>
                </form>
                <p className='mt-8 fs-500'> Back to <Link to="/login" className='fw-600 '>Login</Link></p>
            </div>
          </div>
          {successful ? displayMessage(message) : ''}
    </div>
  )
}