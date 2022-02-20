import React from 'react'
import Navbar from './pages/components/Navbar/Navbar.component'
import Header from './pages/components/Header/Header.component'
import About from './pages/components/About/About.component'
import Skills from './pages/components/Skills/Skills.component'
import Qualifications from './pages/components/Qualifications/Qualifications.component'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Qualifications/>
    </div>
  )
}

export default Home

