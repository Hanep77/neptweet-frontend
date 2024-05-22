import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { StateContext } from "../../context/ContextProvider";
import { useContext, useState } from "react";
import axiosClient from "../../axios";
import { Link } from "react-router-dom";

export default function ThreeDotMenu({ post }) {
    const { currentUser } = useContext(StateContext)
    const [dropdown, setDropdown] = useState(false)

    function handleDelete(id) {
        axiosClient.delete('/posts/delete/' + id)
            .then(response => {
                window.location.reload()
            })
    }

    return (
        <div className="relative">
            <button className="text-xl" onClick={(() => setDropdown(!dropdown))}><BsThreeDotsVertical /></button>
            <div className={`${!dropdown && "hidden"} border rounded bg-white absolute right-0`}>
                <div className={`${currentUser.id != post?.author?.id && "hidden"}`}>
                    <Link to={'/posts/edit/' + post.id} className="flex items-center gap-2 w-full px-4 py-1 hover:bg-slate-100"><BiEditAlt /> Edit</Link>
                    <button onClick={() => handleDelete(post.id)} className="flex items-center gap-2 w-full px-4 py-1 hover:text-white hover:bg-red-500"><BiTrash /> Delete</button>
                </div>
                <div className={`${currentUser.id == post?.author?.id && "hidden"}`}>
                    <button className="flex items-center gap-2 w-full px-4 py-1 hover:bg-slate-100"><GoReport /> Report</button>
                </div>
            </div>
        </div>
    )
}