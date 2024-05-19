import { useEffect, useState } from "react";
import PostCard from "../components/Templates/PostCard";
import axiosClient from "../axios";

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axiosClient.get('/posts').then(response => {
            setPosts(response.data.data)
        })
    }, [])

    return (
        <div className="flex flex-col gap-2 pt-2 mb-24">
            {posts?.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}