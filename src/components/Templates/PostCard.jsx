import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import ThreeDotMenu from "../Cores/ThreeDotMenu";
import HeaderPostInformation from "../Cores/HeaderPostInformation";
import { useState } from "react";
import axiosClient from "../../axios";

export default function PostCard({ post }) {
    const [isLiked, setIsLiked] = useState(post.is_liked_by_user)
    const [likes, setLikes] = useState(post.likes_count)

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
        <div className="w-full bg-white p-5 rounded">
            <div className="flex justify-between">
                <HeaderPostInformation post={post} />
                <ThreeDotMenu post={post} />
            </div>
            <p className="mb-3">{post.body}</p>
            <div className={`${likes || post.comments.length ? "mb-3" : ""} flex gap-2 text-xs`}>
                <p className={`${!likes && "hidden"}`}>{likes} likes</p>
                <p className={`${!post.comments.length && "hidden"}`}>{post.comments.length} comments</p>
            </div>
            <div className="flex gap-5">
                <button type="button" onClick={handleLike} className="text-xl">{isLiked ? <BiSolidLike /> : <BiLike />}</button>
                <Link to={'/posts/' + post.id} className="text-xl"><BiComment /></Link>
            </div>
        </div>
    )
}