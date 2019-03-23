import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import Provider from './Provider';
// import TodoApp from './TodoApp';
import ControlPanel from './components/controlPanel';


import store from './Store.js';
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById('root')
);
