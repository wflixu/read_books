import React, { useContext, useEffect, useState } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../contexts';

export function Login() {

    const { dispatch } = useContext(StateContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);



    const [user, login] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }));

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                setLoginFailed(false);
                dispatch({
                    type: 'LOGIN',
                    username: user.data[0].username
                });
            } else {
                setLoginFailed(true);
            }
        }
        if (user && user.error) {
            setLoginFailed(true);
        }

    }, [user])

    const handlePassword = (evt) => {

    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={username} id="login-username" onChange={evt => setUsername(evt.target.value)} />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" value={password} onChange={evt => setPassword(evt.target.value)} />
            <input type="submit" value="Login" disabled={username.length === 0} />
            {loginFailed && (<div style={{ color: 'red' }}>invalid username or password</div>)}
        </form>
    )
}