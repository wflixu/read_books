import React, { lazy, useContext, useState } from 'react';
import { StateContext } from '../contexts';

import { Login } from './login';

import Register from './register';

const Logout = lazy(()=>import('./Logout'));

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