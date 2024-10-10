import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
const navigate = useNavigate()
    const token  = sessionStorage.getItem('token')
    const isActiveUser = useSelector(state=>state.user.isActive)
   
    return  token ? children : navigate(to="/login")  
}

export default ProtectedRoute
