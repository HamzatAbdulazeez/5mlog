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
import { Express } from "./pages/Express";
import { Procurement } from "./pages/Procure";
import { Warehouse } from "./pages/Warehouse";
import { OrderUser } from "./pages/OrderUser";
import { OrderDetailUser } from "./pages/OrderDetailUser";
import { PickUpUser } from "./pages/OrderItems/PickupOrder";
import { InterStateOrderUser } from "./pages/OrderItems/InterStateOrder";
import { OverseaOrderUser } from "./pages/OrderItems/OverseaOrder";
import { ProcureOrderUser } from "./pages/OrderItems/ProcureOrder";
import { ExpressOrderUser } from "./pages/OrderItems/ExpressOrder";
import { WarehouseOrderUser } from "./pages/OrderItems/WarehouseOrder";
import { Tracking } from "./pages/Tracking";
import { PickupOrders } from "./pages/admin-pages/PickupOrders";
import { ViewRequest } from "./pages/admin-pages/ViewRequest";
import { InterStateOrder } from "./pages/admin-pages/InterStateOrder";
import { OverseaOrder } from "./pages/admin-pages/OverseaOrder";
import { ProcureDetailUser } from "./pages/Order-details-user/ProcureDetails";
import { WarehouseDetailUser } from "./pages/Order-details-user/warehouseDetail";
import { TransactionUser } from "./pages/Transaction";
import { ProcureOrderAdmin } from "./pages/admin-pages/ProcureOrder";
import { ExpressOrder } from "./pages/admin-pages/ExpressOrder";
import { WarehouseOrder } from "./pages/admin-pages/WarehouseOrder";
import { Customers } from "./pages/admin-pages/Customers";
import { Partners } from "./pages/admin-pages/Partners";
import { Subadmin } from "./pages/admin-pages/Subadmin";
import { RiderInfo } from "./pages/RiderInfo";
import { NewOrder } from "./pages/NewOrder";
import { MyOrder } from "./pages/rider-items/MyOrder";
import { UserDetails } from "./pages/admin-pages/UserDetails";
import { Inventory } from "./pages/admin-pages/Inventory";
import { Staff } from "./pages/admin-pages/Staff";
import { DriverOrderDetails } from "./pages/rider-items/driver-detail";
import { Notification } from "./pages/admin-pages/Notify";
import { Vehicles } from "./pages/admin-pages/Vehicle";
import { TransactionAdmin } from "./pages/admin-pages/TransactionAdmin";
import { PrintReceipt } from "./pages/Print";
import { DriverReport } from "./pages/DriverStatus";
import { PrintPayment } from "./pages/PrintPayment";

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
                        <Route path="express" element={<Express />} />
                        <Route path="procurement" element={<Procurement />} />
                        <Route path="warehouse" element={<Warehouse />} />
                        <Route path="myorders" element={<OrderUser />} />
                        <Route path="pickup-order" element={<PickUpUser />} />
                        <Route path="interstate-order" element={<InterStateOrderUser />} />
                        <Route path="oversea-order" element={<OverseaOrderUser />} />
                        <Route path="procure-order" element={<ProcureOrderUser />} />
                        <Route path="express-order" element={<ExpressOrderUser />} />
                        <Route path="warehouse-order" element={<WarehouseOrderUser />} />
                        <Route path="orderdetail" element={<OrderDetailUser />} />
                        <Route path="procuredetail" element={<ProcureDetailUser />} />
                        <Route path="warehousedetail" element={<WarehouseDetailUser/>} />
                        <Route path="transact" element={<TransactionUser />} />
                        <Route path="track" element={<Tracking />} />
                        <Route path="print" element={<PrintReceipt/>}/>
                        <Route path="receipt" element={<PrintPayment/>}/>
                        <Route path="driver-status" element={<DriverReport/>}/>
                        {/* admin routes */}
                        <Route path="admin-pickup" element={<PickupOrders />} />
                        <Route path="admin-interstate" element={<InterStateOrder />} />
                        <Route path="admin-freight" element={<OverseaOrder />} />
                        <Route path="admin-procurement" element={<ProcureOrderAdmin />} />
                        <Route path="admin-express" element={<ExpressOrder />} />
                        <Route path="admin-warehouse" element={<WarehouseOrder />} />
                        <Route path="driver-request" element={<ViewRequest />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="partners" element={<Partners />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="staff" element={<Staff />} />
                        <Route path="vehicles" element={<Vehicles />} />
                        <Route path="notification" element={<Notification />} />
                        <Route path="user-detail" element={<UserDetails />} />
                        <Route path="sub-admin" element={<Subadmin />} />
                        <Route path="settings" element={<UserSettings />} />
                        <Route path="transaction" element={<TransactionAdmin />} />
                        {/* Rider routes */}
                        <Route path="rider-form" element={<RiderInfo />} />
                        <Route path="new-orders" element={<NewOrder />} />
                        <Route path="my-orders" element={<MyOrder />} />
                        <Route path="order-details" element={<DriverOrderDetails />} />
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