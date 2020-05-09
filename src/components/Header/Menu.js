import React, { useState } from "react";

import styled from "styled-components";
import "./Menu.css";
import logo from "../../img/logoFestIt.png";
import {NavLink, Link} from 'react-router-dom';

const StyledMenu = styled.nav`
  @media (max-width: 700px) {
    transform: ${({ open }) =>
      open ? "translateX(-200)" : "translateY(-200%)"};
  }
`;

function Menu({ open, setOpen }) {
  const [imgpanier, setName] = useState(require("../../img/panier.png"));
  const handleMouseOver = () => setName(require("../../img/panier-rempli.png"));
  const handleMouseOut = () => setName(require("../../img/panier.png"));

  return (
    <StyledMenu open={open} className="Menu">
      <nav className="Nav">
        <Link id="logo" to="/"><img className="logo" src={logo} alt="logo Fest It" /></Link>
        <ul className="menu">
          <li><NavLink exact activeClassName="active-link" id="title" to="/">Festivals</NavLink></li>
          <li>
            <a id="title" href="#">
              Artistes
            </a>
          </li>
          <li><NavLink activeClassName="active-link" id="title" to="/A-propos">À propos</NavLink></li>
          <li><Link to="/Panier"><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='panier' src={imgpanier} alt='panier' /></Link></li>
        </ul>
      </nav>
    </StyledMenu>
  );
}

export default Menu;
