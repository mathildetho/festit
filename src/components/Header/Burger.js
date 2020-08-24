import React from "react";
import styled from "styled-components";
import "./Burger.css";
import logo from '../../img/logoFestIt.png';
import {Link} from 'react-router-dom';

const StyledBurger = styled.button`
  .trait {
    background: ${({ open }) => (open ? "#fff" : "#fff")};
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <div className="mobile">
      <Link className='logoBurger' to="/"><img className='logo' src={logo} alt='logo Fest It' /></Link>
      <StyledBurger className="Burger" open={open} onClick={() => setOpen(!open)}>
        <div className="trait" />
        <div className="trait" />
        <div className="trait" />
      </StyledBurger>
    </div>
  );
};

export default Burger;
