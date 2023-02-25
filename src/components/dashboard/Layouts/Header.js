import React from "react";
import {
    Menu, MenuHandler, MenuItem, MenuList, Button, Avatar,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/slices/auth";
import { ProfileAvatar } from "../../assets/Profilepic";
import { getAllNotify } from "../../../store/slices/notify";
import { useEffect } from "react";

let user = JSON.parse(localStorage.getItem("user"));

export default function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const item = useSelector((state) => state.notify.allNotify)
    const result = item.filter(item => item.status === "Unread")

    const GotoNotify = () => {
        navigate('/dashboard/notification')
    }
    useEffect(() => {
        dispatch(getAllNotify())
    }, [dispatch])

    setInterval(() => {
        user = JSON.parse(localStorage.getItem("user"));
    }, 1000);

    return (
        <div className="fixed w-full z-50  bg-white">
            <div className="flex w-full justify-between lg:head-grid">
                <div className="bg-white py-1  text-center">
                    <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671522002/5mlog/new_p2j2j6.png" alt="boglogo" className="w-18 xl:w-20 lg:h-20 h-18 mx-auto" /></Link>
                </div>
                <div className="lg:shadow bg-white py-2 px-5 flex lg:justify-between justify-end  items-center">

                    <div className="ml-10 hidden lg:flex items-center w-6/12">
                        {/* <FontAwesomeIcon icon={faBarsStaggered} size="2x" className="text-2xl lg:ml-4 cursor-pointer" onClick={sidebarReduce}/> */}
                        <p className="ml-5 fw-700 hidden lg:block"> {user?.account_type} Dashboard</p>
                        
                    </div>
                    <div className="flex items-center justify-end w-full">
                        {/* <div class="mr-6 relative mx-auto text-gray-600 hidden lg:block">
                            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" class="absolute bg-primary right-0 top-0 py-2 px-4 rounded-r-lg">
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                            </button>
                        </div> */}
                        <div className="ml-5">
                            <Menu placement="bottom-end"
                            >
                                <MenuHandler>
                                    <Button className="p-2 bg-transparent shadow-none">
                                        <div className="bg-gray-100 px-2 rounded-sm py-2 relative">
                                            <FaBell className="lg:text-xl text-lg text-primary" />
                                            <p className="absolute -top-2 left-3/4 border circle px-1 text-white text-xs bg-primary">{result?.length}</p>
                                        </div>
                                    </Button>
                                </MenuHandler>
                                <MenuList className="lg:w-60 w-56">
                                    {
                                        result.length > 0? result.slice(0,4).map(item => (
                                            <MenuItem onClick={GotoNotify} key={item.id}>
                                                <div className="flex">
                                                    <span className="mt-1 text-primary pr-2"><FaInfoCircle/></span>
                                                    <p className="truncate">{item?.message}</p>
                                                </div>
                                            </MenuItem>
                                        )) : ''
                                    }
                                </MenuList>
                            </Menu>
                        </div>
                        <div className="ml-5">
                            <Menu placement="bottom-end"
                            >
                                <MenuHandler>
                                    <Button className="p-0">
                                        {user?.photo? <Avatar src={`${process.env.REACT_APP_MEDIA_URL + user?.photo}`}
                                    alt="profifepic" /> : <ProfileAvatar/>}
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    {
                                        user.account_type === "Administrator"? 
                                        ""
                                        :
                                        <MenuItem onClick={() => navigate("/dashboard/settings")}>Settings</MenuItem>
                                    }
                                    <MenuItem onClick={()=> dispatch(logout())}>Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}