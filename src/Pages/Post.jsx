import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useLocation } from "react-router-dom";
import { BiComment, BiUser } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import Comment from "../components/Templates/Comment";
import CommentInput from "../components/Cores/CommentInput";
import useConvertTime from "../hooks/useConvertTime";
import ThreeDotMenu from "../components/Cores/ThreeDotMenu";
import HeaderPostInformation from "../components/Cores/HeaderPostInformation";

export default function Post() {
    const { pathname } = useLocation()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const { timeAgo } = useConvertTime()

    useEffect(() => {
        axiosClient.get(pathname)
            .then(response => {
                setPost(response.data.data)
                const data = response.data.data.comments
                const sortedComments = data.toReversed()
                setComments(sortedComments)
            })
    }, [pathname])

    function handleAddComment(event) {
        event.preventDefault()

        axiosClient.post('/comments/create', {
            post_id: post.id,
            body: event.target.body.value
        }).then(response => {
            setComments([response.data, ...comments])
        })
    }

    return (
        <div className="pt-2 pb-24">
            <div className="w-full bg-white px-5 py-4 rounded">
                <div className="mb-3">
                    <div className="flex justify-between">
                        <HeaderPostInformation post={post} />
                    </div>
                    <p className="mb-3">{post.body}</p>
                    <div className="flex justify-around gap-5">
                        <button type="button" className="text-xl"><GrLike /></button>
                        <label htmlFor="comment" className="text-xl cursor-pointer"><BiComment /></label>
                    </div>
                </div>
                <div className="mb-3">
                    <CommentInput onAddComment={handleAddComment} />
                </div>
                <div className="flex flex-col gap-2">
                    {comments.map(comment => {
                        return <Comment key={comment.id} author={comment.author.name} body={comment.body} time={timeAgo(comment.created_at)} />
                    })}
                </div>
            </div>
        </div>
    )
}