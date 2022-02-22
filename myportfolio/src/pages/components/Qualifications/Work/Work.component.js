import React from 'react'
import './Work.style.scss'

const Work = () => {
  return (
    <div className="work-component">
        <div className="work-wrapper">
          <div className="work-data">
            <div></div>

            <div className="qualifications">
              <div className="qualification-rounder"></div>
              <div className="qualification-line"></div>
            </div>

            <div className="work-content">
                <h3 className="work-description">Developer Frontend</h3>
                <span className="work-name">Turing.mg, Antananarivo - Madagascar</span>
                <div className="work-date">Octobre 2018 - Décembre 2020</div>
            </div>
          </div>
            
          <div className="work-data">
            <div className="work-content">
              <h3 className="work-description">Developer Frontend</h3>
              <span className="work-name">Codinplay, Antananarivo - Madagascar</span>
              <div className="work-date">Janvier 2021 à nos jours</div>
            </div>

            <div className="qualifications">
              <div className="qualification-rounder"></div>
              <div className="qualification-line"></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work