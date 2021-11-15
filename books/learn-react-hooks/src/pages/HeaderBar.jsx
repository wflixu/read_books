import React, { Suspense, useContext } from 'react';
import useWindowSize from '@rehooks/window-size';

import ChangeTheme from '../ChangeTheme';
import { ThemeContext, StateContext } from '../contexts';
import Header from '../Header';
import CreatePost from '../post/CreatePost';
import UserBar from '../user/userbar';


function HeaderBar({ setTheme }) {
    const theme = useContext(ThemeContext);
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;

    const { innerWidth } = useWindowSize();

    const mobilePhone = innerWidth < 640;
    

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
            {user && <CreatePost />}
        </div>
    )
}

export default HeaderBar
