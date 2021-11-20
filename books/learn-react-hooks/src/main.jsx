import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RequestProvider } from 'react-request-hook'
import axios from 'axios';
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})



import { Provider } from 'mobx-react'
import TodoStore from './store'

const store = new TodoStore();
import Todo from './todo'

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={store}>
      <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
