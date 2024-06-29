import { GoHome, GoHomeFill } from "react-icons/go";
import { IoAddCircle, IoAddCircleOutline } from "react-icons/io5";
import { RiUser6Fill, RiUser6Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const { pathname } = useLocation()
    return (
        <div className="md:hidden fixed bottom-2 right-0 left-0 px-4 sm:px-0 z-50">
            <div className="flex justify-around items-center max-w-lg m-auto h-14 bg-zinc-900 text-white border rounded-full">
                <Link to="/" className="text-3xl hover:-translate-y-1 transition">{pathname == "/" ? <GoHomeFill /> : <GoHome />}</Link>
                <Link to="/posts/create" className="text-4xl hover:-translate-y-1 transition">{pathname == "/posts/create" ? <IoAddCircle /> : <IoAddCircleOutline />}</Link>
                <Link to="/profile" className="text-3xl hover:-translate-y-1 transition">{pathname == "/profile" ? <RiUser6Fill /> : <RiUser6Line />}</Link>
            </div>
        </div>
    )
}
