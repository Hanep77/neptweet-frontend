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
        <div className="w-full p-5 bg-zinc-900 rounded">
            <div className="flex justify-between">
                <HeaderPostInformation post={post} />
                <ThreeDotMenu post={post} />
            </div>
            <div className="flex flex-col gap-2 mb-3">
                {JSON.parse(post.body).map((par, index) => <p key={index}>{par}</p>)}
            </div>
            <div className={`${likes || post.comments.length ? "mb-2" : ""} flex gap-2 text-sm text-zinc-400`}>
                <p className={`${!likes && "hidden"}`}>{likes} likes</p>
                <p className={`${!post.comments.length && "hidden"}`}>{post.comments.length} comments</p>
            </div>
            <div className="flex justify-around gap-2">
                <button type="button" onClick={handleLike} className="text-xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 rounded-full w-1/2 h-8 flex justify-center items-center">{isLiked ? <BiSolidLike /> : <BiLike />}</button>
                <Link to={'/posts/' + post.id} className="text-xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 rounded-full w-1/2 flex h-8 justify-center items-center"><BiComment /></Link>
            </div>
        </div>
    )
}
