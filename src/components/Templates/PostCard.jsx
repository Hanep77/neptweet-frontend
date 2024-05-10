import { BiComment, BiUser } from "react-icons/bi";
import { GrLike } from "react-icons/gr";

export default function PostCard() {
    return (
        <div className="w-full bg-white p-5 rounded">
            <div className="flex items-center gap-2 mb-3">
                <div className="inline-block"><BiUser className="border text-4xl rounded-full bg-slate-200 border-slate-400 p-1" /></div>
                <div>
                    <h5 className="text-lg font-medium">Yudis Sutisna</h5>
                    <p className="text-sm text-slate-600 -mt-1">5 hours ago</p>
                </div>
            </div>
            <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, cum rem dolorum est vel repellat.</p>
            <div className="flex justify-around gap-5">
                <button type="button" className="text-xl"><GrLike /></button>
                <button type="button" className="text-xl"><BiComment /></button>
            </div>
        </div>
    )
}