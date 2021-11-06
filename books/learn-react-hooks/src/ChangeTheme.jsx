import React, { useEffect, useState } from 'react';



function ThemeItem({ theme, active, onClick }) {



    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
            <span style={{ color: theme.primaryColor }}>Primary</span>
            <span style={{ color: theme.secondaryColor }}>secondaryColor</span>
        </span>
    )
}



export default function ChangeTheme({ theme, setTheme }) {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch('/api/themes').then(result => {
            return result.json();
        }).then(themes => {
            setThemes(themes);
        })
    },[]);

    function isActive(t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor == theme.secondaryColor;
    }
    return (
        <div>change theme: {
            themes.map((t, i) => {
                return <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => { setTheme(t) }}
                />
            })
        }</div>
    )
}