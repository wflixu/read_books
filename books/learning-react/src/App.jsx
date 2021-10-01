import { useState, useEffect, useLayoutEffect } from 'react'
import logo from './logo.svg'
import './App.css'

import StarRating from './StarRating'

function App() {


  useEffect(() => {
    console.log('useEffect');
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })
  return (
    <div className="App">
      <StarRating></StarRating>
    </div>
  )
}

export default App
