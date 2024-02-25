'use client';
import styles from '@/app/page.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });
            // router.refresh();
            // console.log('after refresh');
        } catch (error) {
            console.error(error);
        }
        setTitle('');
        setContent('');
    };
    return (
        <main className={styles.main}>
            <Link href={'/'}>View Feed</Link>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">標題：</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="content">內容：</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button type="submit">提交</button>
            </form>
        </main>
    );
}
