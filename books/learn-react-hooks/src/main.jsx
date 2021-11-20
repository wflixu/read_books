import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios';
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

import { Provider } from 'react-redux'
import ConnectedApp from './ConnectedApp'

import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
