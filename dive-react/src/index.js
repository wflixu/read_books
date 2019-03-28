import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './configureStore'
import './index.css'

import App from './App';


// import Provider from './Provider';
// import App from './TodoApp'
// import ControlPanel from './components/controlPanel';
// import App from './context/App';
// import MyContext from './context/MyContext';
import initState from './Store';

const store = configureStore(initState);
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}
