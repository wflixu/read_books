import React, { useState } from 'react';

export default function CreatePost({ user, posts, setPosts }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleCreate = (e) => {
        e.preventDefault();
        const newPost = { title, content, author: user };
        setPosts([newPost, ...posts])
        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={handleCreate}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <textarea value={content} onChange={e => {
                setContent(e.target.value)
            }} />
            <input type="submit" value="Create" />
        </form>
    )
}