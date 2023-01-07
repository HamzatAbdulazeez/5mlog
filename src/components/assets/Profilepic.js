import React from 'react'
import Avatar from 'react-avatar'
import { useSelector } from 'react-redux';

export const ProfileAvatar = () => {

    const user = useSelector((state) => state.auth.user) 

    const name = user?.first_name + " " + user?.last_name
    
    console.log(name)

  return (
    <Avatar name={name} size="49" textSizeRatio={0.15} color="#84c225" className="rounded-md bg-primary text-primary fw-600" />
  )
}
