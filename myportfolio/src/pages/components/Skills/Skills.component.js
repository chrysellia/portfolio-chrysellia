import React from 'react'
import './Skills.style.scss'
import { MdOutlineKeyboardArrowDown, MdDesignServices } from 'react-icons/md'
import { BiCodeCurly } from 'react-icons/bi'
import { RiCodeSSlashFill } from 'react-icons/ri'

const Skills = () => {
  return (
    <div className="skills-component">
        <div className="skills-wrapper">
            <div className="skills-title">Compétences</div>
            <div className="skills-content">
                <div className="first-content">
                    <div className="frontend-skills">
                        <div className="frontend-title"><BiCodeCurly style={{marginRight: '0.5rem'}}/>Frontend developer <MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/></div>
                        <div className="frontend-description">Plus de 4ans</div>
                        {/* <div className="frontend-menu">
                            <div className="frontend-item">HTML</div>
                            <div className="frontend-item">CSS</div>
                            <div className="frontend-item">Javascript</div>
                            <div className="frontend-item">ReactJS</div>
                        </div> */}
                    </div>
                    <div className="designer-skills">
                        <div className="designer-title"><MdDesignServices style={{marginRight: '0.5rem'}}/>Designer <MdOutlineKeyboardArrowDown className="arrow-style" style={{marginLeft: '2rem'}}/></div>
                        <div className="designer-description">Plus de 4ans</div>
                        {/* <div className="designer-menu">
                            <div className="designer-item">Figma</div>
                            <div className="designer-item">Adobe XD</div>
                        </div> */}
                    </div>
                </div>
                
                <div className="second-content">
                    <div className="backend-skills">
                        <div className="backend-title"><RiCodeSSlashFill style={{marginRight: '0.5rem'}}/>Backend developer <MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/></div>
                        <div className="backend-description">Plus de 4ans</div>
                        {/* <div className="backend-menu">
                            <div className="backend-item">PHP</div>
                            <div className="backend-item">Symfony</div>
                            <div className="backend-item">GraphQL</div>
                            <div className="backend-item">NodeJS</div>
                            <div className="backend-item">MySQL</div>
                            <div className="backend-item">MongoDB</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills