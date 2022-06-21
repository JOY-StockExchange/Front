import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/Store'

export default function ForbiddenRoute() {
    const {auth} = useContext(AuthContext);
  return  auth ? <Navigate to='/' /> : <Outlet />
}
