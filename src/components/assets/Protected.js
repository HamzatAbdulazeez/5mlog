import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export const Protected = ({children}) => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if(!isLoggedIn){
        return <Navigate to="/login" replace />
    }
    return children
  
}
