import React from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from "./Components/About";
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'




export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}
