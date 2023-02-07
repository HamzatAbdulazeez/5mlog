import React from 'react'
import { useSelector} from 'react-redux';
import { FreightAdmin } from './AdminForm';
import { FreightUser } from './UserForm';


export const FreightForm = () => {
      const user = useSelector((state) => state.auth.user)

      let form = null
      if(user.account_type === "Administrator" || user.account_type === "Dispatcher"){
            return <FreightAdmin/>
      }else if(user.account_type === "Customer" || user.account_type === "Partner"){
            return <FreightUser/>
      }
      return form
}