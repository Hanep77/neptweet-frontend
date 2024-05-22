import { formatDistanceToNow } from "date-fns";

export default function useConvertTime() {
    function timeAgo(date) {
        try {
            return formatDistanceToNow(new Date(date), { addSuffix: true });
        } catch (error) {
            // console.log(error)
        }
    }

    return { timeAgo }
}