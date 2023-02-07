import React from 'react'
import { useSelector } from 'react-redux';
import { WarehouseAdmin } from './formAdmin';
import { WarehouseUser } from './formUser';


export const WarehouseForm = () => {
    
    const user = useSelector((state) => state.auth.user)

    let form = null
    if(user.account_type === "Administrator" || user.account_type === "Dispatcher"){
          return <WarehouseAdmin/>
    }else if(user.account_type === "Customer" || user.account_type === "Partner"){
          return <WarehouseUser/>
    }
    return form
}
