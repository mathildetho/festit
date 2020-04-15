import React from 'react';
import "./Footer.css";


function Footer() {
    return(

    <div className = 'Footer'>
        
        <div className = "footer-content1">
            <img className='footer-logo' src = './img/logoFestIt.png' alt='footer logo'/>
        </div>
        <div className = "footer-content2">
            <p>A propos</p>
            <p>Mentions légales</p>
            <p>Politique de confidentialité</p>
            <p>@The Jackson Three Company | WCS | 2020</p>
        </div>
        <div className= "footer-content3">
            <p>Rejoindre le club</p>
            <input 
                className= "footer-input" 
                placeholder= "adresse e-mail">
            </input>
            <button className= "club-button">
                <p className= 'send'><strong>Envoyer</strong></p>
            </button>
            <p>Suivez-nous aussi sur</p>
            <img src="./img/facebook.png" alt="facebook-logo" class="logo-style"/>     
            <img src="./img/twitter.png" alt="twitter-logo" class="logo-style"/>            
            <img src="./img/instagram.png" alt="insta-logo" class="logo-style"/>

            
        </div>
    </div>
    )
};

export default Footer;