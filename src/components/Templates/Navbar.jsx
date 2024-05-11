import { BiLogOut, BiSearch } from "react-icons/bi";

export default function Navbar() {
    return (
        <header className="fixed top-0 right-0 left-0">
            <nav className="flex justify-around items-center m-auto h-16 bg-white border rounded-b">
                <h1 className="text-2xl font-medium text-blue-700">NepTweet</h1>
                <form action="" className="flex">
                    <input type="text" name="" id="" className="h-8 border rounded-l-full px-4" />
                    <button type="submit" className="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 px-4 h-8 rounded-r-full"><BiSearch /></button>
                </form>
                <button type="button" className="flex h-8 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white items-center gap-2 border rounded-md px-2"><BiLogOut /> Logout</button>
            </nav>
        </header>
    )
}