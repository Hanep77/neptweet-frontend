import { BiUser } from "react-icons/bi";
import useConvertTime from "../../hooks/useConvertTime";

export default function HeaderPostInformation({ post }) {
    const { timeAgo } = useConvertTime()

    return (
        <div className="flex items-center gap-3 mb-3">
            <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
            <div>
                <h5 className="font-medium">{post?.author?.name}</h5>
                <p className="text-sm text-slate-600">{timeAgo(post?.created_at)}</p>
            </div>
        </div>
    )
}