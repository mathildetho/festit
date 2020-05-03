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
        <Link onClick={() => setOpen(!open)} id="logo" to="/"><img className="logo" src={logo} alt="logo Fest It" /></Link>
        <ul className="menu">
          <li><NavLink exact={true} onClick={() => setOpen(!open)} activeClassName="active-link" id="title" to="/">Festivals</NavLink></li>
          <li>
          <li><NavLink activeClassName="active-link" id="title" to="/Artists">Artistes</NavLink></li>
          </li>
          <li><NavLink onClick={() => setOpen(!open)} activeClassName="active-link" id="title" to="/A-propos">À propos</NavLink></li>
          <li>
            <a href="#">
              <img
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="panier"
                src={imgpanier}
                alt="panier"
              />
            </a>
          </li>
        </ul>
      </nav>
      {/*           <li><NavLink  onClick={() => setOpen(!open)} activeClassName="active-link" id="title" to="/Artistes">Artistes</NavLink></li>
                    <li><Link onClick={() => setOpen(!open)} to="/Panier"><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='panier' src={imgpanier} alt='panier' /></Link></li>
        */}
    </StyledMenu>
  );
}

export default Menu;
