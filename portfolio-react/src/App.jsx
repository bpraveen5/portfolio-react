
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App