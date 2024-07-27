import { useEffect, useState } from "react";
import PostCard from "../components/Templates/PostCard";
import axiosClient from "../axios";
import Editor from "../components/Templates/Editor";

export default function Home() {
    const [posts, setPosts] = useState([])
    const [text, setText] = useState([])

    useEffect(() => {
        axiosClient.get('/posts').then(response => {
            setPosts(response.data)
        })
    }, [])

    function handleCreatePost(event) {
        event.preventDefault()

        axiosClient.post('/posts/create', {
            body: text
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
                    <Editor className={"resize-none w-full rounded bg-zinc-900"} setText={setText} rows={3} />
                    <button type="submit" className="w-full h-8 bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 rounded">Post</button>
                </form>
            </div>
            {posts?.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}
