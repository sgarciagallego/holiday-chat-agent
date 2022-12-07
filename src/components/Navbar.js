import React from 'react'
import styled from 'styled-components'
import Logo from './icons/Logo'

const Nav = styled.nav`
  z-index: 999;
  background-color: #FFF;
  position: fixed;
  top: 0;
  min-width: 100%;
  min-height: 70px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 2vw;
  align-self: center;
  -webkit-box-shadow: 0px 2.98px 7.46px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2.98px 7.46px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2.98px 7.46px 0px rgba(0, 0, 0, 0.1);
  ul {
    display: flex;
    list-style: none;
  }
  ul > li {
    padding: 2px 0;
    transition: 0.2s ease;
    :hover {
      transform: translateY(-2px);
    }
  }
  ul > li:nth-child(1) {
    margin-right: 12px
  }
  ul > li > a {
    color: #000;
    text-decoration: none;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='#'>Attributions</a></li>
      </ul>
    </Nav>
  )
}

export default Navbar