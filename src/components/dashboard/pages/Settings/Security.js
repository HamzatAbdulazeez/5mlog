import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { updatePassword } from '../../../../store/slices/settings';
import { clearMessage } from "../../../../store/slices/messages";

export const Security = () => {
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setPasswordConfirm] = useState('');

    const changeOldPassword = (event) => {
        setOldPassword(event.target.value);
        setSuccessful(false)
    }

    const changeNewPassword = (event) => {
        setNewPassword(event.target.value);
        setSuccessful(false)
    }

    const changeNewPasswordConfirm = (event) => {
        setPasswordConfirm(event.target.value);
        setSuccessful(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const formdata = new FormData(formRef);

        dispatch(updatePassword(formdata))
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
                localStorage.removeItem("user");
                navigate('/login');
            }
        }
        setSuccessful(false);
    }
  return (
    <div className='fw-500'>
          <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
            <div className='mt-6'>
                <label className='fw-500'>Old Password</label>
                <input type="password" name='old_password' value={oldPassword} onChange={changeOldPassword} className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='mt-6'>
                <label className='fw-500'>New Password</label>
                  <input type="password" name='new_password' value={newPassword} onChange={changeNewPassword} className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='mt-6'>
                <label className='fw-500'>Confirm New Password</label>
                  <input type="password" name='new_password_confirmation' value={newPasswordConfirm} onChange={changeNewPasswordConfirm} className='w-full p-2 border border-gray-400 rounded mt-2'/>
            </div>
            <div className='text-end mt-8'><button className='btn-primary' type='submit' disabled={disableBtn}>Update</button></div>
          </form>
          {successful ? displayMessage(message) : ''}
    </div>
  )
}
