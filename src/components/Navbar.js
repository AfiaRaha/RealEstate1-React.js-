//jshint esversion:6
import React from 'react';
import styled, { css } from 'styled-components/macro'; 
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { findByLabelText } from '@testing-library/dom';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
height: 60px;
display: flex; 
justify-content: space-between;
padding: 1rem 2rem;
width: 100%;
position: fixed; 
z-index: 100;

`; 

const NavLink = css`
color: black;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer; 
text-decoration: none;
`

const Logo = styled(Link)`
${NavLink}
color: #fff;
font-style: italic; 
`;

const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px) {
    display: block;
}

`;


const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px) {
    display: none;
}

`;

const NavMenuLinks = styled(Link)`
${NavLink}
`; 

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
    display: none;
}
`;


const Navbar = ({ toggle }) => {
    return (
        <Nav>
        <Logo to="/">Ellis&Lane</Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
        {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
            {item.title}
            </NavMenuLinks>
        ))}

         </NavMenu>
      <NavBtn>
          <Button to='/contact' primary='true'>Contact Us</Button>
      </NavBtn>
        </Nav>
    );
};

export default Navbar
