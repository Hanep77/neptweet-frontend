import { BiUser } from "react-icons/bi";
import useConvertTime from "../../hooks/useConvertTime";
import { Link } from "react-router-dom";

export default function HeaderPostInformation({ post }) {
    const { timeAgo } = useConvertTime()

    return (
        <div className="flex items-center gap-3 mb-3">
            <Link to={'/users/' + post?.author?.id} className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></Link>
            <div>
                <Link to={'/users/' + post?.author?.id} className="font-medium">{post?.author?.name}</Link>
                <p className="text-sm text-slate-600">{timeAgo(post?.created_at)}</p>
            </div>
        </div>
    )
}