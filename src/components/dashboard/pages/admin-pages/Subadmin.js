import React, {useState} from 'react'
import { BsPeople } from 'react-icons/bs'
import { Input, Button } from '@material-tailwind/react'
import { FaRegEye, FaRegEyeSlash, FaTimes } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { createAdmin } from '../../../../store/slices/subAdmin'
import { toast } from 'react-toastify'
import { Spinner2 } from '../../../assets/Spinner'
import { SubAdminTable } from '../../assets/Tables/Admin-Table/sub-admin'
import { useEffect } from 'react'
import { getSubAdmin } from '../../../../store/slices/users'


export const Subadmin = () => {

  const { message } = useSelector((state) => state.message);
  const success = useSelector((state) => state.userlist.success);

  const dispatch = useDispatch()
  const [passwordType, setPasswordType] = useState("password");
  const[admin, setAdmin] = useState(false)
  const [disableBtn, setDisableBtn] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const { register, getValues } = useForm();
    const adminModal = () => {
        setAdmin(true)
    }
    const CloseModal = () => {
        setAdmin(false)
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisableBtn(true);
        const values = getValues()
        dispatch(createAdmin(values))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false)
                    CloseModal()
                })
                .catch(() => {
                    setSuccessful(false)
                    setDisableBtn(false)
                });
        
    }
    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error((Object.values(message.errors).toString()));
            }
            else {
                toast.success(message.message);
                dispatch(getSubAdmin())
            }
        }
        setSuccessful(false);
    }
    useEffect(() => {
        dispatch(getSubAdmin())
    }, [dispatch])

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Sub-Admins</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Create and manage subadmins on the site to deliver the best service to users.</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 mt-6 px-3'>
          <div className='lg:p-10 p-5 bg-green-100 shadow-lg rounded-lg'>
              <p className='fw-600 text-center text-lg lg:text-xl'>Create Dispatchers and Drivers for efficent rendering of services</p>
              <div className='text-center mt-6'>
                <button className='lg:px-12 btn bg-black text-white lg:text-lg fw-600' onClick={adminModal}>Create Now</button>
              </div>
          </div>
          <div className='lg:p-10 p-5 mt-8 bg-white rounded-lg'>
            <div className='mb-6'>
                <p className='fw-600 flex items-center'><span className="pr-2 text-xl text-orange-600"><BsPeople/></span>Sub-admin(s) Listing</p>
            </div>
              {success === "false"? <Spinner2/> : <SubAdminTable/>}
          </div>
        </div>
        {
            admin && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-4'>Create New Admin</p>
                        <div className='lg:px-6 py-6'>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                      <label className='fs-500 mb-2 block'>Email</label>
                                      <Input type="email" label="Enter email" name='email'  {...register("email")} />
                                    </div>
                                    <div className='mt-5'>
                                      <label className='fs-500 mb-2 block'>Password</label>
                                      <div className="flex items-center bg-input border border-gray-400 mt-1 text-light rounded">
                                            <input
                                                type={passwordType}
                                                placeholder="Enter your password"
                                                className="w-full border-0 py-2 px-2 text-light rounded"
                                                name='password'
                                                {...register("password")} 
                                                required
                                            />
                                            <div onClick={togglePassword} className="px-3">
                                                {passwordType === "password" ? <FaRegEyeSlash className="text-xl" /> : <FaRegEye className="text-xl" />}
                                            </div>
                                        </div>
                                      {/* <Input type="password" label="Enter password" name='password'  {...register("password")} /> */}
                                    </div>
                                    <div  className='my-5'>
                                        <label className='fs-500 mb-2 block'>Admin Type</label>
                                        <select label='Select Type' name='admin_type' {...register("admin_type")} className="p-2 font-light fs-500 rounded-lg border border-gray-400 w-full text-gray-600" >
                                            <option value='Dispatcher'>Dispatcher</option>
                                            <option value='Driver'>Driver</option>
                                        </select>
                                    </div>
                                    <div className='text-end mt-6'>
                                        <Button className='bg-primary lg:px-10' disabled={disableBtn} onClick={handleSubmit}>Create Admin</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
        {successful ? displayMessage(message) : ''}
    </div>
  )
}
