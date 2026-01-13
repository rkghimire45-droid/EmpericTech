import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'
import { Routes, Route, useMatch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>

        </Routes>
        
      </div>
      
    </>
  )
}

export default App
