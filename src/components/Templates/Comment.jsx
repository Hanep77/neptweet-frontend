import { BiUser } from "react-icons/bi";

export default function Comment({ author, body, time }) {
    return (
        <div className="flex gap-3">
            <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
            <div>
                <div className="bg-slate-200 py-1 px-4 rounded-2xl">
                    <h5 className="font-medium">{author}</h5>
                    <p>{body}</p>
                </div>
                <span className="text-sm text-slate-600">{time}</span>
            </div>
        </div>
    )
}