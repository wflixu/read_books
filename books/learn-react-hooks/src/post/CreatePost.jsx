import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from 'react-navi';
import { useResource } from 'react-request-hook';
import { useInput } from 'react-hookedup';
import { StateContext } from '../contexts';



export default function CreatePost() {
    const { state, dispatch } = useContext(StateContext);
    const { user, posts } = state;

    const { value: title, clear: clearTitle, bindToInput: bindTitle, } = useInput('');
    const { value: content, bindToInput: bindContent, clear: clearContent } = useInput('');

    const navigation = useNavigation();

    const [post, createPost] = useResource(({ title, content, author }) => ({
        url: '/posts',
        method: 'post',
        data: { title, content, author }
    }));

    useEffect(() => {
        if (post && post.data) {
            dispatch({
                type: 'CREATE_POST',
                ...post.data,
            });
            navigation.navigate(`/view/${post.data.id}`);
        }
    }, [post])

    const handleCreate = (e) => {
        e.preventDefault();
        createPost({ title, content, author: user });
        dispatch({ type: 'CREATE_POST', title, content, author: user })
        clearTitle();
        clearContent();
    }



    return (
        <form onSubmit={handleCreate}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" value={title} {...bindTitle} />
            </div>
            <textarea value={content} {...bindContent} />
            <input type="submit" value="Create" />
        </form>
    )
}