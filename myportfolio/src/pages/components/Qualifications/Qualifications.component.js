import React from 'react'
import './Qualifications.style.scss'
import { MdOutlineSchool, MdWorkOutline } from 'react-icons/md'

const Qualifications = () => {
  return (
    <div className="qualifications-component">
        <div className="qualifications-wrapper">
            <div className="qualifications-title">Qualifications</div>
            <div className="qualifications-content">
                <div className="education"><MdOutlineSchool style={{marginRight:'0.5rem'}}/>Education</div>
                <div className="work"><MdWorkOutline style={{marginRight:'0.5rem'}}/>Work</div>
            </div>
        </div>
    </div>
  )
}

export default Qualifications