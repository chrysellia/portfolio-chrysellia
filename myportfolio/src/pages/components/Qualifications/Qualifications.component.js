import React from 'react'
import './Qualifications.style.scss'
import { MdOutlineSchool, MdWorkOutline } from 'react-icons/md'
import Education from './Education/Education.component'
import Work from './Work/Work.component'

const Qualifications = () => {
  return (
    <div className="qualifications-component">
        <div className="qualifications-wrapper">
            <div className="qualifications-title">Qualifications</div>
            <div className="qualifications-content">
                <div>
                  <div className="education"><MdOutlineSchool className="education-icon" style={{marginRight:'0.5rem'}}/>Education </div>
                  <Education/>
                </div>
                <div>
                  <div className="work"><MdWorkOutline className="work-icon" style={{marginRight:'0.5rem'}}/>Work </div>
                  <Work/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualifications