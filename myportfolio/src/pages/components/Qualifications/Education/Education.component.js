import React, {useRef, useState} from 'react'
import './Education.style.scss'

const Education = () => {
    const educationRef = useRef(null);
    const [show, toggleShow] = useState(false);

    const handleClick = (event) => {
        if (educationRef.current && !educationRef.current.contains(event.target)) {
            toggleShow(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClick, true);

        return () => document.removeEventListener('click', handleClick, true);
    });

  return (
    <div className="education-component">
        <div className="education-wrapper">
            <div className="qualifications-data">
                <div></div>

                <div className="qualifications">
                    <span className="qualifications-rounder"></span>
                    <span className="qualifications-line"></span>
                </div>

                <div className="education-school">
                    <h3 className="school-description">Diplôme Baccalaureat - Série Littéraire - <br/>Mention Assez Bien</h3>
                    <span className="school-name">ESCA Antanimena, Antananarivo - Madagascar</span>
                    <div className="school-date">Octobre 2012 - Août 2015</div>
                </div>
            </div>

            <div className="qualifications-data">
                <div className="education-school">
                    <h3 className="school-description">Licence en Sciences Politiques</h3>
                    <span className="school-name">IEP Madagascar à Ampandrana, Antananarivo</span>
                    <div className="school-date">Octobre 2015 - Février 2019</div>
                </div> 

                <div className="qualifications">
                    <span className="qualifications-rounder"></span>
                    <span className="qualifications-line"></span>
                </div> 
            </div>

            <div className="qualifications-data">
                <div></div>

                <div className="qualifications">
                    <span className="qualifications-rounder"></span>
                    <span className="qualifications-line"></span>
                </div>

                <div className="education-school">
                    <h3 className="school-description">Certificat en Japanese Language Proficiency Test N4</h3>
                    <span className="school-date">Mars 2017 - Février 2018</span>
                </div>          
            </div>

            <div className="qualifications-data">
                <div className="education-school">
                    <h3 className="school-description">Diplôme d'études françaises Niveau B2</h3>
                    <span className="school-name">Alliance Française Andavamamba, Antananarivo - Madagascar</span>
                    <div className="school-date">Novembre 2020 - Février 2021</div>
                </div>

                <div className="qualifications">
                    <span className="qualifications-rounder"></span>
                    <span className="qualifications-line"></span>
                </div>
            </div>
            
            <div className="qualifications-data">
                <div></div>

                <div className="qualifications">
                    <span className="qualifications-rounder"></span>
                    <span className="qualifications-line"></span>
                </div>

                <div className="education-school">
                    <h3 className="school-description">Licence en Informatique appliquée</h3>
                    <span className="school-name">ESMIA, Antananarivo - Madagascar</span>
                    <div className="school-date">Décembre 2020 - Janvier 2022</div>
                </div>
            </div>

            <div className="qualifications-data">
                <div className="education-school">
                    <h3 className="school-description">Etudiante en Master en Informatique Appliquée à la Gestion d'Entreprise</h3>
                    <span className="school-name">ESMIA, Antananarivo- Madagascar</span>
                    <div className="school-date">Janvier 2022 à nos jours</div>
                </div>

                <div className="qualifications">
                    <span className="qualifications-rounder"></span>
                    <span className="qualifications-line"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education