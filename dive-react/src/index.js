import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import TodoApp from './TodoApp';
import ControlPanel from './components/controlPanel';


import store from './Store.js';

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById('root')
);
