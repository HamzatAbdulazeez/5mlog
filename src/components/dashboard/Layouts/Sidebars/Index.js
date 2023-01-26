import React from 'react'
import { useSelector } from 'react-redux';
import AdminSidebar from './Admin';
import DispatchSidebar from './Dispatch';
import DriverSidebar from './Driver';
import UsersSidebar from './Users';

export const IndexSidebar = () => {
  
    const auth = useSelector((state) => state.auth);

    let sidebar = null;

    if (auth?.user?.account_type === "Customer" || auth?.user?.account_type === "Partner") {
      sidebar = <UsersSidebar />
    }else if(auth?.user?.account_type === "Driver"){
      sidebar = <DriverSidebar />
    }else if(auth?.user?.account_type === "Dispatcher"){
      sidebar = <DispatchSidebar />
    }else if(auth?.user?.account_type === "Administrator" ){
      sidebar = <AdminSidebar />
    }

    return sidebar;
}

// || auth?.user?.account_type === "Partner"