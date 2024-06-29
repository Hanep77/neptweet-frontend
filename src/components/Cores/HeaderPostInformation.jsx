import useConvertTime from "../../hooks/useConvertTime";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function HeaderPostInformation({ post }) {
    const { timeAgo } = useConvertTime()

    return (
        <div className="flex items-center gap-3 mb-3">
            <Link to={'/users/' + post?.author?.id} className="flex justify-center items-center bg-zinc-700 rounded-full w-10 h-10">
                <FaUser className="text-2xl" /></Link>
            <div>
                <Link to={'/users/' + post?.author?.id} className="font-medium">{post?.author?.name}</Link>
                <p className="text-sm text-zinc-500">{timeAgo(post?.created_at)}</p>
            </div>
        </div>
    )
}
