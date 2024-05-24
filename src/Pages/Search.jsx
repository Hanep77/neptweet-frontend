import { useEffect, useState } from "react"
import { BiUser } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"
import axiosClient from "../axios"
import { useRef } from "react"

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
            <form action="" className="pt-2 mb-3">
                <div className="flex rounded-md overflow-hidden">
                    <input type="text" name="q" className="w-full h-9 outline-none px-2 text-lg focus:border border-blue-500 rounded-y-md rounded-s-md" required autoComplete="off" />
                    <button className="w-32 h-9 bg-blue-500 text-white">Search</button>
                </div>
            </form>

            <div className="flex flex-col gap-1">
                {users?.map(user => (
                    <Link to={'/users/' + user.id} key={user.id} className="flex items-center gap-2 border-b bg-slate-100 hover:bg-white p-2 rounded-md">
                        <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-white border-slate-400 p-1" /></div>
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