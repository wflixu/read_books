import React from 'react';

export default function Post ({ title, content, author,key }) {
    return (
        <div >
            <h3>{title}</h3>
            <div>
                {content}
            </div>
            <div>
                <i>written by <b>{author}</b></i>
            </div>
        </div>
    )
}