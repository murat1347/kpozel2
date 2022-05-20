import React from 'react'
import { Route,Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
function ProtectedRoute(Component) {

  const loggedIn=true
  return (
   
  loggedIn ? <Component /> : <Navigate to="/" />
  )
}

export default ProtectedRoute;