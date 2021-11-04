import React from 'react';

import Post from './Post';

export default function PostList({ posts = [] }) {
    return (
        <div>
            {posts.map((p, i) => {
                return (<div key={'post' + i}>
                    <Post {...p} />
                    <hr />
                </div>)
            })}
        </div>

    )
}