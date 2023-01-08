import React from 'react'
import Header from './components/Header/header'
import NavBar from './components/NavBar/navbar'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App