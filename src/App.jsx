import './App.css'
import Greeting from './Greeting'
import Users from './Users'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment  = () => {
    setCount(count + 1)
  }

  return(
    <> 
      <Greeting title="Users App" count={count} increment={increment}/>
      <Users />
    </>
  )
}

export default App

// folder structure, component, child component, fragment, StrictMode, Basic css

// state, key, spread, props, function callback
