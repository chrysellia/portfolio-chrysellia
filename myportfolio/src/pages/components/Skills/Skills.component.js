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
                        <div className="frontend-wrapper">
                            <div className="frontend-title"><BiCodeCurly style={{marginRight: '0.5rem'}}/>Frontend developer <MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/></div>
                            <div className="frontend-description">Plus de 4ans</div>
                        </div>
                        <div className="frontend-data">
                            <div className="skills-title">
                                <h3 className="skills-name">HTML</h3>&nbsp;
                                <h3 className="skills-number">90%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-html"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">CSS</h3>
                                <h3 className="skills-number">80%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-css"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">Javascript</h3>
                                <h3 className="skills-number">75%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-js"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">ReactJS</h3>
                                <h3 className="skills-number">75%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-react"></span>
                            </div>
                        </div>
                    </div>

                    <div className="designer-skills">
                        <div className="designer-wrapper">
                            <div className="designer-title"><MdDesignServices style={{marginRight: '0.5rem'}}/>Designer <MdOutlineKeyboardArrowDown className="arrow-style" style={{marginLeft: '2rem'}}/></div>
                            <div className="designer-description">Plus de 4ans</div>
                        </div>
                        <div className="designer-data">
                            <div className="skills-title">
                                <h3 className="skills-name">Figma</h3>
                                <h3 className="skills-number">90%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-figma"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">Adobe XD</h3>
                                <h3 className="skills-number">75%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-adobe"></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="second-content">
                    <div className="backend-skills">
                        <div className="backend-title"><RiCodeSSlashFill style={{marginRight: '0.5rem'}}/>Backend developer <MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/></div>
                        <div className="backend-description">Plus de 4ans</div>
                        <div className="backend-data">
                        <div className="skills-title">
                                <h3 className="skills-name">PHP</h3>
                                <h3 className="skills-number">70%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-php"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">Symfony</h3>
                                <h3 className="skills-number">80%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-symfony"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">GraphQL</h3>
                                <h3 className="skills-number">78%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-graphql"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">NodeJS</h3>
                                <h3 className="skills-number">70%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-nodejs"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">MySQL</h3>
                                <h3 className="skills-number">85%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-nodejs"></span>
                            </div>

                            <div className="skills-title">
                                <h3 className="skills-name">MongoDB</h3>
                                <h3 className="skills-number">75%</h3>
                            </div>
                            <div className="skills-bar">
                                <span className="skills-percentage skills-mongodb"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills