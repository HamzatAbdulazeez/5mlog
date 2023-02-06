import { Input, Textarea } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect,  useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getMyOrder } from '../../../../store/slices/driverOrder'
import { Spinner2 } from '../../../assets/Spinner'
import { MyOrderTable } from '../../assets/Tables/Driver-table/myOrder'

export const MyOrder = () => {

    const dispatch = useDispatch()
    const success = useSelector((state) => state.driver.success)

    const [endOrder, setEndOrder] = useState(false)
    const [item, setItem] = useState(false)  // eslint-disable-next-line 
    const [loading, setLoading] = useState(false)
    const token = JSON.parse(localStorage.getItem('lynchpin'));


    const OpenModal = (id) => {
        setItem(id)
        setEndOrder(true)
    }
    const CloseModal = () => {
        setEndOrder(false)
    }

    useEffect(() => {
        dispatch(getMyOrder())
    }, [dispatch])
    
    const [remark, setRemark] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setSelectedFile(imageData)
        const formData = new FormData();
        formData.append("status", remark);
        formData.append('image', selectedFile);
        try {
            setLoading(true);
            console.log(formData)
            const config = {
              headers: { 
                  'Authorization': 'Bearer ' + token 
              }
            };
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/driver/confirm/delivery/${item}`, formData, config)
            toast.success('End Order Successfully')
            CloseModal();
            setTimeout(() => {
              dispatch(getMyOrder())
          }, 3000);
            return response
        }catch (error) {
            CloseModal();
            setLoading(false);
            if (error?.response?.data?.message) {
              toast.error(error.response.data.message, {
                duration: "4000",
                position: "bottom",
              });
              return;
            };
        }}

  return (
    <div className='min-h-screen fs-500'>
        <div className='h-44 bg-freight bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 text-xl lg:text-2xl'>My Orders</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>View and manage orders from customer / partners which are assigned to you.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3'>
          <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-primary text-2xl"><GoPackage/></span>My Order Listing</p>
                </div>
                <div>
                    {success === false?  <Spinner2/> : <MyOrderTable endOrder={OpenModal}/>}
                </div>
            </div>
        </div>
        {
            endOrder && (
                    <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 max-h-03 overflow-scroll rounded-md overscroll-none w-11/12 py-6 shadow scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-2'>Delivery Details</p>
                        <div className='lg:px-6 py-6'>
                            <form onSubmit={handleSubmit}>
                                <div>
                                {/* <FileUploader
                                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                                    onFileSelectError={({ error }) => alert(error)}
                                    />                                 */}
                                    <Input type='file' onChange={(e) => setSelectedFile(e.target.files[0])} />
                                </div>
                                <div className='mt-5'>
                                    <Textarea label='Remarks' value={remark} onChange={(e) => setRemark(e.target.value)}/>
                                </div>
                                <div className='text-end mt-6'>
                                    <button className='btn-primary lg:px-8'>Submit</button>
                                </div>
                            </form>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
                )
            }
    </div>
  )
}

