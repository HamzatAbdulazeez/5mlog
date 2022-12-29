import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from 'react-google-recaptcha';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../../store/slices/auth';
import { clearMessage } from "../../../store/slices/messages";


export const Register = () => {
    const captchaRef = useRef(null);
    const { message } = useSelector((state) => state.message);

    const navigate = useNavigate();

    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    let formRef = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setNewPassword] = useState('');
    const [referrer, setReferrer] = useState('');
    const [accountType, setAccountType] = useState('');
    const [agreement, setAgreement] = useState('yes');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        if (firstName === "" || lastName === "" || email === "" || phone === "" || password === "" || password2 === "" || !agreement) {
            toast.error('All fields are required');
            setDisableBtn(false)
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

            dispatch(register(formdata))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false)
                })
                .catch(() => {
                    setSuccessful(false)
                    setDisableBtn(false)
                });
        }
    }

    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error((Object.values(message.errors).toString()));
            }
            else {
                toast.success(message.message);
                localStorage.setItem("email", email);
                navigate("/email-verify");
            }
        }
        setSuccessful(false);
    }

    const changeFirstName = (event) => {
        setFirstName(event.target.value);
        setSuccessful(false)
    }
// eslint-disable-next-line 
    const changeLastName = (event) => {
        setLastName(event.target.value);
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

    const changeAccount = (event) => {
        setAccountType(event.target.value);
        setSuccessful(false)
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setSuccessful(false)
    }

    const verifyPassword = (event) => {
        setNewPassword(event.target.value);
        setSuccessful(false)
    }

    const verifyAgreement = (event) => {
        setAgreement(event.target.value);
        setSuccessful(false)
    }

    return (
        <div className='flex lg:h-screen items-center'>
            <div className='lg:w-7/12 px-8 lg:px-0 lg:mt-12 overflow-y-scroll py-3'>
                <div className='lg:w-10/12 xl:w-8/12 mx-auto'>
                    <Link to="/">
                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671791124/5mlog/new-logo_d5wzz4.png" alt='register' className='lg:pt-12 w-24 lg:w-28 relative -left-4 lg:-left-4' />
                    </Link>
                    <p className='my-4 fw-600 text-xl lg:text-2xl'>Sign Up!</p>
                </div>
                <div className='lg:w-10/12 xl:w-8/12 mx-auto'>
                    <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
                        <div className='lg:flex'>
                            <div className='lg:w-6/12 lg:pr-6'>
                                <label className='fw-500'>First Name</label>
                                <input type="text" name='first_name' value={firstName} onChange={changeFirstName} placeholder="Enter your first name" className="w-full p-2 lg:py-1 mt-2 rounded border border-gray-400"
                                required
                                />
                            </div>
                            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                                <label className='fw-500'>Last Name</label>
                                <input type="text" name='last_name' value={lastName} onChange={changeLastName} placeholder="Enter your last name" className="w-full p-2 lg:py-1 mt-2 rounded border border-gray-400"
                                required
                                />
                            </div>
                        </div>
                        <div className='lg:flex mt-6 lg:mt-4'>
                            <div className='lg:w-6/12 lg:pr-6'>
                                <label className='fw-500'>Email</label>
                                <input type="email" name='email' value={email} onChange={changeEmail} placeholder="Enter your email" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400" />
                            </div>
                            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                                <label className='fw-500'>Phone Number</label>
                                <input type="number" name='phone_number' value={phone} onChange={changePhone} required placeholder="Enter phone number" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400" />
                            </div>
                        </div>
                        <div className='lg:flex mt-6 lg:mt-4'>
                            <div className='lg:w-6/12 lg:pr-6'>
                                <label className='fw-500'>Referral</label>
                                <input type="text" name='referrer_code' value={referrer} onChange={setReferrer} placeholder="Enter referral code (if any)" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400" />
                            </div>
                            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                                <label className='fw-500'>Account User Type</label>
                                <select name='account_type' value={accountType} onChange={changeAccount} className="w-full p-2 mt-2 lg:py-1 rounded border border-gray-400">
                                    <option disabled>Select UserType</option>
                                    <option>Customer</option>
                                    <option>Partner</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div className='lg:w-6/12 lg:pr-6 mt-6 lg:mt-4'>
                                <label className='fw-500'>Password</label>
                                {/* <input type="password" placeholder="Enter your password" className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/> */}
                                <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                    <input
                                        type={passwordType}
                                        placeholder="Enter your password"
                                        className="w-full border-0 py-2 px-2 rounded"
                                        name='password'
                                        value={password}
                                        onChange={changePassword}
                                        required
                                    />
                                    <div onClick={togglePassword} className="px-3">
                                        {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-4'>
                                <label className='fw-500'>Confirm Password</label>
                                <div className="flex items-center bg-input border border-gray-400 mt-1 rounded">
                                    <input
                                        type={passwordType}
                                        placeholder="Confirm your password"
                                        className="w-full border-0 py-2 px-2 rounded"
                                        name='password_confirmation'
                                        value={password2}
                                        onChange={verifyPassword}
                                        required
                                    />
                                    <div onClick={togglePassword} className="px-3">
                                        {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start my-5'>
                            <input type="checkbox" className='mt-2 mr-3' name='agreement' value={agreement} onChange={verifyAgreement} required />
                            <p className='fs-500'>By Signing Up, I Agree to the Terms and Conditions and Privacy Policy</p>
                        </div>
                        <div className="mt-4 w-full overflow-hidden">
                            <form>
                            <ReCAPTCHA
                                sitekey='6Ldn9IUjAAAAAH89eGuKD2wq2OGK6ugV-zHXxeEA'
                                ref={captchaRef}
                                />
                                </form>
                        </div>
                        <div className='mt-8'>
                            <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700' type='submit' disabled={disableBtn}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className='mt-6'>Already have an account? <Link to="/login" className="fw-500 text-green-600">Log In</Link></p>
                </div>
            </div>
            <div className='lg:w-5/12 lg:block hidden border h-screen bg-register bg-cover fixed right-0'>

            </div>
            {successful ? displayMessage(message) : ''}
        </div>
    )
}
