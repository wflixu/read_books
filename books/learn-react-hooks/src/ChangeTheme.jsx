import React, { useEffect, useState } from 'react';
import { useResource } from 'react-request-hook';



function ThemeItem({ theme, active, onClick }) {



    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
            <span style={{ color: theme.primaryColor }}>Primary</span>
            <span style={{ color: theme.secondaryColor }}>secondaryColor</span>
        </span>
    )
}



export default function ChangeTheme({ theme, setTheme }) {
    const [themes, getThemes] = useResource(() => ({
        url: '/themes',
        method: 'get'
    }));
    const { data, isLoading } = themes;

    useEffect(getThemes, []);

    function isActive(t) {
        return t.primaryColor === theme.primaryColor && t.secondaryColor == theme.secondaryColor;
    }
    return (
        <div>change theme:
            {isLoading && 'loading themes ...'}
            {
                data && data.map((t, i) => {
                    return <ThemeItem key={'theme-' + i} theme={t} active={isActive(t)} onClick={() => { setTheme(t) }}
                    />
                })
            }</div>
    )
}