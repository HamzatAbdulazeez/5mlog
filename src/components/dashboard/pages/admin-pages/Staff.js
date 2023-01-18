import React, {useState, useEffect} from 'react'
import { Input } from '@material-tailwind/react'
import { FaTimes } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createStaffs, getStaffs } from '../../../../store/slices/staffService'
import { toast } from 'react-toastify'
import { clearMessage } from '../../../../store/slices/messages'
import { Spinner2 } from '../../../assets/Spinner'
import { StaffTable } from '../../assets/Tables/Admin-Table/staff'
import { BsListTask } from 'react-icons/bs'

export const Staff = () => {

    const { message } = useSelector((state) => state.message);
    const success =  useSelector((state) => state.staff.success);
    const dispatch = useDispatch()
    const[staff, setStaff] = useState(false)
    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    const {register, getValues} = useForm()
    const staffModal = () => {
        setStaff(true)
    }
    const CloseModal = () => {
        setStaff(false)
    }
    useEffect(() => {
        dispatch(clearMessage());
        dispatch(getStaffs())
    }, [dispatch]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const values = getValues();

            dispatch(createStaffs(values))
                .then(() => {
                    setDisableBtn(false)
                    setSuccessful(true)
                    CloseModal()
                    setTimeout(() => {
                        dispatch(getStaffs())
                    }, 3000);
                })
                .catch(() => {
                    setDisableBtn(false)
                    setSuccessful(false)
                });
        }
        const displayMessage = (message) => {
            if (message) {
                if (!message.success) {
                    toast.error((Object.values(message.errors).toString()));
                }
                else {
                    toast.success(message.message);
                }
            }
            setSuccessful(false);
        }

  return (
    <div className='min-h-screen fs-500'>
        <div className='lg:h-44 h-48 bg-users  lg:bg-fill bg-cover  text-white w-full bg-white lg:flex justify-between items-center lg:pl-12 px-4'>
            <div className='pt-6'>
                <p className='fw-600 lg:text-2xl text-xl'>5M Logistics Staff</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Store and manage informations of all staffs in 5M Logistics.</p>
            </div>
            {/* add staff */}
            <div className='mt-4 lg:mt-0'>
                <button onClick={staffModal} className="bg-primary fw-600 px-4 lg:px-7 py-2 rounded-md shadow-xl">Add New Staff</button>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5  px-3 mt-6'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-primary text-2xl"><BsListTask/></span>My Staff(s) Listing</p>
                </div>
                {success === false? <Spinner2/> : <StaffTable/>}
            </div>
        </div>
        {
            staff && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 max-h-02 lg:max-h-01 overflow-scroll lg:overflow-none rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-4'>Add New Staff</p>
                        <div className='lg:px-6 py-6'>
                            <div>
                                <form  onSubmit={handleSubmit}>
                                    <div>
                                      <label className='fs-500 mb-2 block'>Full Name</label>
                                      <Input type="text" label="Full Name of Staff" name='full_name' {...register('full_name')} required/>
                                    </div>
                                    <div className='mt-5'>
                                      <label className='fs-500 mb-2 block'>Position / Level</label>
                                      <Input type="text" label="" name='position' {...register('position')} required />
                                    </div>
                                    <div  className='mt-5'>
                                        <label className='fs-500 mb-2 block'>Staff Location</label>
                                        <select label='Select Type' name='nationality' {...register('nationality')}  className="p-2 font-light fs-500 rounded-lg border border-gray-400 w-full text-gray-600" required>
                                            <option value='Houston Texas'>Houston Texas</option>
                                            <option value='Ikeja Lagos'>Ikeja Lagos</option>
                                            <option value='Abuja'>Abuja</option>
                                            <option value='Ogbomoso Oyo'>Ogbomoso Oyo</option>
                                            <option value='Ahafsusan Kaduna'>Ahafsusan Kaduna</option>
                                        </select>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Date Joined</label>
                                            <Input type="date" label="" name='date_joined' {...register('date_joined')} required/>
                                        </div>
                                        <div className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Contact No</label>
                                            <Input type="number" label="Phone number" name='contact_number' {...register('contact_number')} required />
                                        </div>
                                    </div>
                                    <div className='text-end mt-6'>
                                        <button className='btn-primary lg:px-10' disabled={disableBtn}>Create Staff</button>
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
