import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled, { ThemeConsumer } from 'styled-components';
import Nav from './Nav';
import Search from './Search';
import Social from './Social';
import LoggedIn from './LoggedIn';
import MobileMenu from './MobileMenu';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.isTransparent === true ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 1)'};
  box-shadow: 0 4px 4px #000;
  width: 100%;
  height: 50px;
  padding-right: 40px;
  min-width: 320px;
  position: fixed;
  transition: ${props => props.theme.simpleTransition};
`;

const handleMenuClick = () => {
  console.log('Menu Clicked');
};

const Header = props => (
  <StyledHeader isTransparent={props.isTransparent}>
    <MobileMenu handleMenuClick={handleMenuClick} />
    <Nav />
    <LoggedIn />
    <Social />
    <Search />
  </StyledHeader>
);
export default Header;
