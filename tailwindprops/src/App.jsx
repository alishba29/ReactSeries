import { useState } from 'react'
import Registrationcard from './components/Registrationcard'
import './App.css'

function App() {
  let myObj = {
    username: "sunshinesonnets",
    age: 21,
  }
  let newArr = ["sunshinesonnets", 21]
  return (
    <>
      <h1 className = "bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Registrationcard channel="sunshinesonnets" someObj = {myObj} someArr={newArr}/>
      <Registrationcard channel="sunshinesonnets"/>

    </>
  )
}

export default App
