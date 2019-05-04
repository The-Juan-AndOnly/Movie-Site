import React, { Component } from 'react';
import styled from 'styled-components';

class HeroPoster extends Component {
  render() {
    return (
      <HeroWrapper>
        <div className="container">
          <div className="row">
            <div className="heroInfo">
              <div className="heroInfo__genre">
                <p>Sci-Fi</p>
                <p>Action</p>
                <p>Adenture</p>
              </div>
              <div className="heroInfo__title">
                <a href="/">Avengers: Infinity War</a>
                <span> 2019</span>
              </div>
              <div className="heroInfo__links">
                <ul>
                  <li>Watch Trailer</li>
                  <li>Add to Favorite</li>
                  <li>Share</li>
                </ul>
              </div>
            </div>
            <div className="heroPoster">
              <img
                src="http://haintheme.com/demo/html/bustter/images/uploads/poster1.jpg"
                alt="movie Poster"
              />
            </div>
          </div>
        </div>
      </HeroWrapper>
    );
  }
}
export default HeroPoster;

const HeroWrapper = styled.div`
  color: #fff;
  padding: 10rem 0 0;
  .row {
    display: flex;
    justify-content: space-around;
  }

  .heroInfo {
    width: 60%;
  }
  .heroInfo__genre {
    display: flex;
    p {
      margin: 0.5rem;
      padding: 0.2rem 0.5rem;
      font-weight: 900;
      text-transform: uppercase;
      font-size: 0.75rem;
      background: orange;
      border-radius: 2px;
    }
  }

  .heroInfo__title {
    margin-bottom: 1rem;
    a {
      font-size: 4rem;
      font-weight: 700;
      font-family: 'Dosis';
      text-decoration: none;
      text-transform: uppercase;
      color: inherit;
    }
    span {
      font-size: 2rem;
      color: #ccc;
      margin-left: 0.5rem;
    }
  }

  .heroInfo__links {
    color: #dd003f;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    ul {
      display: flex;
      list-style: none;
      justify-content: flex-start;
      li {
        margin-right: 2.1rem;
      }
    }
  }
`;
