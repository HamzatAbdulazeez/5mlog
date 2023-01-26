import React, {useEffect, useState} from 'react'
import { FaListAlt, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrders, getInterstateOrder } from '../../../../store/slices/userOrder'
import { InterstateTable } from '../../assets/Tables/User-Table/interstate'
import { Spinner2 } from '../../../assets/Spinner'
import { formatPriceNgn } from '../../assets/RegexFormat/Format'
import { PaystackButton } from 'react-paystack'

export const InterStateOrderUser = () => {

    const[payment, setPayment] = useState(false)
    const [item, setItem] = useState()
    const paymentModal = (item) => {
        setPayment(true)
        setItem(item)
    }
    const CloseModal = () => {
        setPayment(false)
    }
   
    const dispatch = useDispatch()

    const deleteOrder = (id) => {
        dispatch(deleteOrders(id))
        setTimeout(() => {
            dispatch(getInterstateOrder())
        }, 3000);
    }

    const success = useSelector((state) => state.order.success);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getInterstateOrder())
    }, [dispatch])

    // paystack payment
    // const sendOrder = async (payment) => {
    //     try {
    //       setLoading(true);
    //       const payload = {
    //         order_id: item.order_id
    //         user_id: user.id
    //         service_type: item.service_type
    //          amount: item.price
    //         paymentInfo: {
    //           reference: payment.reference,
    //           amount: totalAmount,
    //         },
    //         discount: 0,
    //         deliveryFee: 0,
    //         totalAmount: totalAmount,
    //          };
    //       console.log(payload);
    //       const config = {
    //         headers: {
    //           "Content-Type": "Application/json",
    //           authorization: localStorage.getItem("auth_token"),
    //         },
    //       };
    //       const res = await Axios.post("/orders/submit-order", payload, config);
    //         return res
    //     } catch (error) {
    //       CloseModal();
    //       setLoading(false);
    //       if (error?.response?.data?.message) {
    //         toast.error(error.response.data.message, {
    //           duration: "4000",
    //           position: "bottom",
    //         });
    //         return;
    //       }
    //       toaster.notify(error.message, {
    //         duration: "4000",
    //         position: "bottom",
    //       });
         
    //     }
    //   };
    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
        // sendOrder(reference);
      };
      const handlePaystackCloseAction = () => {
        console.log("incorrect transaction");
      };
    
      const config = {
        reference: "TR-" + new Date().getTime().toString(),
        email: user?.email,
        amount: item?.price,
        publicKey: "pk_test_b510f76c925d5a1fefd9b2a1286fce525ac44b41",
      };
      const componentProps = {
        ...config,
        // text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
      };

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>InterState Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and monitor the transportation of your items.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center'><span className="pr-2"><FaListAlt/></span>Orders Listing</p>
                </div>
                <div>
                    { success === false?  <Spinner2/> : <InterstateTable paymentModal={paymentModal} deleteOrder={deleteOrder} />}
                </div>
            </div>
        </div>
        {
            payment && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-light relative lg:w-4/12 rounded-md overscroll-none w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className='text-xl text-white fw-600 text-center bg-primary py-3 rounded-t-md'>
                            <p>Payment Details</p>
                        </div>
                        <div className='lg:px-6 px-3 py-6'>
                            <p className='mb-4'>Order Id: <span className='pl-2'>{item?.order_id}</span></p>
                            <p className='my-4'>Payment Status:<span className='pl-2'>{item.paid? "Paid" : "Not paid" }</span></p>
                            <p className='mx-auto w-48 h-36 grid place-content-center shadow-lg rounded-lg fw-700 text-xl bg-white'>
                                {item?.price? formatPriceNgn(item.price) : "---"}
                            </p>
                            <div className='text-end mt-6'>
                                {
                                    item?.price? 
                                    <PaystackButton
                                    text="Pay Now"
                                    label="Pay Now"
                                    className='bg-primary lg:px-12 py-2 rounded-lg fw-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-600 fs-500 lg:fs-700 px-6'                                    {...componentProps}
                                    />
                                    :
                                    <button
                                    className='bg-primary lg:px-12 py-2 rounded-lg fw-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-600 fs-500 lg:fs-700 px-6'                                    {...componentProps}
                                    >
                                        No Price
                                    </button>
                                }
                            </div>
                        </div>
                        <FaTimes className='absolute text-red-500 top-3 bg-white right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}