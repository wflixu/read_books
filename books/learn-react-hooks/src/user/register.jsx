import React, { useContext, useState } from 'react';
import { StateContext } from '../contexts';


export default function Register() {
    const {dispatch} = useContext(StateContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    return (
        <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'REGISTER', username }) }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username" value={username} onChange={e => setUsername(e.target.value)} />
            <label htmlFor="register-password">Password:</label>
            <input type="password" name="register-password" id="register-password" value={password} onChange={e => setPassword(e.target.value)} />
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" name="register-password-repeat" id="register-password-repeat" value={password2} onChange={e => setPassword2(e.target.value)} />
            <input type="submit" value="Register" disabled={username.length === 0} />
        </form>
    )
}