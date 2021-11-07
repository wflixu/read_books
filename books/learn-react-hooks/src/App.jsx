import React, { useEffect, useReducer, useState, Suspense } from 'react'
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
import HeaderBar from './pages/HeaderBar'
import Home from './pages/Home'

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import PostPage from './pages/PostPage'
import FooterBar from './pages/FooterBar'



const routes = mount({
  '/': route({
    view: <Home />
  }),
  '/view/:id': route(req => {
    return {
      view: <PostPage id={req.params.id} />
    }
  })
})

function App() {


  const [state, dispatch] = useReducer(appReducer, {
    user: '', posts: [], error: ''
  });

  const { user, error } = state;


  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue', secondaryColor: 'coral'
  });






  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <Router routes={routes}>
          <HeaderBar setTheme={setTheme} />
          <hr />
          <View></View>
          <FooterBar></FooterBar>
        </Router>
      </StateContext.Provider>

    </div>
  )
}





export default App


