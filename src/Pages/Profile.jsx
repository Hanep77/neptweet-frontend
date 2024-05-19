import { useContext, useEffect, useState } from "react"
import { StateContext } from "../context/ContextProvider"
import { FaUser } from "react-icons/fa"
import axiosClient from "../axios"
import PostCard from "../components/Templates/PostCard"

export default function Profile() {
    const { currentUser } = useContext(StateContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axiosClient.get('/user/posts').then(response => setPosts(response.data.data))
    }, [])

    return (
        <div className="pt-2">
            <div className="bg-blue-500 h-32 rounded-t"></div>
            <div className="flex flex-col items-center justify-center px-6 relative bg-white mb-2 rounded-b">
                <div className="w-24 h-24 flex justify-center items-center text-slate-300 text-5xl bg-white border-4 border-slate-200 rounded-full absolute -top-6">
                    <FaUser />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mt-20 pb-4">{currentUser.name}</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center mb-2">
                <div className="py-4 bg-white rounded">
                    <h3 className="text-3xl font-medium">1</h3>
                    <p>Likes</p>
                </div>
                <div className="py-4 bg-white rounded">
                    <h3 className="text-3xl font-medium">{posts.length}</h3>
                    <p>Posts</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-24">
                {posts?.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}