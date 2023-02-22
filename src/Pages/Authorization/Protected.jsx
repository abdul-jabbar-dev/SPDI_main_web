import React from 'react'
import { Navigate } from 'react-router-dom'
const Protected = ({ isSignedIn, children }) => {
    if (!isSignedIn.name) {
        return <Navigate to="/login" replace />
    }
    return children
}
export default Protected