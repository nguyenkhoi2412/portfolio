import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ isAuth = false, redirectPath = '/', children = <></> }) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}
export default PrivateRoute