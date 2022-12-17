import React from 'react'
import { useSelector } from 'react-redux';
import AdminSidebar from './Admin';
import DriverSidebar from './Driver';
import UsersSidebar from './Users';

export const IndexSidebar = () => {
  
    const auth = useSelector((state) => state.auth);

    let sidebar = null;

    if (auth?.user?.data?.account_type === "Dispatch") {
      sidebar = <UsersSidebar />
    }else if(auth?.user?.data?.account_type === "Driver"){
      sidebar = <DriverSidebar />
    }else if(auth?.user?.data?.account_type === "Admin"){
      sidebar = <AdminSidebar />
    }

    return sidebar;
}