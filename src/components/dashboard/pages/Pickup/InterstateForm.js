import { Input, Textarea } from '@material-tailwind/react'
import React from 'react'
import { useSelector} from 'react-redux';
import { InterStateAdmin } from './InterAdmin';
import { InterStateUser } from './InterUser';

export const InterStateForm = () => {
    
    const user = useSelector((state) => state.auth.user)

      let form = null
      if(user.account_type === "Administrator" || user.account_type === "Dispatcher"){
            return <InterStateAdmin/>
      }else if(user.account_type === "Customer" || user.account_type === "Partner"){
            return <InterStateUser/>
      }
      return form
}