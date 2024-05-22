import { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { StateContext } from "../../context/ContextProvider";
import useConvertTime from "../../hooks/useConvertTime";
import axiosClient from "../../axios";

export default function Comment({ comment }) {
    const { currentUser } = useContext(StateContext)
    const { timeAgo } = useConvertTime()

    function handleDeleteComment(id) {
        if (confirm("are you sure want to delete your comment?")) {
            axiosClient.delete('/comments/delete/' + id)
                .then(response => {
                    window.location.reload()
                })
        }
    }

    return (
        <div className="flex gap-3">
            <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
            <div>
                <div className="bg-slate-200 py-1 px-4 rounded-2xl">
                    <h5 className="font-medium">{comment.author.name}</h5>
                    <p>{comment.body}</p>
                </div>
                <span className="text-sm text-slate-600">{timeAgo(comment.created_at)}</span>
                <button onClick={() => handleDeleteComment(comment.id)} className={`${currentUser.id != comment.author.id && "hidden"} ms-2 text-sm text-red-500 hover:text-red-600`}>delete</button>
            </div>
        </div>
    )
}