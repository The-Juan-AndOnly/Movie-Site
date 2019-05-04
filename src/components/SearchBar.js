import React, { Component } from 'react';
import styled from 'styled-components';
import dropIcon from '../img/drop-icon.png';
import searchIcon from '../img/topsearch.png';

class SearchBar extends Component {
  render() {
    return (
      <SearchBarWrapper>
        <select>
          <option>Movies</option>
          <option>TV Shows</option>
        </select>
        <input
          type="text"
          placeholder="Che Che Che"
          className="searchBarInput"
        />
      </SearchBarWrapper>
    );
  }
}
export default SearchBar;

const SearchBarWrapper = styled.div`
  border: 4px solid black;
  display: flex;
  background: #233a50;

  select {
    background: url(${dropIcon}) no-repeat right 20px center;
    border: none;
    border-radius: 0;
    width: 20%;
    border-right: 1px solid black;
    appearance: none;

    padding: 6px 12px;
    height: 46px;
    color: #fff;
    font-size: 0.9rem;
    outline: none;
    text-transform: uppercase;
    font-weight: 300;
    font-family: sans-serif;
  }
  .searchBarInput {
    background: url(${searchIcon}) no-repeat right 20px center;
    border: none;
    font-size: 0.9rem;
    width: 100%;
    padding: 6px 12px;
    height: 46px;
    color: #fff;
    line-height: 1.5;
    font-weight: 400;
    outline: none;
    font-family: sans-serif;
    ::placeholder {
      color: #ccc;
    }
  }
`;
