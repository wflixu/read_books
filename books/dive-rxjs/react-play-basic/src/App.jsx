import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { RXCounter } from './components/RXCounter';

import {Counter} from './components/Counter'
import {StopWatch} from './components/StopWatch'

function App() {


  return (
    <div className="App">
      <h2>
        rxcount
      </h2>
      <RXCounter/>
      <Counter/>
      <hr/>
      <StopWatch />
    </div>
  )
}

export default App
