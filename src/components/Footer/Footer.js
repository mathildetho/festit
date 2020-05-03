import React from 'react';
import "./Footer.css";
import {NavLink} from 'react-router-dom';

import Logo from '../../img/logoFestIt.png'





class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgfacebook: require("../../img/facebook.png"),
            imgtwitter: require("../../img/twitter.png"),
            imginstagram: require("../../img/instagram.png")
            
        };

        this.handleMouseOver= this.handleMouseOver.bind(this);
        this.handleMouseOut= this.handleMouseOut.bind(this);
    }
    handleMouseOver() {
        this.setState({imgfacebook:require('../../img/facebookhover.png')})
        this.setState({imgtwitter:require('../../img/twitterhover.png')})
        this.setState({imginstagram:require('../../img/instagramhover.png')})
    }
    handleMouseOut() {
        this.setState({imgfacebook: require('../../img/facebook.png')})
        this.setState({imgtwitter: require('../../img/twitter.png')})
        this.setState({imginstagram:require('../../img/instagram.png')})
    }
    render() {
        return(

            <div className = 'Footer'>
                
                <div className = "footer-content1">
                    <img className='footer-logo' src = { Logo } alt='footer logo'/>
                </div>
               
                <div className = "footer-content2">
                    <NavLink to="/A-propos" className='footer-link'>À propos</NavLink>
                    <a className='footer-link'>Mentions légales</a>
                    <a className='footer-link'>Politique de confidentialité</a>
                    <a className='footer-link'>@The Jackson Three Company | WCS | 2020</a>     
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
                    <img 
                    onMouseOver={this.handleMouseOver} 
                    onMouseOut={this.handleMouseOut} 
                    src={this.state.imgfacebook} 
                    alt="facebook-logo" 
                    className="social-logo"
                    />     
                    <img
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut} 
                        src={this.state.imgtwitter}
                        alt="twitter-logo" 
                        className="social-logo"
                        />
                    <img 
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut} 
                        src={this.state.imginstagram}
                        alt="insta-logo" 
                        className="social-logo"
                        />
              
        
                    
                </div>
            </div>
            )
    }
};

export default Footer;