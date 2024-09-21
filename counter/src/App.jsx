import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(15);
 
  const addValue = () =>{
    setcounter(counter + 1);
    
  }
  
  const removeValue = () =>{
    setcounter(counter - 1);
  }

  return (
    <>
      <h1>Hi, this is react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add</button>
      <br /><br />
      <button
      onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
