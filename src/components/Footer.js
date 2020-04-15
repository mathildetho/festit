import React from 'react';
import "./Footer.css";


function Footer() {
    return(

    <div className = 'Footer'>
        <img className = "footer-logo" src = "" alt  =""/>
        <div className = "footer-content">
            <p>A propos</p>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
            <p>@The Jackson Three Company | WCS | 2020</p>
        </div>
        <div className= "footer-content2">
            <p>Rejoindre le club</p>
            <input 
                className= "footer-input" 
                placeholder= "adresse e-mail">
            </input>
            <button className= "club-button"><strong>Envoyer</strong></button>
            <p>Suivez-nous aussi sur</p>
            <img src="https://image.freepik.com/icones-gratuites/logo-facebook-coins-arrondis_318-9850.jpg" alt="facebook-logo" class="logo-style"/>     
            <img src="https://image.freepik.com/icones-gratuites/reseau-social-twitter_318-8427.jpg" alt="twitter-logo" class="logo-style"/>            
            <img src="https://image.freepik.com/icones-gratuites/camera-carre-millesime_318-10040.jpg" alt="insta-logo" class="logo-style"/>
            <img src="https://image.flaticon.com/icons/png/512/87/87421.png" alt="youtube-logo" class="logo-style"/>

            
        </div>
    </div>
    )
};

export default Footer;