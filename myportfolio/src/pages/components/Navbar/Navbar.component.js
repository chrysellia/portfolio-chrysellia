import React from 'react'
import './Navbar.style.scss'

const Navbar = () => {
  return (
    <div className="navbar-component">
        <div className="navbar-wrapper">
            <div className="navbar-name">Priscillia</div>
            <div className="navbar-menu">
                <div className="menu-item">Accueil</div>
                <div className="menu-item">A propos</div>
                <div className="menu-item">Compétences</div>
                <div className="menu-item">Portfolio</div>
                <div className="menu-item">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar