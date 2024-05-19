import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useLocation } from "react-router-dom";
import { BiComment, BiUser } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import { formatDistanceToNow } from "date-fns";
import Comment from "../components/Templates/Comment";

export default function Post() {
    const { pathname } = useLocation()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        axiosClient.get(pathname)
            .then(response => {
                console.log(response.data.data)
                setPost(response.data.data)
                setComments(response.data.data.comments)
            })
    }, [pathname])

    function timeAgo(date) {
        try {
            return formatDistanceToNow(new Date(date), { addSuffix: true });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="pt-2 pb-24">
            <div className="w-full bg-white px-5 py-2 rounded">
                <div className="mb-3">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
                        <div>
                            <h5 className="font-medium">{post.author?.name}</h5>
                            <p className="text-sm text-slate-600">{timeAgo(post.created_at)}</p>
                        </div>
                    </div>
                    <p className="mb-3">{post.body}</p>
                    <div className="flex justify-around gap-5">
                        <button type="button" className="text-xl"><GrLike /></button>
                        <label htmlFor="comment" className="text-xl cursor-pointer"><BiComment /></label>
                    </div>
                </div>
                <div className="mb-3">
                    <form action="">
                        <div className="flex rounded-md overflow-hidden">
                            <input type="text" id="comment" placeholder="write comment..." className="border-s border-y rounded-s-md focus:border-blue-500 outline-none w-full h-8 px-2" />
                            <button type="submit" className="w-20 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white">send</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col gap-2">
                    {comments.map(comment => {
                        return <Comment author={comment.author.name} body={comment.body} time={timeAgo(comment.created_at)} />
                    })}
                </div>
            </div>
        </div>
    )
}