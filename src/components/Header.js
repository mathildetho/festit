import React from 'react';
import './Header.css';
import logo from '../img/logoFestIt.png';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgpanier: require('../img/panier.png')
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver () {
        this.setState({imgpanier : require('../img/panier-rempli.png')})
    }

    handleMouseOut () {
        this.setState({imgpanier: require('../img/panier.png')})
    }

    render() {
        return (
            <div className='header'>
                <nav className='Nav'>
                        <a href="#"><img className='logo' src={logo} alt='logo Fest It' /></a>
                        <ul className='menu'>
                            <li><a id="title" href="#">Festivals</a></li>
                            <li><a id="title" href="#">Artistes</a></li>
                            <li><a id="title" href="#">À propos</a></li>
                            <li><a href="#"><img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className='panier' src={this.state.imgpanier} alt='panier' /></a></li>
                        </ul>
                </nav>
            </div>
        )
    }
}

export default Header;