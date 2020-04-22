import React, { useState } from "react";

import styled from "styled-components";
import "./Menu.css";
import logo from "../../img/logoFestIt.png";

import {NavLink} from 'react-router-dom';

/*import Festivals from '../Festivals';
import Artistes from '../Artistes';
import APropos from '../APropos';
import Panier from '../Panier'; 
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
*/

const StyledMenu = styled.nav`
  @media (max-width: 700px) {
    transform: ${({ open }) =>
      open ? "translateX(-200)" : "translateY(-200%)"};
  }
`;

function Menu({ open }) {
  const [imgpanier, setName] = useState(require("../../img/panier.png"));
  const handleMouseOver = () => setName(require("../../img/panier-rempli.png"));
  const handleMouseOut = () => setName(require("../../img/panier.png"));

  return (
    <StyledMenu open={open} className="Menu">
      <nav className="Nav">
        <NavLink id="logo" to="/"><img className="logo" src={logo} alt="logo Fest It" /></NavLink>
        <ul className="menu">
          <li>
          <li><NavLink activeClassName="active-link" id="title" to="/">Festivals</NavLink></li>
          </li>
          <li>
            <a id="title" href="#">
              Artistes
            </a>
          </li>
          <li><NavLink activeClassName="active-link" id="title" to="/A-propos">À propos</NavLink></li>
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
      {/*
            <nav className='Nav'>
                <Link to="/"><img className='logo' src={logo} alt='logo Fest It' /></Link>
                <ul className='menu'>
                    <li><NavLink activeClassName="active-link" id="title" to="/">Festivals</NavLink></li>
                    <li><NavLink activeClassName="active-link" id="title" to="/Artistes">Artistes</NavLink></li>
                    <li><NavLink activeClassName="active-link" id="title" to="/A-propos">À propos</NavLink></li>
                    <li><Link to="/Panier"><img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='panier' src={imgpanier} alt='panier' /></Link></li>
                </ul>
            <Route path="/" exact component={Festivals} />
            <Route path="/Artistes" exact component={Artistes} />
            <Route path="/A-propos" exact component={APropos} />
            <Route path="/Panier" exact component={Panier} />
            </nav>
        */}
    </StyledMenu>
  );
}

export default Menu;
