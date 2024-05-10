import { Outlet } from "react-router-dom";
import Navigation from "../components/Templates/Navigation";
import Navbar from "../components/Templates/Navbar";

export default function DefaultLayout() {
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