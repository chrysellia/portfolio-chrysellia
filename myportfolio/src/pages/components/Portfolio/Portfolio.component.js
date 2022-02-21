import React from 'react'
import './Portfolio.style.scss'
import { FiArrowRight } from 'react-icons/fi'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

const Portfolio = () => {
  return (
    <div className="portfolio-component">
        <div className="portfolio-wrapper">
            <div className="portfolio-title">Portfolio</div>
            <div className="portfolio-content">
                <div className="arrow-icon"><MdOutlineArrowBackIosNew/></div>
                {/* <div className="portfolio-image">
                    <img src="images/portfolio.jpg"/>
                </div> */}
                <div className="description-wrapper">
                    <div className="portfolio-description">
                        <div className="description-title">Modern website</div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/> 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="demo-wrapper">
                        <button className="demo-button">Démo <FiArrowRight style={{marginLeft: '0.5rem'}}/></button>
                    </div>
                </div>
                <div className="arrow-icon"><MdOutlineArrowForwardIos/></div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio