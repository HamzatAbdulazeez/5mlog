import React from 'react'
import { useSelector } from 'react-redux';
import AdminSidebar from './Admin';
import DriverSidebar from './Driver';
// import UsersSidebar from './Users';

export const IndexSidebar = () => {
  
    const auth = useSelector((state) => state.auth);

    let sidebar = null;

    if (auth?.user?.account_type === "Customer") {
      sidebar = <AdminSidebar />
    }else if(auth?.user?.account_type === "Driver"){
      sidebar = <DriverSidebar />
    }else if(auth?.user?.account_type === "Admin"){
      sidebar = <AdminSidebar />
    }

    return sidebar;
}