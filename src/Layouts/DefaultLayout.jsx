import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../components/Templates/Navigation";
import Navbar from "../components/Templates/Navbar";
import { useContext, useEffect } from "react";
import { StateContext } from "../context/ContextProvider";
import axiosClient from "../axios";

export default function DefaultLayout() {
    const { setCurrentUser, userToken } = useContext(StateContext)

    if (!userToken) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosClient.get('/me').then(response => {
            setCurrentUser(response.data)
        })
    }, [])

    return (
        <>
            <Navbar />
            <main className="max-w-lg m-auto px-4 md:px-0 mt-16">
                <Outlet />
            </main>
            <Navigation />
        </>
    )
}