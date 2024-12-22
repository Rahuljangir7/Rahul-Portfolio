import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App