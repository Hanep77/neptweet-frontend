import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import axiosClient from "../axios"
import PostCard from "../components/Templates/PostCard"
import { useLocation } from "react-router-dom"

export default function Profile() {
    const { pathname } = useLocation()
    const [user, setUser] = useState({})
    const [totalLikes, setTotalLikes] = useState(0)

    useEffect(() => {
        axiosClient.get('/users/' + pathname.split('/')[2])
            .then(response => {
                setUser(response.data)
                setTotalLikes(response.data.posts.reduce((prev, curr) => prev + curr.likes_count, 0))
            })
    }, [pathname])

    return (
        <div className="pt-3">
            <div className="bg-zinc-800 h-32 rounded-t"></div>
            <div className="flex flex-col items-center justify-center px-6 relative bg-zinc-900 mb-2 rounded-b">
                <div className="w-24 h-24 flex justify-center items-center text-slate-300 text-5xl bg-zinc-800 border-4 border-zinc-700 rounded-full absolute -top-6">
                    <FaUser />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mt-20 pb-4">{user.name}</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center mb-2">
                <div className="py-4 bg-zinc-900 rounded">
                    <h3 className="text-3xl font-medium">{totalLikes}</h3>
                    <p>Likes</p>
                </div>
                <div className="py-4 bg-zinc-900 rounded">
                    <h3 className="text-3xl font-medium">{user.posts?.length}</h3>
                    <p>Posts</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-20 md:mb-3">
                {user.posts?.reverse().map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}
