import React from 'react'
import { useSelector } from 'react-redux';
import { ProcureAdmin } from './FormAdmin';
import { ProcureUser } from './FormUser';


export const ProcureForm = () => {
    const user = useSelector((state) => state.auth.user)

      let form = null
      if(user.account_type === "Administrator" || user.account_type === "Dispatcher"){
            return <ProcureAdmin/>
      }else if(user.account_type === "Customer" || user.account_type === "Partner"){
            return <ProcureUser/>
      }
      return form
}