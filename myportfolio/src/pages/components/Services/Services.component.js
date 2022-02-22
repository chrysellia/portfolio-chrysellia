import React from 'react'
import './Services.style.scss'
import { MdDesignServices } from 'react-icons/md'
import { BiCodeCurly, BiCodeAlt } from 'react-icons/bi'

const Services = () => {
  return (
    <div className="service-component">
        <div className="service-wrapper">
            <div className="service-title">Services</div>
            <div className="service-card">
                <div className="card-wrapper">
                    <div className="card-icon">
                        <div className="icon-wrapper"><MdDesignServices/></div>
                    </div>
                    <div className="card-content">
                        <div className="card-title">UI/UX Design</div>
                        <div className="card-description">
                            <p>
                                Recueil et évaluation les besoins des utilisateurs.
                                Illustration des idées de conception à l'aide de storyboards, workflow et plans de site. Conception des éléments d'interface utilisateur
                                graphique, tels que des menus, des onglets et des widgets.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card-icon">
                        <div className="icon-wrapper"><BiCodeCurly/></div>
                    </div>
                    <div className="card-content">
                        <div className="card-title">Website Design</div>
                        <div className="card-description">
                            <p>
                                Conception et création des sites Web.
                                Préparation des plans de conception et présentation de la structure du site Web.
                                Conceptualisation des idées créatives avec les clients. Maintenance de l'apparence des sites Web en appliquant des normes de contenu.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="card-icon">
                        <div className="icon-wrapper"><BiCodeAlt/></div>
                    </div>
                    <div className="card-content">
                        <div className="card-title">Software Development</div>
                        <div className="card-description">
                            <p>
                                Conception, mise en oeuvre et gestion de logiciels en les testant.
                                Déploiement et livraison des logiciels au client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services