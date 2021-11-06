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

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]


function App() {


  const [state, dispatch] = useReducer(appReducer, {
    user: '', posts: []
  });

  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - react hooks blog`;
    } else {
      document.title = ` react hooks blog`;
    }
  }, [user]);

  useEffect(() => {
    fetch('/api/posts').then(result => {
      return result.json();
    }).then(res => {
      dispatch({ type: 'FETCH_POSTS', posts: res })
    });
  },[]);

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
        <PostList posts={posts} />
      </StateContext.Provider>

    </div>
  )
}





export default App


