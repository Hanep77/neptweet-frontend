import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextProvider";
import { useContext } from "react";

export default function AuthLayout() {
    const { userToken } = useContext(StateContext)

    if (userToken) {
        return <Navigate to="/" />
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Outlet />
        </div>
    )
}