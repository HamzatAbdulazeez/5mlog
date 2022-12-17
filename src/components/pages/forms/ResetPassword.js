import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import OtpField from 'react-otp-field';
import { toast } from 'react-toastify';
import { resetPassword } from '../../../store/slices/auth';
import { clearMessage } from "../../../store/slices/messages";

export const ResetPassword = () => {
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);

    const [disableBtn, setDisableBtn] = useState(false);
    const [value, setValue] = useState('');

    const [password, setPassword] = useState('');
    const [password2, setNewPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        if (value === '' || password === '' || password2 === '') {
            toast.error('All fields are required.');
            setDisableBtn(false);
        }
        else if (password !== password2) {
            toast.error('Passwords do not match');
            setDisableBtn(false)
        }
        else if (password.length < 8) {
            toast.error('Password must be at least 8 characters.');
            setDisableBtn(false)
        }
        else {
            const formdata = new FormData(formRef);
            formdata.append('code', value);

            dispatch(resetPassword(formdata))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false);
                })
                .catch(() => {
                    setSuccessful(false);
                    setDisableBtn(false);
                });
        }
    }

    const displayMessage = (message) => {
        console.log(message);
        if (message) {
            if (message.hasOwnProperty('errors')) {
                toast.error(message.message);
            }
            else {
                toast.success(message.message);
                navigate('/login');
            }
        }
        setSuccessful(false);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setSuccessful(false)
    }

    const verifyPassword = (event) => {
        setNewPassword(event.target.value);
        setSuccessful(false)
    }



  return (
    <div>
        <div className='flex justify-center items-center h-screen '>
            <div className='lg:w-5/12 shadow-lg xl:w-4/12 w-11/12 py-6 px-5 lg:px-10 bg-white'>
                <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt="logo" className='lg:w-20 w-16 mx-auto' /></Link>
                <div className='pb-8 pt-3'>
                    <p className='text-gray-600 fw-600 text-center'>Fill in details to reset password.</p>
                </div>
                  <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
                    <div>
                          <label className='fw-500'>Code</label>
                          <OtpField
                              value={value}
                              onChange={setValue}
                              numInputs={4}
                              onChangeRegex={/^([0-9]{0,})$/}
                              autoFocus
                              name="code"
                              separator={<span>-</span>}
                              inputProps={{ className: 'otp-field__input', disabled: false }}
                          />
                      </div>
                      <div className='mt-6'>
                          <label className='fw-500'>Password</label>
                          <input type="password" name='password' value={password} onChange={changePassword} placeholder="Enter your password" className="w-full p-2 mt-2 rounded border border-gray-400" />
                      </div>
                      <div className='mt-6'>
                          <label className='fw-500'>Confirm Password</label>
                          <input type="password" name='password_confirmation' value={password2} onChange={verifyPassword} placeholder="Confirm your password" className="w-full p-2 mt-2 rounded border border-gray-400" />
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