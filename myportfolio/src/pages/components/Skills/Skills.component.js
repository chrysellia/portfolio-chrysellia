import React, { useState, useRef } from 'react'
import './Skills.style.scss'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdDesignServices } from 'react-icons/md'
import { BiCodeCurly } from 'react-icons/bi'
import { RiCodeSSlashFill } from 'react-icons/ri'

const Skills = () => {
    const [frontend, setFrontend] = useState(false);
    const [designer, setDesigner] = useState(false);
    const [backend, setBackend] = useState(false);
    
    const [show, toggleShow] = React.useState(false);
    const skillsRef = useRef(null);

    const handleClick = (event) => {
        if (skillsRef.current && !skillsRef.current.contains(event.target)) {
            toggleShow(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClick, true);

        return () => document.removeEventListener('click', handleClick, true);
    });

  return (
    <div className="skills-component">
        <div className="skills-wrapper">
            <div className="skills-title">Compétences</div>
            <div className="skills-content">
                <div className="first-content">
                    <div className="frontend-skills">
                        <div className="frontend-wrapper">
                            <div className="frontend-title" 
                                onClick={() => setFrontend(true)}>
                                <BiCodeCurly style={{marginRight: '0.5rem'}}/>Frontend developer 
                                { frontend ? (
                                    <MdOutlineKeyboardArrowUp style={{marginLeft: '2rem'}}/>
                                ) : 
                                    (<MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/>)
                                }
                            </div>
                            <div className="frontend-description">Plus de 4ans</div>
                        </div>
                        
                        {frontend ? (
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
                        ) : null}
                    </div>

                    <div className="designer-skills">
                        <div className="designer-wrapper">
                            <div className="designer-title" onClick={() => setDesigner(true)}>
                                <MdDesignServices style={{marginRight: '0.5rem'}}/>Designer 
                                { designer ? (
                                    <MdOutlineKeyboardArrowUp style={{marginLeft: '2rem'}}/>
                                ) : 
                                    (<MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/>)
                                }
                            </div>
                            <div className="designer-description">Plus de 4ans</div>
                        </div>
                        {designer ? (
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
                        ) : null}
                    </div>
                </div>
                
                <div className="second-content">
                    <div className="backend-skills">
                        <div className="backend-title" onClick={() => setBackend(true)}>
                            <RiCodeSSlashFill style={{marginRight: '0.5rem'}}/>Backend developer 
                            { backend ? (
                                <MdOutlineKeyboardArrowUp style={{marginLeft: '2rem'}}/>
                            ) : 
                                (<MdOutlineKeyboardArrowDown style={{marginLeft: '2rem'}}/>)
                            }
                        </div>
                        <div className="backend-description">Plus de 4ans</div>
                        {backend ? (
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
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills