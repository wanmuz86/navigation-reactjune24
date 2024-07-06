import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    // THis is  a simple flow to imagine and authentication flow
    // Normally in addition of checking the localstorage
    // I need to also pass the token / call the verifytoken API
    const localStorageToken = localStorage.getItem("token")
    // Outlet -> the replacement of the page eg, CreatePage Component
    return localStorageToken ? <Outlet/> : <Navigate to="/" replace />

}

export default ProtectedRoute