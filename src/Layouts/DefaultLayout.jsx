import { Link, Navigate, Outlet } from "react-router-dom";
import Navigation from "../components/Templates/Navigation";
import Navbar from "../components/Templates/Navbar";
import { useContext, useEffect } from "react";
import { StateContext } from "../context/ContextProvider";
import axiosClient from "../axios";
import { FaUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BiLogOut, BiSearch } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function DefaultLayout() {
    const { setCurrentUser, userToken, setUserToken } = useContext(StateContext)

    if (!userToken) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosClient.get('/me').then(response => {
            setCurrentUser(response.data)
        })
    }, [])

    function handleLogout() {
        if (confirm("are you sure want to logout ?")) {
            axiosClient.post('/logout').then(response => {
                setCurrentUser({})
                setUserToken('')
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className="mt-16 md:mt-0 flex justify-evenly max-w-6xl m-auto">
                <aside className="hidden md:flex flex-col gap-2 pt-3 px-3 bg-slate sticky top-0 left-0 h-full md:w-72 lg:80 text-lg">
                    <Link to={'/'}
                        className="flex items-center h-10 gap-2 font-semibold italic underline rounded-full text-2xl">
                        NepTweet
                    </Link>
                    <Link to={'/'}
                        className="flex items-center h-10 gap-2 font-medium px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700">
                        <GoHome />Home
                    </Link>
                    <Link to={'/search'}
                        className="flex items-center h-10 gap-2 font-medium px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700">
                        <BiSearch />Search
                    </Link>
                    <Link to={'/profile'}
                        className="flex items-center h-10 gap-2 font-medium px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700">
                        <FaUser />Profile
                    </Link>
                    <button type="button" onClick={handleLogout}
                        className="flex items-center h-10 gap-2 font-medium px-4 rounded-full bg-zinc-900 hover:bg-red-800 active:bg-red-700">
                        <RiLogoutCircleRLine />Logout
                    </button>
                </aside>
                <div className="flex-1">
                    <main className="max-w-xl m-auto px-4">
                        <Outlet />
                    </main>
                </div>
                <aside className="hidden lg:block pt-3 px-3 bg-slate sticky top-0 right-0 h-full lg:w-64 xl:w-80">
                    <div to={'/profile'}
                        className="flex items-center h-10 gap-2 font-medium px-4 rounded-full bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700">
                        Don't Know Yet What to Put here
                    </div>
                </aside>
            </div>
            <Navigation />
        </>
    )
}
