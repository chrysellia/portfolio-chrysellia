import React from 'react'
import './Header.style.scss'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { FiGithub, FiSend } from 'react-icons/fi'


const Header = () => {
  return (
    <div className="header-component">
        <div className="header-wrapper">
            <div className="header-icon">
                <div className="facebook-icon">
                    <a href="https://www.facebook.com/chrysellia"><FaFacebookF/></a>
                </div>
                <div className="linkedin-icon">
                    <a href="https://www.linkedin.com/in/chrysellia/"><FaLinkedinIn/></a>
                </div>
                <div className="instagram-icon">
                    <a href="https://www.instagram.com/chrysellia/?hl=fr"><GrInstagram/></a>
                </div>
                <div className="github-icon">
                    <a href="https://github.com/chrysellia"><FiGithub/></a>
                </div>
            </div>
            <div className="header-content">
                <div className="content-wrapper">
                    <div className="header-title">Bonjour, je suis <span style={{color:'rgb(235, 39, 72)'}}>Priscillia</span></div>
                    <div className="header-subtitle">Frontend developer, Product Owner</div>
                    <div className="header-description">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport.<br/>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            {/* Ma passion pour le design me permet de produire des sites ergonomiques et dynamiques.<br/>
                            Motivée à fournir des produits de qualité aux clients, la gestion de projets et des équipes sont mes p  */}
                        </p>
                    </div>
                </div>
                <div className="header-button">
                    <div className="contact-wrapper">
                        <button className="contact-button">Contactez-moi <FiSend style={{marginLeft: '0.5rem'}}/></button>
                    </div>
                </div>
            </div>
            {/* <div className="header-image">
                <img src="images/profil.jpg"/>
            </div> */}
        </div>
    </div>
  )
}

export default Header