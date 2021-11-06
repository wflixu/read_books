import React, { memo, useContext } from 'react';
import { ThemeContext } from '../contexts';



function Post({ title, content, author, key }) {
    const { secondaryColor } = useContext(ThemeContext);
    console.log(title + ':post render');
    return (
        <div >
            <h3 style={{ color: secondaryColor }}>{title}</h3>
            <div>
                {content}
            </div>
            <div>
                <i>written by <b>{author}</b></i>
            </div>
        </div>
    )
}

export default memo(Post, (prev, next) => {
    return prev.title == next.title && prev.content == prev.content;
})