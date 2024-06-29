import { BiSend } from "react-icons/bi";
import axiosClient from "../axios";
import router from "../router";

export default function CreatePost() {
    function handleCreatePost(event) {
        event.preventDefault()

        axiosClient.post('/posts/create', {
            body: event.target.body.value
        }).then(response => {
            if (response.status == 201) {
                router.navigate('/')
            }
        })
    }
    return (
        <div className="pt-2">
            <form action="" onSubmit={handleCreatePost}>
                <textarea name="body" rows={4} className="w-full bg-zinc-900 p-2 outline-none rounded"></textarea>
                <button type="submit" className="w-full h-10 flex justify-center items-center gap-1 rounded bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white">Post <BiSend /></button>
            </form>
        </div>
    )
}
