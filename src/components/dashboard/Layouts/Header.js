import React from "react";
import {
    Menu, MenuHandler, MenuItem, MenuList, Button, Avatar,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/auth";



export default function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    


    return (
        <div className="fixed w-full z-50  bg-white">
            <div className="flex w-full justify-between lg:head-grid">
                <div className="bg-white py-1  text-center">
                    <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904666/5mlog/Rectangle_19530_wiuj5i.png" alt="boglogo" className="w-20 xl:w-24 mx-auto" /></Link>
                </div>
                <div className="lg:shadow bg-white py-2 px-5 flex lg:justify-between justify-end  items-center">

                    <div className="ml-10 hidden lg:flex items-center w-6/12">
                        {/* <FontAwesomeIcon icon={faBarsStaggered} size="2x" className="text-2xl lg:ml-4 cursor-pointer" onClick={sidebarReduce}/> */}
                        <p className="ml-5 fw-700 hidden lg:block"> Dasboard</p>
                        
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
                                            <FaBell className="lg:text-xl  text-primary" />
                                            <p className="absolute -top-2 left-3/4 border circle px-1 text-white text-xs bg-primary">6</p>
                                        </div>
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/dashboard/transact")}>Transactions</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/inbox")}>Inbox</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/meetings")}>Meetings</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/settings")}>Settings</MenuItem>
                                    <MenuItem >Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        <div className="ml-5">
                            <Menu placement="bottom-end"
                            >
                                <MenuHandler>
                                    <Button className="p-0">
                                        <Avatar src="https://i.stack.imgur.com/l60Hf.png"
                                    alt="profifepic" />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/dashboard/pickup")}>Logistics</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/freight")}>Freights</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/orders")}>My Orders</MenuItem>
                                    <MenuItem onClick={() => navigate("/dashboard/settings")}>Settings</MenuItem>
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