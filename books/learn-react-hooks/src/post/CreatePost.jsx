import React, { useContext, useState } from 'react';
import { StateContext } from '../contexts';

export default function CreatePost() {
    const {state,dispatch} = useContext(StateContext);
    const  {user,posts} = state;
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const handleCreate = (e) => {
        e.preventDefault();

        dispatch({ type: 'CREATE_POST', title, content, author: user })
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