import React from 'react'
import { useSelector} from 'react-redux';
import { PickupAdmin } from './pickAdmin';
import { PickupUser } from './pickUser';

export const PickupForm = () => {
   
    const user = useSelector((state) => state.auth.user)

      let form = null
      if(user.account_type === "Administrator" || user.account_type === "Dispatcher"){
            return <PickupAdmin/>
      }else if(user.account_type === "Customer" || user.account_type === "Partner"){
            return <PickupUser/>
      }
      return form
}
