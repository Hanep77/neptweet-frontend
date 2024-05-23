import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { StateContext } from "../../context/ContextProvider";
import { useContext } from "react";
import axiosClient from "../../axios";
import { Link } from "react-router-dom";

export default function ThreeDotMenu({ post }) {
    const { currentUser } = useContext(StateContext)
    const { activeDropdown, setActiveDropdown } = useContext(StateContext)

    function handleDelete(id) {
        axiosClient.delete('/posts/delete/' + id)
            .then(response => {
                window.location.reload()
            })
    }

    function toggleDropdown(id) {
        setActiveDropdown(activeDropdown == id ? null : id)
    }

    return (
        <>
            {activeDropdown == post.id && (
                <div onClick={() => toggleDropdown(post.id)} className="fixed inset-0 bg-transparent z-20"></div>
            )}
            <div className="relative z-30">
                <button className="text-xl" onClick={() => toggleDropdown(post.id)}><BsThreeDotsVertical /></button>
                <div className={`${activeDropdown != post.id && "hidden"} border rounded bg-white absolute right-0`}>
                    <div className={`${currentUser.id != post?.author?.id && "hidden"}`}>
                        <Link to={'/posts/edit/' + post.id} className="flex items-center gap-2 w-full px-4 py-1 hover:bg-slate-100"><BiEditAlt /> Edit</Link>
                        <button onClick={() => handleDelete(post.id)} className="flex items-center gap-2 w-full px-4 py-1 hover:text-white hover:bg-red-500"><BiTrash /> Delete</button>
                    </div>
                    <div className={`${currentUser.id == post?.author?.id && "hidden"}`}>
                        <button className="flex items-center gap-2 w-full px-4 py-1 hover:bg-slate-100"><GoReport /> Report</button>
                    </div>
                </div>
            </div>
        </>
    )
}