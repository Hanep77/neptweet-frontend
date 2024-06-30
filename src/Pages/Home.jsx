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

    function handleCreatePost(event) {
        event.preventDefault()

        axiosClient.post('/posts/create', {
            body: event.target.body.value
        }).then(response => {
            if (response.status == 201) {
                window.location.reload()
            }
        })
    }

    return (
        <div className="flex flex-col gap-3 pt-3 mb-20 md:mb-4">
            <div>
                <form onSubmit={handleCreatePost}>
                    <textarea rows="3" id="createPost" name="body" className="w-full rounded bg-zinc-900 px-2 py-1" placeholder="create post"></textarea>
                    <button type="submit" className="w-full h-8 bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 rounded">Post</button>
                </form>
            </div>
            {posts?.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}
