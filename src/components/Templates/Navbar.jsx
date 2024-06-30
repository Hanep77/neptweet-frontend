import { BiSearch } from "react-icons/bi";
import axiosClient from "../../axios";
import { useContext } from "react";
import { StateContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Navbar() {
    const { setCurrentUser, setUserToken } = useContext(StateContext)
    function handleLogout() {
        if (confirm("are you sure want to logout ?")) {
            axiosClient.post('/logout').then(response => {
                setCurrentUser({})
                setUserToken('')
            })
        }
    }

    return (
        <header className="md:hidden fixed top-0 right-0 left-0 bg-zinc-900 z-50">
            <nav className="flex justify-between px-4 items-center m-auto h-16">
                <Link to={'/'}
                    className="flex items-center h-10 gap-2 font-semibold italic underline rounded-full text-2xl">
                    NepTweet
                </Link>
                <div className="flex items-center gap-2 md:gap-4">
                    <Link to={'/search'}
                        className="flex justify-center items-center w-10 h-10 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-xl rounded-full">
                        <BiSearch />
                    </Link>
                    <button type="button"
                        className="flex justify-center items-center w-10 h-10 bg-red-800 hover:bg-red-700 active:bg-red-600 text-xl rounded-full"
                        onClick={handleLogout}>
                        <RiLogoutCircleRLine />
                    </button>
                </div>
            </nav>
        </header>
    )
}
