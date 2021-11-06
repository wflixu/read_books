import React, { useEffect, useReducer, useState } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'

// import { Example } from './chap1/example';
import { MyName } from './chap1/myname'
import { MyNameF } from './chap1/myNameFunc'
import { Login } from './user/Login'
import UserBar from './user/userbar';

import PostList from './post/PostList'
import CreatePost from './post/CreatePost';
import appReducer from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './contexts'
import ChangeTheme from './ChangeTheme'
import { useResource } from 'react-request-hook'




function App() {


  const [state, dispatch] = useReducer(appReducer, {
    user: '', posts: [], error: ''
  });

  const { user, error } = state;

  useEffect(() => {
   
    if (user) {
      document.title = `${user} - react hooks blog`;
    } else {
      document.title = ` react hooks blog`;
    }
  }, [user]);
  const [posts, getPosts] = useResource(() => {
    return {
      url: '/posts',
      method: 'get'
    }
  });

  useEffect(getPosts, []);
  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: 'POSTS_ERROR' })
    }
    if (posts && posts.data) {
      dispatch({
        type: 'FETCH_POSTS',
        posts: posts.data.reverse()
      });
    }
  }, [posts])

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue', secondaryColor: 'coral'
  });







  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <Header text="hello world!" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
        </ThemeContext.Provider>
        <UserBar />
        <br />
        <hr />
        {user && <CreatePost />}
        <br />
        <hr />
        <PostList posts={posts} >
          {error &&  <b>{error}</b> }
        </PostList>
      </StateContext.Provider>

    </div>
  )
}





export default App


