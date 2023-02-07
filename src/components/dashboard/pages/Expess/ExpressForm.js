import React from 'react'
import { useSelector } from 'react-redux';
import { ExpressAdmin } from './ExpressAdmin';
import { ExpressUser } from './ExpressUser';

export const ExpressForm = () => {
    const user = useSelector((state) => state.auth.user)

      let form = null
      if(user.account_type === "Administrator" || user.account_type === "Dispatcher"){
            return <ExpressAdmin/>
      }else if(user.account_type === "Customer" || user.account_type === "Partner"){
            return <ExpressUser/>
      }
      return form
}