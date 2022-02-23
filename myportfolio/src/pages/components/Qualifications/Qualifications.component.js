import React, {useState} from 'react'
import './Qualifications.style.scss'
import { MdOutlineSchool, MdWorkOutline } from 'react-icons/md'
import Education from './Education/Education.component'
import Work from './Work/Work.component'

const Qualifications = () => {
  const [education, setEducation] = useState(false);
  const [work, setWork] = useState(false);

  return (
    <div className="qualifications-component">
        <div className="qualifications-wrapper">
            <div className="qualifications-title">Qualifications</div>
            <div className="qualifications-content">
                <div>
                  <div className="education" onClick={() => setEducation(true)}>
                    <MdOutlineSchool className="education-icon" style={{marginRight:'0.5rem'}}/>
                    Education 
                  </div>
                  {education ? (<Education/>) : null}
                </div>
                <div>
                  <div className="work" onClick={() => setWork(true)}>
                    <MdWorkOutline className="work-icon" style={{marginRight:'0.5rem'}}/>Work 
                  </div>
                  {work ? (<Work/>) : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualifications