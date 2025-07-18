import { useState } from 'react'
import Navbar from './components/Nabar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
function App() {

  return (
    <>
      <div className='relative min-h-screen'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
