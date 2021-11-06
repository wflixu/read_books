import React, { useContext, useState } from 'react';
import { StateContext } from '../contexts';

import { Login } from './login';
import Logout from './logout';
import Register from './register';


export default function UserBar() {

    const { state } = useContext(StateContext);
    const { user } = state;

    if (user) {
        return <Logout />
    } else {
        return (
            <>
                <Login />
                <hr />
                <Register />
            </>
        )
    }
}