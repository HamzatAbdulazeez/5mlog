import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Login } from './forms/Login'
import { Register } from './forms/Register'

export const SignUp = () => {
    const cont = {
        width: "60%",
        position: "absolute",
        right: "0",
        transition: "2s",
        height:"100%"
    }
    const ban = {
        width: "40%",
        position: "absolute",
        left: "0",
        transition: "2s",
        height:"100%",
        backgroundImage: "linear-gradient(to right bottom, rgba(4, 43, 84, 0.6), rgba(4, 43, 84, 0.9)), url('https://img.freepik.com/premium-photo/we-dont-take-time-granted-shot-delivery-man-standing-by-his-van_590464-2929.jpg?w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const styles = {
        width: "60%",
        position: "absolute",
        right: "40%",
        transition: "2s",
        height:"100%"
    }
    const bans = {
        width: "40%",
        position: "absolute",
        backgroundColor: "blue",
        right: "0",
        transition: "2s",
        height:"100%",
        backgroundImage: "linear-gradient(to right bottom, rgba(4, 43, 84, 0.6), rgba(4, 43, 84, 0.9)), url('https://media.istockphoto.com/id/1377893181/photo/shot-of-young-man-delivering-a-package-while-sitting-in-a-vehicle.jpg?b=1&s=170667a&w=0&k=20&c=XweAFF0r3bKaydPxQ5hT2B3RKnv5FiAAFRb9xya1nWI=')",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    const [sign , setSign] = useState()
    const [welcome , setWelcome] = useState()

    function ChangeSign() {
        setSign(!sign)
        setWelcome(!welcome)
    }
    

  return (
    <div className='font-primary'>
        <div className='lg:h-screen bg-primary'>
            <div className='lg:flex block lg:h-full'>
                <div style={sign? ban : bans} className="flex justify-center items-center text-white">
                    <div className='text-center'>
                        <p className='fw-700 text-center lg:text-4xl'>
                            {sign? "Hello There" : "Welcome Back!"}
                        </p>
                        <p className='text-center w-10/12 fs-500 lg:my-10 mx-auto'>
                            {sign? "Sign Up and discover a great amount of new opportunities in logistics and related services" : "To keep connected with us please login with your personal info"}
                        </p>
                        <button onClick={ChangeSign} className="px-6 py-2 text-center mx-auto border border-gray-100 rounded-xl">
                            {sign? "Create Account" : "Sign In" }
                        </button>
                    </div>
                </div>
                <div style={sign? cont : styles} className="bg-white z-10">
                    <div className='h-full flex justify-center items-center overflow-y-auto'>
                        <div className='xl:w-7/12 lg:w-8/12 md:w-10/12 '>
                            <Link to="/">
                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt='' />
                            </Link>
                            {sign? <p className='lg:text-2xl fw-700 mb-6'>Log Into Your Account</p> : <p className='lg:text-2xl fw-700 mb-6'>Create an Account</p>}
                            {sign? <Login/> : <Register/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
