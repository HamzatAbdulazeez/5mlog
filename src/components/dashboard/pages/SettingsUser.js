import { Breadcrumbs, Avatar } from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { FaCamera } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import SettingsIndex from './Settings/Index'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfilePhoto } from '../../../store/slices/settings';
import { clearMessage } from "../../../store/slices/messages";
import axios from "axios";


export const UserSettings = () => {
    const user = useSelector((state) => state.auth.user);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [images, setImage] = useState(null);

    const handleSubmit = (event, imageData) => {
        event.preventDefault();
        setImage(imageData);

        setDisableBtn(true)

        const formData = new FormData();
        formData.set('file', imageData);
        formData.append("upload_preset", "do2sxxwq");

        axios.post(`${process.env.REACT_APP_CLOUDINARY}`, formData).then((response) => {
            const newFormData = new FormData();
            newFormData.set('avatar', response.data.secure_url);

            dispatch(updateProfilePhoto(newFormData))
                .then(() => {
                    setSuccessful(true)
                    setDisableBtn(false)
                })
                .catch(() => {
                    setSuccessful(false)
                    setDisableBtn(false)
                });
        })
    }

        const displayMessage = (message) => {
            if (message) {
                if (!message.success) {
                    toast.error((Object.values(message.errors).toString()));
                    setImage(null);
                }
                else {
                    toast.success(message.message);
                }
            }
            setSuccessful(false);
    }

  return (
    <div>
        <div  className="min-h-screen fs-500 relative">
            {/* header */}
            <div className="w-full py-8 pl-6 bg-white px-4">
                <p className="text-2xl fw-600">User Settings</p>
                <p className="fs-400 text-gray-600 mt-2">Update/edit your account and profile settings.</p>
                <Breadcrumbs className="bg-white pl-0 mt-4">
                    <Link to="/" className="opacity-60">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                    <Link to="/dashboard" className="opacity-60">
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/" className="">
                        <span>Settings</span>
                    </Link>
                </Breadcrumbs>
            </div> 
            {/* content */}
            <div className='lg:p-5 px-2 py-3'>
                <div className='lg:flex justify-between'>
                    <div className='bg-white rounded-md lg:w-4/12 lg:px-5 lg:py-12 py-6 px-3'>
                          <div className='w-28 relative mx-auto'>
                              <Avatar src={user?.photo ? user?.photo : 'https://i.stack.imgur.com/l60Hf.png'}
                                  alt="profifepic"
                                  variant='circular'
                                  size='xxl'
                                  />
                            <div className='bg-primary absolute border-2 border-white bottom-0 right-0 w-8 h-8 circle grid place-items-center'>
                                  <FaCamera className='text-lg text-white'/>
                                  <input type="file" disabled={disableBtn} name='images' onChange={(e) => handleSubmit(e, e.target.files[0])} className='w-full h-full absolute top-0 opacity-0' />
                            </div>
                        </div>
                          <div className='text-center mt-4'>
                              {images ? <span className='fs-400 text-sm' style={{ color: 'green' }}>Loading Photo...</span> : ''}
                              <p className='fw-600 text-lg'>{ user?.name }</p>
                            <p className='fs-400'>User</p>
                        </div>
                        <div className='fw-500 fs-500 lg:mt-10 mt-5'>
                            <div className='flex items-center justify-between border-b pb-2'>
                                <p>14 Total Orders</p>
                                <p className='bg-green-100 text-green-600  w-8 h-8 circle grid place-items-center'><BsBagCheck/></p>
                            </div>
                            <div className='flex items-center justify-between mt-4 border-b pb-2'>
                                <p>12 Ongoing Deliveries</p>
                                <p className='bg-orange-100 text-orange-600  w-8 h-8 circle grid place-items-center'><BsBagCheck/></p>
                            </div>
                            <div className='flex items-center justify-between mt-4 border-b pb-2'>
                                <p>6 Delivered Items</p>
                                <p className='bg-blue-100 text-blue-600  w-8 h-8 circle grid place-items-center'><BsBagCheck/></p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-8/12 lg:pl-6 mt-8 lg:mt-0'>
                        <div className='bg-white rounded-md  lg:px-5 lg:pb-12 py-6 px-3'>
                            <SettingsIndex/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          {successful ? displayMessage(message) : ''}
    </div>
  )
}