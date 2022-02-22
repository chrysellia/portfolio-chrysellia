import React from 'react'
import './Portfolio.style.scss'

const Portfolio = () => {
  return (
    <div className="portfolio-component">
        <div className="portfolio-wrapper">
            <div className="portfolio-title">Portfolio</div>
            <div className="portfolio-gallery">
              <div className="gallery-wrapper">
                <img src="images/portfolio/roompage.png"/>
              </div>
              <div className="gallery-wrapper">
                <img src="images/portfolio/ecommerce.png"/>
              </div>
              <div className="gallery-wrapper">
                <img src="images/portfolio/management.png"/>
              </div>

              <div className="gallery-wrapper">
                <img src="images/portfolio/sunnyside.png"/>
              </div>
              <div className="gallery-wrapper">
                <img src="images/portfolio/shorterlink.png"/>
              </div>
              <div className="gallery-wrapper">
                <img src="images/portfolio/timetracking.png"/>
              </div>
              <div className="gallery-wrapper">
                <img src="images/portfolio/dashboard.png"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio