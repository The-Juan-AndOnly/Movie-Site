import React, { Component } from 'react';
import styled from 'styled-components';
import imgOne from '../../img/one.png';

class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <div className="navbar__logo">
          <img src={imgOne} alt="" className="imgOne" />
          <div>
            <h3>In A Million</h3>
            <p>Movie Site</p>
          </div>
        </div>
        <ul className="navbar__links">
          <li>Home</li>
          <li>Movies</li>
          <li>Celebrities</li>
          <li>News</li>
          <li>Community</li>
        </ul>
        <ul className="navbar__registration">
          <li>login</li>
          <li
            style={{
              background: 'red',
              border: 'none',
              borderRadius: '1rem',
              padding: '11px 25px'
            }}
          >
            Sign Up
          </li>
        </ul>
      </NavbarWrapper>
    );
  }
}

export default Navbar;
const NavbarWrapper = styled.nav`
  /* padding: 2rem 0; */
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-weight: bold;
  padding: 1rem;

  .navbar__logo {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -0.5rem;

    div {
      margin-left: -0.75rem;
      p {
        font-weight: normal;
        font-size: 0.9rem;
      }
    }
    .imgOne {
      height: 70px;
    }
  }
  .navbar__links {
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-transform: uppercase;
    list-style-type: none;
    margin-left: -3.75rem;
    li {
      float: left;
      margin: 0 1.5rem;
      padding: 1rem;
    }
  }
  .navbar__registration {
    flex-grow: 1;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-evenly;
    li {
      padding: 1rem;
    }
  }
`;
