import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'
import { Routes, Route, useMatch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HeroVideo from './Components/HeroVideo/HeroVideo';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact Us/Contact';
import Blog from './Components/Blogs/Blogs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <HeroVideo/>
        <Blog/>
        <Contact/>
        <Footer/>
        <Routes>

        </Routes>
        
      </div>
      
    </>
  )
}

export default App
