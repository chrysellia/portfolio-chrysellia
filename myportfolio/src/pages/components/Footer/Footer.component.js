import React from 'react'
import './Footer.style.scss'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { SiSkypeforbusiness } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="footer-component">
       <div className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-name">
                    <div className="footer-title">Priscillia</div>
                    <div className="footer-description">Frontend Developer</div>
                    </div>
                <div className="footer-menu">
                    <div className="menu-item">Services</div>
                    <div className="menu-item">Portfolio</div>
                    <div className="menu-item">Contact</div>
                </div>
                <div className="footer-icon">
                    <div className="icon-item">
                        <a href="https://www.facebook.com/chrysellia"><FaFacebookF/></a>
                    </div>
                    <div className="icon-item">
                        <a href="https://www.instagram.com/chrysellia/?hl=fr"><GrInstagram/></a>
                    </div>
                    <div className="icon-item"><SiSkypeforbusiness/></div>
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default Footer