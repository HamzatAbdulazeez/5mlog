import {  BsFillGrid1X2Fill, BsGear, BsBag, BsBoxArrowRight } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md"
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { logout } from "../../../../store/slices/auth";
import { AiOutlineForm } from "react-icons/ai";


const DriverSidebar = () => {

    const [signOut, setSignOut] = useState(false);
    // const [orderDrop, setOrderDrop] = useState(false);
    function CloseModal() {
        setSignOut(false)
    }
    const [showSideBar, setShowSideBar] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 900) {
                setShowSideBar(false);
            } else {
                setShowSideBar(true);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);


    }, []);

    const signOutAction = () => {
        dispatch(logout())
            .then(() => {
                localStorage.removeItem("user");
                navigate('/');
            })
            .catch(() => {});
    }

    function unShow() {
        if (window.innerWidth < 900) {
            setShowSideBar(false);
        } else {
            setShowSideBar(true);
        }
    }
    const sideBarStyle = {
        cursorStyle: {
            cursor: "pointer"
        }
    }
    const activeStyle = {
        backgroundColor: "rgba(132, 194, 37, .1)",
        // color: "rgba(63, 121, 173, 1)",
        borderRight: "5px solid rgba(132, 194, 37, 1)"
    };

    return (
        <div>
            <div>
                <FaBars className="text-2xl fixed top-6 z-50 menu-btn lg:hidden" onClick={() => {
                    setShowSideBar(current => !current);
                }} />
            </div>
            {showSideBar && (
                <div className="fixed z-20 fs-500 bg-white top-20 grid items-between w-6/12 lg:sidebar-w shadow min-h-screen pt-2 px-2">
                    <div className="">
                        <NavLink
                            to=""
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"

                            onClick={unShow}
                        >
                            <BsFillGrid1X2Fill className="text-xl" />
                            <p className="pl-3"> Dashboard</p>
                        </NavLink>
                        <NavLink 
                            to="new-orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsBag className="text-xl" />
                                <p className="pl-3">New Orders</p>
                        </NavLink>
                        <NavLink 
                            to="my-orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <MdOutlineInventory className="text-xl" />
                                <p className="pl-3">My Orders</p>
                        </NavLink>
                        <NavLink 
                            to="rider-form"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <AiOutlineForm className="text-xl" />
                                <p className="pl-3">Rider Info</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="settings"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsGear className="text-xl" />
                                <p className="pl-3">Settings</p>
                        </NavLink>
                        <Link>
                            <div
                                style={sideBarStyle.cursorStyle}
                                onClick={ () => setSignOut(true)}
                                className="w-full py-2 fw-600 pl-2 flex my-2  rounded-lg">
                                <BsBoxArrowRight className="text-lg" />
                                <p className="pl-3">Sign Out</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
            {signOut && (
                <div className="fixed font-primary left-0 top-0 bg-op w-full h-screen bg-white flex justify-center items-center z-40" onClick={CloseModal}>
                    <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <div className="lg:px-6">
                            <div className="flex text-xl fw-600">
                                <p className="pr-4 text-red-600"><HiOutlineLogout/></p>
                                <p>Sign Out ?</p>
                            </div>
                            <p>Are you sure you want to sign out ?</p>
                        </div>
                        <div className="text-end px-4 my-5">
                            <button className="btn py-1 border-pri text-primary" onClick={CloseModal}>No</button>
                            <button className="btn py-1 ml-5 border border-red-600 text-red-600" onClick={signOutAction}>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default DriverSidebar