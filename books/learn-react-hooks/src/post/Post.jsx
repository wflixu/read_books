import React, { useContext } from 'react';
import { ThemeContext } from '../contexts';



export default function Post({ title, content, author, key }) {
    const { secondaryColor } = useContext(ThemeContext);
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