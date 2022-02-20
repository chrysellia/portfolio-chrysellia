import React from 'react'
import './Work.style.scss'

const Work = () => {
  return (
    <div className="work-component">
        <div className="work-wrapper">
            <div className="education-work">
                <div className="work-description">Developer Frontend</div>
                <div className="work-name">Turing.mg, Antananarivo - Madagascar</div>
                <div className="work-date">Octobre 2018 - Décembre 2020</div>
            </div><br/>

            <div className="education-school">
                <div className="school-description">Developer Frontend</div>
                <div className="school-name">Codinplay, Antananarivo - Madagascar</div>
                <div className="school-date">Janvier 2021 à nos jours</div>
            </div><br/>
        </div>
    </div>
  )
}

export default Work