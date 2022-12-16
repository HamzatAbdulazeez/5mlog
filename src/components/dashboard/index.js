import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Layouts/Header";
import ClientSidebar from "./Layouts/Sidebars/Users";
// import { RequestService } from "./pages/RequestService";
import { FaBars } from "react-icons/fa";
// import { UserDashboard } from "./Layouts/dasboard-home/UserDashboard";
import { UserSettings } from "./pages/SettingsUser";
import AdminSidebar from "./Layouts/Sidebars/Admin";
import { AdminDashboard } from "./Layouts/dasboard-home/AdminDasboard";
import DriverSidebar from "./Layouts/Sidebars/Driver";
import { DriverDashboard } from "./Layouts/dasboard-home/DriverDashboard";

export default function ClientDashboard() {

    const navigate = useNavigate()
    const [sidebarReduce, setSidebarReduce] = useState(false)


    return (
        <div>
            <div className="font-primary">
                <Header />
                <div className="" style={{ width: sidebarReduce ? "100px" : "200px" }}>
                    <DriverSidebar />
                </div>
                <div className="fixed top-0 hidden lg:block sub-menu z-50">
                    <FaBars  className="text-2xl lg:ml-4 cursor-pointer" onClick={() => setSidebarReduce(!sidebarReduce)} />
                </div>
                <div
                    style={{
                        width: sidebarReduce ? "calc(100% - 45px)" : "",
                        zIndex: sidebarReduce ? "45" : ""
                    }}
                    className="lg:main-p pt-21 home-bg pb-10 relative">
                    <Routes>
                        <Route path="" element={<DriverDashboard />} />
                        <Route path="settings" element={<UserSettings />} />
                    </Routes>

                </div>
                <div
                    style={{
                        width: sidebarReduce ? "calc(100% - 45px)" : "",
                        zIndex: sidebarReduce ? "45" : ""
                    }}
                    className="lg:flex relative bg-white text-center lg:main-p px-5 py-5 text-primary fw-500 justify-between fs-400">
                    <div className="flex mb-5 lg:mb-0">
                        <ul className="flex w-full justify-evenly lg:justify-start">
                            <li onClick={() => navigate("/")} className="cursor-pointer">Homepage</li>
                            <li className="lg:px-6 px-3 cursor-pointer" onClick={() => navigate("/about")} >About</li>
                            <li onClick={() => navigate("/services")} className="cursor-pointer">Services</li>
                        </ul>
                    </div>
                    <div>
                        Copyright &copy; {new Date().getFullYear()}{' '} 5M Logistics
                    </div>
                </div>
            </div>
        </div>

    )
}