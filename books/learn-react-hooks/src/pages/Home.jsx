import React, { useEffect, useContext } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../contexts';
import PostList from '../post/PostList';



export default function Home() {
    const { state, dispatch } = useContext(StateContext);
    const { error } = state;

    const [posts, getPosts] = useResource(() => {
        return {
            url: '/posts',
            method: 'get'
        }
    });
    useEffect(getPosts, []);
    useEffect(() => {
        if (posts && posts.error) {
            dispatch({ type: 'POSTS_ERROR' })
        }
        if (posts && posts.data) {
            dispatch({
                type: 'FETCH_POSTS',
                posts: posts.data.reverse()
            });
        }
    }, [posts])


    return (
        <div>
            <PostList posts={posts} >
                {error && <b>{error}</b>}
            </PostList>
        </div>
    )
}