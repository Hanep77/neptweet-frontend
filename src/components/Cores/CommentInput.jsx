export default function CommentInput({ onAddComment }) {
    return (
        <form action="" onSubmit={onAddComment}>
            <div className="flex rounded-md overflow-hidden">
                <input type="text" id="comment" name="body" placeholder="write comment..." className="border-s border-y rounded-s-md focus:border-blue-500 outline-none w-full h-8 px-2" required autoComplete="off" />
                <button type="submit" className="w-20 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white">send</button>
            </div>
        </form>
    )
}