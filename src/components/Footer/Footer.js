import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';

import Logo from '../../img/logoFestIt.png'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgfacebook: require("../../img/facebook.png"),
            imgtwitter: require("../../img/twitter.png"),
            imginstagram: require("../../img/instagram.png")
            
        };

        this.handleMouseOverFb= this.handleMouseOverFb.bind(this);
        this.handleMouseOutFb= this.handleMouseOutFb.bind(this);
        this.handleMouseOverTw= this.handleMouseOverTw.bind(this);
        this.handleMouseOutTw= this.handleMouseOutTw.bind(this);
        this.handleMouseOverInsta= this.handleMouseOverInsta.bind(this);
        this.handleMouseOutInsta= this.handleMouseOutInsta.bind(this);
    }

    handleMouseOverFb() {
        this.setState({imgfacebook:require('../../img/facebookhover.png')})
    }

    handleMouseOutFb() {
        this.setState({imgfacebook: require('../../img/facebook.png')})
    }

    handleMouseOverTw() {
        this.setState({imgtwitter:require('../../img/twitterhover.png')})
    }

    handleMouseOutTw() {
        this.setState({imgtwitter: require('../../img/twitter.png')})
    }

    handleMouseOverInsta() {
        this.setState({imginstagram:require('../../img/instagramhover.png')})
    }

    handleMouseOutInsta() {
        this.setState({imginstagram:require('../../img/instagram.png')})
    }

    render() {
        return(
            <div className = 'Footer'>
                <div className = "footer-content1">
                    <img className='footer-logo' src = { Logo } alt='footer logo'/>
                </div>
               
                <div className = "footer-content2">
                    <Link to="/A-propos" className='footer-link'>À propos</Link>
                    <a className='footer-link' href='null'>Mentions légales</a>
                    <a className='footer-link' href='null'>Politique de confidentialité</a>
                    <p className='footer-link'>@The Jackson Three Company | <a href='https://www.wildcodeschool.com/fr-FR'>WCS</a> | 2020</p>     
                </div>
                
                <div className= "footer-content3">
                    <p>Rejoindre le club</p>
                    <form><input 
                        className= "footer-input" 
                        placeholder= "adresse e-mail">
                    </input>
                    <button className= "club-button">
                        <p className= 'send'><strong>Envoyer</strong></p>
                    </button>
                    </form>
                    <p>Suivez-nous aussi sur</p>
                    <div className="rs">
                        <a href='https://www.facebook.com/'>
                            <img 
                            onMouseOver={() => this.handleMouseOverFb()} 
                            onMouseOut={() => this.handleMouseOutFb()} 
                            src={this.state.imgfacebook} 
                            alt="facebook-logo" 
                            className="social-logo"
                            />  
                        </a>
                        <a href='https://twitter.com/'>
                            <img
                            onMouseOver={() => this.handleMouseOverTw()}
                            onMouseOut={() => this.handleMouseOutTw()} 
                            src={this.state.imgtwitter}
                            alt="twitter-logo" 
                            className="social-logo"
                            />
                        </a>
                        <a href='https://www.instagram.com/?hl=fr'>
                            <img 
                            onMouseOver={() => this.handleMouseOverInsta()}
                            onMouseOut={() => this.handleMouseOutInsta()} 
                            src={this.state.imginstagram}
                            alt="insta-logo" 
                            className="social-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            )
    }
};

export default Footer;