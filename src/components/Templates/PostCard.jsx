import { formatDistanceToNow } from "date-fns";
import { BiComment, BiUser } from "react-icons/bi";
import { GrLike } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    function timeAgo(timestamp) {
        const formattedTime = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
        return formattedTime;
    }

    return (
        <div className="w-full bg-white p-5 rounded">
            <div className="flex items-center gap-3 mb-3">
                <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
                <div>
                    <h5 className="font-medium">{post.author.name}</h5>
                    <p className="text-sm text-slate-600">{timeAgo(post.created_at)}</p>
                </div>
            </div>
            <p className="mb-3">{post.body}</p>
            <div className="flex justify-around gap-5">
                <button type="button" className="text-xl"><GrLike /></button>
                <Link to={'/posts/' + post.id} className="text-xl"><BiComment /></Link>
            </div>
        </div>
    )
}