import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useLocation } from "react-router-dom";
import { BiComment, BiLike, BiSolidLike, BiUser } from "react-icons/bi";
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
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        axiosClient.get(pathname)
            .then(response => {
                setPost(response.data.data)
                setIsLiked(response.data.data.is_liked_by_user)
                setLikes(response.data.data.likes_count)
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

    function handleLike() {
        if (isLiked) {
            axiosClient.delete(`/posts/${post.id}/like`)
                .then(response => {
                    if (response.status == 200) {
                        setIsLiked(false)
                        setLikes(likes - 1)
                    }
                })
        } else {
            axiosClient.post(`/posts/${post.id}/like`)
                .then(response => {
                    if (response.status == 200) {
                        setIsLiked(true)
                        setLikes(likes + 1)
                    }
                })
        }
    }

    return (
        <div className="pt-3 pb-20 md:pb-4">
            <div className="w-full bg-zinc-900 px-5 py-4 rounded">
                <div className="mb-3">
                    <div className="flex justify-between">
                        <HeaderPostInformation post={post} />
                    </div>
                    <p className="mb-3">{post.body}</p>
                    <div className={`${likes || post?.comments?.length ? "mb-3" : ""} flex gap-2 text-xs`}>
                        <p className={`${!likes && "hidden"}`}>{likes} likes</p>
                        <p className={`${!post?.comments?.length && "hidden"}`}>{post?.comments?.length} comments</p>
                    </div>
                    <div className="flex justify-around gap-5">
                        <button type="button" onClick={handleLike} className="text-xl">{isLiked ? <BiSolidLike /> : <BiLike />}</button>
                        <label htmlFor="comment" className="text-xl cursor-pointer"><BiComment /></label>
                    </div>
                </div>
                <div className="mb-3">
                    <CommentInput onAddComment={handleAddComment} />
                </div>
                <div className="flex flex-col gap-2">
                    {comments.map(comment => {
                        return <Comment key={comment.id} comment={comment} />
                    })}
                </div>
            </div>
        </div>
    )
}
