import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInfo from './component/UserCard'
import {After} from './component/After';

class App extends Component {

  render() {
    
    const user = {
      name:'tom',
      age:17,
      agender:'man'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UserInfo {...user}/>
        <hr/>
        <After {...user}/>
      </div>
    );
  }
}

export default App;
