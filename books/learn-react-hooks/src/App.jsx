import  { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// import { Example } from './chap1/example';
import { MyName } from './chap1/myname'
import { MyNameF } from './chap1/myNameFunc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyNameF />
    </div>
  )
}

export default App
