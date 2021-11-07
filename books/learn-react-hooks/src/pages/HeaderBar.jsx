import React, { Suspense, useContext } from 'react';
import ChangeTheme from '../ChangeTheme';

import { ThemeContext, StateContext } from '../contexts';
import Header from '../Header';
import CreatePost from '../post/CreatePost';
import UserBar from '../user/userbar';


function HeaderBar({ setTheme }) {
    const theme = useContext(ThemeContext);
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;

    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <Header text="hello world!" />
                <ChangeTheme theme={theme} setTheme={setTheme} />
            </ThemeContext.Provider>
            <Suspense fallback={'loading ...'}>
                <UserBar />
            </Suspense>
            <br />
            <hr />
            {user && <CreatePost/>}
        </div>
    )
}

export default HeaderBar
