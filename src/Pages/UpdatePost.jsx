import { BiSend } from "react-icons/bi";
import axiosClient from "../axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function UpdatePost() {
    const [post, setPost] = useState({})
    const { pathname } = useLocation()
    const id = pathname.split('/')[3]

    useEffect(() => {
        axiosClient('/posts/' + id)
            .then(response => {
                setPost(response.data.data)
            })
    }, [])

    function handleCreatePost(event, id) {
        event.preventDefault()

        axiosClient.put('/posts/update/' + id, {
            body: event.target.body.value
        }).then(response => {
            if (response.status == 200) {
                history.back()
            }
        })
    }

    return (
        <div className="pt-2">
            <form action="" onSubmit={(event) => handleCreatePost(event, id)}>
                <textarea name="body" rows={4} className="bg-zinc-900 w-full p-2 outline-none rounded" defaultValue={post.body}></textarea>
                <button type="submit"
                    className="w-full h-10 flex justify-center items-center gap-1 rounded bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 text-white">
                    Post <BiSend />
                </button>
            </form>
        </div>
    )
}
