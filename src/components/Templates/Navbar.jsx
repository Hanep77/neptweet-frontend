import { BiLogOut, BiSearch } from "react-icons/bi";
import axiosClient from "../../axios";
import { useContext } from "react";
import { StateContext } from "../../context/ContextProvider";

export default function Navbar() {
    const { setCurrentUser, setUserToken } = useContext(StateContext)
    function handleLogout() {
        axiosClient.post('/logout').then(response => {
            setCurrentUser({})
            setUserToken('')
        })
    }

    return (
        <header className="fixed top-0 right-0 left-0">
            <nav className="flex justify-between px-4 items-center m-auto h-16 bg-white border rounded-b">
                <h1 className="text-2xl font-medium text-blue-700">NepTweet</h1>
                <form action="" className="hidden md:flex">
                    <input type="text" name="" id="" className="h-8 border rounded-l-full px-4" />
                    <button type="submit" className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 px-4 h-8 rounded-r-full"><BiSearch /></button>
                </form>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 h-8 md:hidden bg-slate-100 hover:bg-slate-200 active:bg-slate-300 px-2 text-lg rounded-full text-blue-700"><BiSearch /> <span className="text-base">Search</span></button>
                    <button type="button" className="flex h-8 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white items-center gap-2 border rounded-md px-2" onClick={handleLogout}><BiLogOut /> <span className="hidden md:flex">Logout</span></button>
                </div>
            </nav>
        </header>
    )
}