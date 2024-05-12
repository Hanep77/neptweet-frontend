import { formatDistanceToNow } from "date-fns";
import { BiComment, BiUser } from "react-icons/bi";
import { GrLike } from "react-icons/gr";

export default function PostCard({ author, time, body }) {
    function timeAgo(timestamp) {
        const formattedTime = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
        return formattedTime;
    }

    return (
        <div className="w-full bg-white p-5 rounded">
            <div className="flex items-center gap-3 mb-3">
                <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
                <div>
                    <h5 className="font-medium">{author.name}</h5>
                    <p className="text-sm text-slate-600">{timeAgo(time)}</p>
                </div>
            </div>
            <p className="mb-3">{body}</p>
            <div className="flex justify-around gap-5">
                <button type="button" className="text-xl"><GrLike /></button>
                <button type="button" className="text-xl"><BiComment /></button>
            </div>
        </div>
    )
}