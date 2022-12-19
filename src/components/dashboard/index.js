import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Layouts/Header";
import { FaBars } from "react-icons/fa";
import { UserSettings } from "./pages/SettingsUser";
import { IndexDashboard } from "./Layouts/dasboard-home/IndexDashboard";
import { IndexSidebar } from "./Layouts/Sidebars/Index";
import { Pickup } from "./pages/Pickup";
import { Freight } from "./pages/Freight";
import { InterState } from "./pages/InterState";

export default function Dashboard() {

    const navigate = useNavigate()
    const [sidebarReduce, setSidebarReduce] = useState(false)


    return (
        <div>
            <div className="font-primary">
                <Header />
                <div className="" style={{ width: sidebarReduce ? "100px" : "200px" }}>
                    <IndexSidebar />
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
                        <Route path="" element={<IndexDashboard/>} />
                        <Route path="pickup" element={<Pickup/>} />
                        <Route path="freight" element={<Freight />} />
                        <Route path="inter-state" element={<InterState />} />
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