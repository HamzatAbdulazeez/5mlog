import React from 'react'
import { useSelector } from 'react-redux';
import { AdminDashboard } from './AdminDasboard';
import { DriverDashboard } from './DriverDashboard';
import { UserDashboard } from './UserDashboard';

export const IndexDashboard = () => {
  
    const auth = useSelector((state) => state.auth);

    let dashboard = null;

    if (auth?.user?.account_type === "Customer" || auth?.user?.account_type === "Partner" ) {
      dashboard = <UserDashboard />
    }else if(auth?.user?.account_type === "Driver"){
      dashboard = <DriverDashboard />
    }else if(auth?.user?.account_type === "Administrator" || auth?.user?.account_type === "Dispatcher"){
      dashboard = <AdminDashboard />
    }

    return dashboard;
}

// || auth?.user?.account_type === "Partner"