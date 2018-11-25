import React, { Component } from 'react';
import './App.css';

import CountDown from './components/CountDown'


class App extends Component {

  render() {
    
    return (
      <div className="App">
        <h2>chap06 countdown</h2>
        <CountDown startCount={20}>
            {
              (count)=> <div>{count>0? count:'新年快乐！'}</div>
            }
        </CountDown>
      </div>
    );
  }
}

export default App;
