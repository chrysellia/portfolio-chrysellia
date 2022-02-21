import React from 'react'
import './Contact.style.scss'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { MdLocationPin } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'

const Contact = () => {
  return (
    <div className="contact-component">
        <div className="contact-wrapper">
            <div className="contact-title">Contact</div>
            <div className="contact-content">
                <div className="contact-information">
                    <div className="contact-telephone"><BsTelephoneFill className="telephone-style" style={{marginRight:'0.5rem'}}/>Téléphone
                        <div className="telephone-information">+261 34 63 625 81</div>
                    </div>

                    <div className="contact-email"><HiMail className="email-style" style={{marginRight:'0.5rem'}}/>Email
                        <div className="email-information">priscilliachryso@gmail.com</div>
                    </div>
                    <div className="contact-location"><MdLocationPin className="location-style" style={{marginRight:'0.5rem'}}/>Location
                        <div className="location-information">Ankazotokana - Ambanidia, Antananarivo-Madagascar</div>
                    </div>
                
                </div>

                <div className="contact-form">
                    <form action="/action_page.php">
                        <label for="fname">Nom</label>
                        <input type="text" placeholder="Votre nom.."/>

                        <label for="lname">Email</label>
                        <input type="text" placeholder="Votre prénom.."/>

                        <label for="country">Projet</label>
                        <input type="text" placeholder="Votre projet.."/>
                    
                        <label for="message">Message</label>
                        <textarea type="text"></textarea>
                    </form>

                    <div className="button-contact">
                        <button className="button-style">Envoyer <IoIosSend style={{marginLeft: '0.5rem'}}/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact