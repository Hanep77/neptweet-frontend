import { useEffect, useState } from "react"
import { BiUser } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"
import axiosClient from "../axios"
import { useRef } from "react"
import { FaUser } from "react-icons/fa"

export default function Search() {
    const { search } = useLocation()
    const [users, setUsers] = useState([])
    const query = search.split("=")[1]
    const notFoundRef = useRef(null)

    if (query) {
        useEffect(() => {
            axiosClient.get('/users/search', {
                params: { query }
            })
                .then(response => {
                    console.log(response)
                    setUsers(response?.data)
                })
                .catch(error => {
                    if (error.response.status == 404) {
                        notFoundRef.current.classList.remove("hidden")
                    }
                })
        }, [query])
    }

    return (
        <>
            <form action="" className="pt-3 mb-2">
                <div className="flex rounded-md overflow-hidden">
                    <input type="text" name="q" placeholder="Search"
                        className="w-full bg-zinc-900 h-10 flex items-center outline-none px-4 text-lg focus:border border-cyan-700 rounded-y-md rounded-s-md"
                        required autoComplete="off" />
                    <button className="w-32 h-10 bg-cyan-700 text-white">Search</button>
                </div>
            </form>

            <div className="flex flex-col">
                {users?.map(user => (
                    <Link to={'/users/' + user.id} key={user.id} className="flex items-center gap-2 hover:bg-zinc-900 p-2 rounded-md">
                        <div className="flex justify-center items-center bg-zinc-700 rounded-full w-10 h-10">
                            <FaUser className="text-2xl" />
                        </div>

                        <div>
                            <h3 className="font-medium text-lg">{user.name}</h3>
                        </div>
                    </Link>
                ))}

                <p ref={notFoundRef} className="hidden text-center">NOT FOUND</p>
            </div>
        </>
    )
}
