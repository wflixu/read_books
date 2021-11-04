import React, { useState } from 'react';

export function Login({ dispatch }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ type: 'LOGIN', username })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={username} id="login-username" onChange={evt => setUsername(evt.target.value)} />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" value={password} onChange={evt => setPassword(evt.target.value)} />
            <input type="submit" value="Login" disabled={username.length === 0} />
        </form>
    )
}