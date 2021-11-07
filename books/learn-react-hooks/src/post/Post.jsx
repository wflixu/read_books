import React, { memo, useContext } from 'react';
import { Link } from 'react-navi';
import { ThemeContext } from '../contexts';



function Post({ id, title, content, author, key, short = false }) {
    const { secondaryColor } = useContext(ThemeContext);
    console.log(title + ':post render');
    let processedContent = content;

    if (short) {
        if (content.length > 30) {
            processedContent = content.substring(0, 30) + '...';
        }
    }

    return (
        <div >
            <div>{processedContent}</div>
            {short && <div>
                <br />
                <Link href={`/view/${id}`}>view full post</Link>
            </div> }
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