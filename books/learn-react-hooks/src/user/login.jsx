import React, { useContext, useEffect, useState } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../contexts';
import { useInput } from 'react-hookedup';

export function Login() {

    const { dispatch } = useContext(StateContext);


    const [loginFailed, setLoginFailed] = useState(false);

    const { value: username, bindToInput:bindUsername, } = useInput('test');
    const { value: password, bindToInput:bindPassword, } = useInput('123');

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


    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" {...bindUsername} value={username} id="login-username"  />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" value={password} {...bindPassword}/>
            <input type="submit" value="Login" disabled={username.length === 0} />
            {loginFailed && (<div style={{ color: 'red' }}>invalid username or password</div>)}
        </form>
    )
}