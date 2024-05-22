import { BiComment } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import { Link } from "react-router-dom";
import ThreeDotMenu from "../Cores/ThreeDotMenu";
import HeaderPostInformation from "../Cores/HeaderPostInformation";

export default function PostCard({ post }) {
    return (
        <div className="w-full bg-white p-5 rounded">
            <div className="flex justify-between">
                <HeaderPostInformation post={post} />
                <ThreeDotMenu post={post} />
            </div>
            <p className="mb-3">{post.body}</p>
            <div className="flex justify-around gap-5">
                <button type="button" className="text-xl"><GrLike /></button>
                <Link to={'/posts/' + post.id} className="text-xl"><BiComment /></Link>
            </div>
        </div>
    )
}