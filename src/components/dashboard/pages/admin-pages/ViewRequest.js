import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { FaListOl } from 'react-icons/fa'
import { useLocation } from 'react-router'
import { toast } from 'react-toastify'
import authHeader from '../../../../services/auth-header'
import { Spinner } from '../../../assets/Spinner'

export const ViewRequest = () => {

    const { search } = useLocation();
    const requestId = new URLSearchParams(search).get("requestId");
    const [request, setRequest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [requestData, setRequestData] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false);

    const fetchRequest = async () =>{
        try {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/admin/view/request/orders/${requestId}`
            const response = await axios.get(url, { headers: authHeader() });
            const  data  = response.data.data
            setRequest(data);
            setLoading(false);
            console.log(data)
            setRequestData(true)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const token = JSON.parse(localStorage.getItem('lynchpin'));

    const approveRequest = async (id) => {
        try{
            setDisableBtn(true)
            const config = {
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL }/admin/approve/request/orders/${id}`,
                headers: { 
                    'Authorization': 'Bearer ' + token 
                }
            }
            const response = await axios(config)
            toast.success("sucessfull")
            setDisableBtn(false)
            setRequestData(false)
            return response
        }catch (error){
            toast.error(error.message)
        }
    }
    useEffect(() => {
        fetchRequest() // eslint-disable-next-line 
    }, [])
    if(loading){
        return <Spinner/>
    } 


  return (
    <div className='min-h-screen'>
        <div className='px-3 py-10 bg-white'>
            <p className='fw-600 text-xl pb-4'>Driver(s) Request for Delivery</p>
            {requestData && <p className='flex items-center fw-600 lg:text-xl'><span className='pr-1'><FaListOl/></span> Order Id: <span className='text-primary pl-6'>{request[0].order_id}</span></p>}
        </div>
        {/* content */}
        <div className='lg:p-5 px-3'>
            <div className='lg:grid-2 justify-between bg-white lg:p-10 lg:pt-4 shadow-md rounded-lg'>
                {requestData &&
                    ( <div>
                        {
                        request.map((item ) =>{
                            return (
                                <div className='mt-6'>
                                    <div className='bg-light p-4 lg:p-6 shadow-md rounded'>
                                        <p className='fw-600 pb-4'>Driver's Information</p>
                                        <div className='py-2 border-b border-gray-300 flex'>
                                            <p className='w-3/12 fw-500'>Name:</p>
                                            <p>{item?.driver?.first_name} {item?.driver?.last_name}</p>
                                        </div>
                                        <div className='py-2 border-b border-gray-300 flex'>
                                            <p className='lg:w-3/12 w-5/12 fw-500'>Total Deliveries:</p>
                                            <p className='lg:w-9/12 w-7/12'>42</p>
                                        </div>
                                        <div className='py-2 border-b border-gray-300 flex'>
                                            <p className='w-3/12 fw-500'>Route:</p>
                                            <p>{item?.driver?.service_information?.preferred_route}</p>
                                        </div>
                                        <div className='py-2 border-b border-gray-300 flex'>
                                            <p className='lg:w-3/12 w-5/12 fw-500'>Vehicle Type:</p>
                                            <p className='lg:w-9/12 w-7/12'>{item?.driver?.service_information?.vehicle_type}</p>
                                        </div>
                                        <div className='mt-3'>
                                            <button className='btn bg-primary w-full text-white fw-600' onClick={() => approveRequest(item.id)} disabled={disableBtn}>Approve Request</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                     </div>
                     )
                }
            </div>
        </div>
    </div>
  )
}
