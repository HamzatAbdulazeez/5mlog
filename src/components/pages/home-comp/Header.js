import { Link, NavLink } from "react-router-dom";
import React, {useState} from "react";
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaRegWindowClose } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const Header = () => {

    const auth = useSelector((state) => state.auth);
    const [menuShow, setMenuShow] = useState(false)

    const CloseMenu = () => {
        setMenuShow(false);
    }
    const activeStyle = {
        fontWeight: "700",
        borderBottom: "4px solid rgba(132, 194, 37, 1)",
        color: "rgba(132, 194, 37, 1)"
    };

    return (
        <div className="w-full">
            <div className="relative z-10">
                <div className="box">
                    <div className="justify-between items-center flex py-3 pb-3">
                        <div className="w-3/12 flex">
                            <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671522002/5mlog/new_p2j2j6.png" alt="logo" className="lg:w-24 w-16"/></Link>
                        </div>
                        <div className="w-6/12 hidden lg:flex fw-500 justify-between items-center">
                            <NavLink 
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                to="/" 
                                >
                                <button >Home</button>
                            </NavLink>
                            <NavLink 
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                to="/about" className="">
                                <button >About Us</button>
                            </NavLink>
                            <NavLink
                                style={({ isActive }) => (isActive ? activeStyle : undefined)} 
                                to="/services" className="">
                                <button >Services</button>
                            </NavLink>
                            <NavLink 
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                to="/faqs" className="">
                                <button >FAQs</button>
                            </NavLink>
                            <NavLink 
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                to="/contact" className="">
                                <button >Contact Us</button>
                            </NavLink>
                        </div>
                        <div className='w-3/12 hidden lg:flex justify-end items-center'>
                            { auth?.isLoggedIn? 
                                <div>
                                    <Link to="/dashboard" className="text-white bg-black py-2 px-6 rounded-md fw-600">
                                        Dashboard
                                    </Link>
                                </div> : 
                                <div>
                                    <Link to="/login" className="text-black py-2 fs-700 px-6 rounded-lg fw-600 mr-3">
                                        Sign In
                                    </Link>
                                    <Link to="/signup" className="text-white bg-black py-2 px-6 rounded-md fw-600">
                                        <button  >Sign Up</button>
                                    </Link>
                                </div>

                            }
                        </div>
                        <div className="text-black lg:hidden">
                            <HiMenuAlt3 className="text-4xl fw-700" onClick={() => {setMenuShow(true)}}/>
                        </div>
                        
                    </div>
                </div>
                {menuShow && (
                        <div className="w-full bg-op absolute lg:hidden z-40 top-0 min-h-screen" onClick={CloseMenu}>
                            <div className="absolute menu lg:hidden w-10/12 bg-white px-6 top-0 min-h-screen">
                                <div className="flex justify-between pt-5">
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669899103/5mlog/Rectangle_19530_uity99.png" alt="logo" className="w-16" />
                                    <FaRegWindowClose onClick={() => {setMenuShow(false)}}/>
                                </div>
                                <div className="mt-10">
                                    <ul className="list-none">
                                        <li className="py-4"><Link to="/">Home</Link></li>
                                        <li className="py-4"><Link to="/about">About Us</Link></li>
                                        <li className="py-4"><Link to="/services">Our Services</Link></li>
                                        <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                                        <li className="py-4"><Link to="/faqs">FAQs</Link></li>
                                        <li className="py-4 mt-7"><Link to="/login" className='bg-primary text-white px-6 py-2'>Login</Link></li>
                                        <li className="py-4 mt-3"><Link to="/signup" className='border-primary fw-600 px-6 py-2'>Sign Up</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}