import React from 'react'
import Navbar from './pages/components/Navbar/Navbar.component'
import Header from './pages/components/Header/Header.component'
import About from './pages/components/About/About.component'
import Skills from './pages/components/Skills/Skills.component'
import Qualifications from './pages/components/Qualifications/Qualifications.component'
import Services from './pages/components/Services/Services.component'
import Portfolio from './pages/components/Portfolio/Portfolio.component'
// import Contact from './pages/components/Contact/Contact.component'
import Footer from './pages/components/Footer/Footer.component'
import './App.style.scss'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Qualifications/>
      <Services/>
      <Portfolio/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default Home

