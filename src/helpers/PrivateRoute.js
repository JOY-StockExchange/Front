import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

function PrivateRoute({children}) {
    const auth = false;//인증 처리 해줘야 함.
    return auth ? <Outlet /> : <Navigate to='signin' />
}
export default PrivateRoute;