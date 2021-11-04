import React, { useState } from 'react';

import { Login } from './login';
import Logout from './logout';
import Register from './register';

export default function UserBar({user,setUser}) {



    if (user) {
        return <Logout user={user} setUser={setUser} />
    } else {
        return (
            <>
                <Login setUser={setUser} />
                <hr />
                <Register setUser={setUser} />
            </>
        )
    }
}