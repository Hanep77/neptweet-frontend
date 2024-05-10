import PostCard from "../components/Templates/PostCard";

export default function Home() {
    return (
        <div className="flex flex-col gap-2 pt-2 mb-24">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}