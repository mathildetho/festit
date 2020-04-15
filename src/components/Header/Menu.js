import React, {useState} from 'react';
import styled from "styled-components";
import './Menu.css';
import logo from '../../img/logoFestIt.png';

const StyledMenu = styled.nav`
  @media (max-width: 700px) {
    transform: ${({ open }) =>
      open ? "translateX(-200)" : "translateY(-200%)"};
  }
`;

function Menu () {
    const [imgpanier, setName] = useState(require('../../img/panier.png'));
    const handleMouseOver = () => setName(require('../../img/panier-rempli.png'));
    const handleMouseOut = () => setName(require('../../img/panier.png'));

        return (
            <StyledMenu className="Menu">
                <nav className='Nav'>
                        <a href="#"><img className='logo' src={logo} alt='logo Fest It' /></a>
                        <ul className='menu'>
                            <li><a id="title" href="#">Festivals</a></li>
                            <li><a id="title" href="#">Artistes</a></li>
                            <li><a id="title" href="#">À propos</a></li>
                            <li><a href="#"><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='panier' src={imgpanier} alt='panier' /></a></li>
                        </ul>
                </nav>
            </StyledMenu>
        )
}

export default Menu;