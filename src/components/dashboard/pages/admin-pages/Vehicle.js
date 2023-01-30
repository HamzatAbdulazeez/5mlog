import React, {useState, useEffect} from 'react'
import { Input, Textarea } from '@material-tailwind/react'
import { FaTimes } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { createItem, deleteInventory, getInventories } from '../../../../store/slices/inventService'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearMessage } from '../../../../store/slices/messages'
import { InventoryTable } from '../../assets/Tables/Admin-Table/inventory'
import { BsListTask } from 'react-icons/bs'
import { Spinner2 } from '../../../assets/Spinner'


export const Vehicles = () => {

    const[vehicles, setVehicles] = useState(false)
    const[details, setDetails] = useState(false)
    const[item, setItem] = useState(false)

    const ViewMore = (id) => {
        setItem(id)
        setDetails(true)
    }
    const inventModal = () => {
        setVehicles(true)
    }
    const CloseModal = () => {
        setVehicles(false)
        setDetails(false)
    }
    const { message } = useSelector((state) => state.message);
    const success =  useSelector((state) => state.inventory.success);

    const dispatch = useDispatch()

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const {register, getValues} = useForm()

    useEffect(() => {
        dispatch(clearMessage());
        dispatch(getInventories())
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const values = getValues();

            dispatch(createItem(values))
                .then(() => {
                    setDisableBtn(false)
                    setSuccessful(true)
                    CloseModal()
                    setTimeout(() => {
                        dispatch(getInventories())
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
        const DeleteInventory = (id) => {
            dispatch(deleteInventory(id))
            setTimeout(() => {
                dispatch(getInventories())
            }, 3000);
        }

  return (
    <div className='min-h-screen fs-500'>
        <div className='lg:h-44 h-48 bg-vehicle lg:flex justify-between  bg-cover bg-bottom text-white w-full bg-white  items-center lg:px-12 px-4'>
            <div className='lg:pt-0 pt-6'>
                <p className='fw-600 lg:text-2xl text-xl'>5M Logistics Vehicles</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Store and manage informations of all vehicles used for delivery.</p>
            </div>
            {/* add inventory */}
            <div className='mt-4 lg:mt-0'>
                <button onClick={inventModal} className="bg-primary fw-600 px-4 lg:px-7 py-2 rounded-md shadow-xl">Add New Vehicle</button>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                {/* inventory table */}
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-primary text-2xl"><BsListTask/></span>My Inventory(ies) Listing</p>
                </div>
                {success === false? <Spinner2/> : <InventoryTable inventDelete={DeleteInventory} detailModal={ViewMore}/>}
            </div>
        </div>
        {
            vehicles && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 max-h-03 overflow-scroll rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-4'>Add New Item to Inventory</p>
                        <div className='lg:px-6 py-6'>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                      <label className='fs-500 mb-2 block'>Name</label>
                                      <Input type="text" label="Name of item" name='name' {...register('name')}/>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:w-6/12 lg:pr-2'>
                                            <label className='fs-500 mb-2 block'>Quantity (units)</label>
                                            <Input type="text" label="Number of items" name='quantity' {...register('quantity')} />
                                        </div>
                                        <div className='mt-5 lg:w-6/12 lg:pl-2'>
                                            <label className='fs-500 mb-2 block'>Net Value ($)</label>
                                            <Input type="text" label="Net Value" name='total_cost' {...register('total_cost')} />
                                        </div>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Enter Date</label>
                                            <Input type="date" label="item storage duration" name='date_of_purchase' {...register('date_of_purchase')} />
                                        </div>
                                        <div  className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Storage location</label>
                                            <select label='Select Type' name='location' {...register('location')} className='p-2 border rounded border-gray-400 w-full'>
                                                <option value='Houston Texas'>Houston Texas</option>
                                                <option value='Ikeja Lagos'>Ikeja Lagos</option>
                                                <option value='Abuja'>Abuja</option>
                                                <option value='Ogbomoso Oyo'>Ogbomoso Oyo</option>
                                                <option value='Ahafsusan Kaduna'>Ahafsusan Kaduna</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div  className='mt-5'>
                                        <label className='fs-500 mb-2 block'>Item Description</label>
                                        <Textarea name='description' {...register('description')}></Textarea>
                                    </div>
                                    <div className='text-end mt-6'>
                                        <button className='btn-primary lg:px-8' disabled={disableBtn}>Add New Item</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
        {
            details && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 max-h-03 overflow-scroll rounded-md overscroll-none w-11/12 py-6 shadow scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-2'>{item?.name}</p>
                        <div className='lg:px-6 py-6'>
                            <div className='flex'>
                                <p  className='fw-500'>Storage Location:</p>
                                <p className='pl-2'>{item?.location}</p>
                            </div>
                            <div className='mt-4'>
                                <p className='fw-500'>Description:</p>
                                <p className='max-h-48'>{item?.description}</p>
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
