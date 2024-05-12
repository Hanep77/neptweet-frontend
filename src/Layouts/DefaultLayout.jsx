import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../components/Templates/Navigation";
import Navbar from "../components/Templates/Navbar";
import { useContext } from "react";
import { StateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    const { currentUser, userToken } = useContext(StateContext)

    if (!userToken) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Navbar />
            <main className="max-w-screen-sm m-auto px-4 md:px-0 mt-16">
                <Outlet />
            </main>
            <Navigation />
        </>
    )
}