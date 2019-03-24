import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store  from './Store';


// import Provider from './Provider';
import TodoApp  from './TodoApp';
// import ControlPanel from './components/controlPanel';
// import App from './context/App';
// import MyContext from './context/MyContext';




ReactDOM.render(
  <Provider store={store}  >
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
