import React from "react";
import { Navigate } from "react-router-dom";

const AuthRole = ({ children, role, user }) => {

    return role.find(role => user.role === role) ? children : <Navigate replace to={'/login'}></Navigate>

};

export default AuthRole;