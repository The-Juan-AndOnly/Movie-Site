import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar';
import HeroPoster from './HeroPoster';
import styled from 'styled-components';
import poster from '../img/slider-bg.jpg';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="container">
          <Navbar />
          <SearchBar />
          <HeroPoster />
        </div>
      </HeaderWrapper>
    );
  }
}
export default Header;

const HeaderWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: url(${poster});
`;
