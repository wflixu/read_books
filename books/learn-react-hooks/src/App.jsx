import React, { useReducer, useState } from 'react'
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


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]


function App() {


  const [state, dispatch] = useReducer(appReducer, {
    user: '', posts: defaultPosts
  });

  const {user,posts} = state;


  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatch} />
      <br />
      <hr />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}



export default App


