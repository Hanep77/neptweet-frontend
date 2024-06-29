import { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { StateContext } from "../../context/ContextProvider";
import useConvertTime from "../../hooks/useConvertTime";
import axiosClient from "../../axios";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

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
            <div>
                <Link to={'/users/' + comment?.author?.id} className="flex justify-center items-center bg-zinc-700 rounded-full w-10 h-10">
                    <FaUser className="text-2xl" /></Link>
            </div>
            <div>
                <div className="bg-zinc-800 py-1 px-4 rounded-2xl">
                    <h5 className="font-medium">{comment.author.name}</h5>
                    <p>{comment.body}</p>
                </div>
                <span className="text-sm text-zinc-500">{timeAgo(comment.created_at)}</span>
                <button onClick={() => handleDeleteComment(comment.id)} className={`${currentUser.id != comment.author.id && "hidden"} ms-2 text-sm text-red-500 hover:text-red-600`}>delete</button>
            </div>
        </div>
    )
}
