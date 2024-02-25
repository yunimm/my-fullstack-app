'use client';
import { useRouter } from 'next/navigation';
export default function DeletePostButton({ postId }) {
    const router = useRouter();
    async function handleClick(event) {
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE',
            });
            // router.refresh();
            // console.log('after refresh');
        } catch (error) {
            console.error(error);
        }
    }
    return <button onClick={handleClick}>Delete Post</button>;
}
