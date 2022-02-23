import React from 'react'
import { BiDownload } from 'react-icons/bi'
import './About.style.scss'

const About = () => {
  return (
    <div className="about-component">
       <div className="about-wrapper">
            <div className="about-title">A propos</div>
            <div className="about-content">
                <div className="about-image">
                    <img src="images/about.jpg"/>
                </div>
                <div className="description-wrapper">
                    <div className="about-description">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/> 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="button-about">
                        <button className="button-style">Télécharger CV <BiDownload style={{marginLeft: '0.5rem'}}/></button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default About