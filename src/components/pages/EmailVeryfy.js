import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import OtpField from 'react-otp-field';
import { toast } from 'react-toastify';
import { verifyAccount, resendVerification } from '../../store/slices/auth';
import { clearMessage } from "../../store/slices/messages";

export const EmailVeryfy = () => {
    const [value, setValue] = useState('');
    const email = localStorage.getItem('email');
    // eslint-disable-next-line
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === '') {
            toast.error('The code field is required.');
        }
        else {
            setDisableBtn(true);

            const formdata = new FormData();
        
            formdata.append('code', value);

            dispatch(verifyAccount(formdata))
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
                localStorage.removeItem("email");
                navigate("/login");
            }
        }
        setSuccessful(false);
    }


    const resendCode = (event) => {
        event.preventDefault();
        setDisableButton(true);
        dispatch(resendVerification(email))
            .then(() => {
                setSuccessful(true)
                setDisableButton(false);
            })
            .catch(() => {
                setSuccessful(false)
                setDisableButton(false);
            });
    }

    return (
        <div>
            <div className='flex bg-primary justify-center items-center min-h-screen '>
                <div className='lg:w-5/12 xl:w-4/12 py-6 px-10 bg-white text-center'>
                    <p className='text-lg fw-600'>Email Verification</p>
                    <img src="https://marketplace.creatio.com/sites/en/files/2021-10/email-validation-icon-upd_0.png" alt="email" className='w-20 mx-auto py-4' />
                    <p>Hello User,</p>
                    <p className='fs-500 text-lg py-4'>Thank you for signing up with 5M Logistics. Please enter the four (4) digit pin sent to your email.</p>
                    <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
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
                    <button className='w-7/12 mt-6 mx-auto bg-primary py-2 text-white fw-600 rounded-lg' disabled={disableBtn}>Proceed</button>
                    </form>
                    <p className='mt-3 fs-500'><button className='w-7/12 mt-6 mx-auto py-2 fw-600 rounded-lg' onClick={resendCode} disabled={disableButton}>Resend Verification Code</button></p>
                    <p className='mt-5 fs-500'> Back to <Link to="/" className='fw-600 '>HomePage</Link></p>
                </div>
            </div>
            {successful ? displayMessage(message) : ''}
        </div>
    )
}