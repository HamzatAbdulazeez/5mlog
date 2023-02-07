import axios from 'axios';
import React, {useRef} from 'react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Spinner2 } from '../../assets/Spinner';

export const ContactForm = () => {

    const captchaRef = useRef(null)
    const { register, getValues } = useForm();
    const [loading, setLoading] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setDisableBtn(true);
        
        const values = getValues();

        try {
            setLoading(true);
            console.log(values)
            // const config = {
            //   headers: { 
            //       'Authorization': 'Bearer ' + token 
            //   }
            // };
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/contact`, values)
            toast.success('Message Submitted')
            return response
        }catch (error) {
            setLoading(false);
            if (error?.response?.data?.message) {
              toast.error(error.response.data.message, {
                duration: "4000",
                position: "bottom",
              });
              return;
            };
        }
    }
    if(loading){
        return <Spinner2/>
    }

  return (
    <form  onSubmit={handleSubmit}>
        <div className='lg:flex'>
            <div className='lg:w-6/12 lg:pr-6'>
                <label className='fw-500'>Full Name</label>
                <input type="text" placeholder="Enter your first name" {...register("name")} className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                <label className='fw-500'>Subject</label>
                <input type="text" placeholder="Enter your last name" {...register("subject")} className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
        </div>
        <div className='lg:flex mt-6 lg:mt-4'>
            <div className='lg:w-6/12 lg:pr-6'>
                <label className='fw-500'>Phone Number</label>
                <input type="text" placeholder="Enter phone number" {...register("phone")} className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
            <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                <label className='fw-500'>Your Email</label>
                <input type="text" placeholder="Enter your email" {...register("email")} className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400"/>
            </div>
        </div>
        <div className='mt-6'>
            <label className='fw-500'>Your Message</label>
            <textarea {...register("message")} className="w-full lg:py-1 p-2 mt-2 rounded border border-gray-400 h-24"></textarea>
        </div>
        <div className="mt-4 w-full overflow-hidden">
            <ReCAPTCHA
                sitekey='6Ldn9IUjAAAAAH89eGuKD2wq2OGK6ugV-zHXxeEA'
                ref={captchaRef}
            />
        </div>
        <div className='text-end mt-6'>
            <button disabled={disableBtn} className='btn-primary'>Send Message</button>
        </div>
    </form>
  )
}
