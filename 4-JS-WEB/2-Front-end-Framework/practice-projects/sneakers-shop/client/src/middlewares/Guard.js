import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const HasUser = () => {
    const { userCredentials } = useAuth();

    return userCredentials.accessToken ? <Outlet /> : <Navigate to={'/login'} />
}

export const IsGuest = () => {
    const { userCredentials } = useAuth();

    return userCredentials.accessToken ? <Navigate to={'/login'} /> : <Outlet />
}