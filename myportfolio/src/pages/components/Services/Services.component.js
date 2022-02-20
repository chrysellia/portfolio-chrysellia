import React from 'react'
import './Services.style.scss'
import { FiArrowRight } from 'react-icons/fi'

const Services = () => {
  return (
    <div className="services-component">
        <div className="services-wrapper">
            <div className="services-title">Services</div>
            <div className="services-card">
                <div className="card-wrapper">
                    <div className="card-type">
                        <div className="card-title">UI/UX Designer</div>
                        <div className="card-link">view more <FiArrowRight style={{marginLeft: '0.5rem'}}/></div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card-type">
                        <div className="card-title">Frontend Developer</div>
                        <div className="card-link">view more <FiArrowRight style={{marginLeft: '0.5rem'}}/></div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card-type">
                        <div className="card-title">Backend Developer</div>
                        <div className="card-link">view more <FiArrowRight style={{marginLeft: '0.5rem'}}/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services