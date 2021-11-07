import React, { useContext, useEffect } from 'react';
import { StateContext } from '../contexts';

import Post from './Post';

export default function PostList() {
    const { state } = useContext(StateContext);
    const { posts } = state;
    useEffect(() => {
        console.log('useEffect!');
    });

    return (
        <div>
            {posts.map((p, i) => {
                return (<div key={'post' + i}>
                    <Post {...p} short={true} />
                    <hr />
                </div>)
            })}
        </div>

    )
}