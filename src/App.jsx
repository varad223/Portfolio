import React, { Component, useEffect, useState } from 'react'
import Navbar from "./components/navbar"
import Home from "./components/home"
import Experience from "./components/experience"
import Skills from "./components/skill"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Aos from 'aos'
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    Aos.init();

  }, [])
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </>
  )
}

export default App
