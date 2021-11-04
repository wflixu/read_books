import React, { useState } from 'react';

import { Login } from './login';
import Logout from './logout';
import Register from './register';

export default function UserBar({ user, dispatch }) {



    if (user) {
        return <Logout user={user} dispatch={dispatch} />
    } else {
        return (
            <>
                <Login dispatch={dispatch} />
                <hr />
                <Register dispatch={dispatch} />
            </>
        )
    }
}