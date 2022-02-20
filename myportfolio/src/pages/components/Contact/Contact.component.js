import React from 'react'
import './Contact.style.scss'
import { FiPhone, FiMail } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { IoIosSend } from 'react-icons/io'

const Contact = () => {
  return (
    <div className="contact-component">
        <div className="contact-wrapper">
            <div className="contact-title">Contact</div>
            <div className="contact-content">
                <div className="contact-information">
                    <div className="contact-telephone"><FiPhone style={{marginRight:'0.5rem'}}/>Téléphone
                        <div className="telephone-information">+261 34 63 625 81</div>
                    </div>

                    <div className="contact-email"><FiMail style={{marginRight:'0.5rem'}}/>Email
                        <div className="email-information">priscilliachryso@gmail.com</div>
                    </div>

                    <div className="contact-location"><GrLocation style={{marginRight:'0.5rem'}}/>Location
                        <div className="location-information">Ankazotokana - Ambanidia, Antananarivo-Madagascar</div>
                    </div>
                
                </div>

                <div className="contact-form">
                    <div className="name-information">
                        <div className="name-label"> Nom
                            <input type="text"/>
                        </div>
                        <div className=""> Email
                            <input type="text"/>
                        </div>
                    </div>
                    
                    <div className="project-information"> Projet
                        <input type="text"/>
                    </div>
                    <div className=""> Message
                        <textarea type="text"/>
                    </div>

                    <div className="button-contact">
                        <button>Envoyer <IoIosSend/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact