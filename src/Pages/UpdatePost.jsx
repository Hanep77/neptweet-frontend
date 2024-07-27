import { BiSend } from "react-icons/bi";
import axiosClient from "../axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Editor from "../components/Templates/Editor";

export default function UpdatePost() {
    const [post, setPost] = useState({})
    const { pathname } = useLocation()
    const id = pathname.split('/')[3]
    const [text, setText] = useState([])

    useEffect(() => {
        axiosClient('/posts/' + id)
            .then(response => {
                setPost(response.data)
            })
    }, [])

    function handleCreatePost(event, id) {
        event.preventDefault()

        axiosClient.put('/posts/update/' + id, {
            body: text
        }).then(response => {
            if (response.status == 200) {
                history.back()
            }
        })
    }

    let defaultValue
    if (post.body) {
        defaultValue = JSON.parse(post.body).join("\n\n")
    }

    return (
        <div className="pt-2">
            <form action="" onSubmit={(event) => handleCreatePost(event, id)}>
                <Editor name="body" rows={5} className="bg-zinc-900 w-full" setText={setText} defaultValue={defaultValue}></Editor>
                <button type="submit"
                    className="w-full h-10 flex justify-center items-center gap-1 rounded bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 text-white">
                    Post <BiSend />
                </button>
            </form>
        </div>
    )
}
