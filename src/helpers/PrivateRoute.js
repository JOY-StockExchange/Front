import React, { useContext } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { AuthContext } from '../contexts/Store';

function PrivateRoute() {
    const {auth} = useContext(AuthContext);
    return auth ? <Outlet /> : <Navigate to='signin' />
}
export default PrivateRoute;