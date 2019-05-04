import React from 'react';

import Header from './components/Header';

// Import Styled Components
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Dosis', sans-serif;
    
  }

  html,body{
    background:#333;
  }
  
 .container {
    margin: 0 auto;
    padding: 0 15px;
  }

  

  

  @media (min-width:768px){
    .container{
      width:750px;
    }
  }

  @media (min-width:992px){
    .container{
      width:970px;
    }
  }
  @media (min-width:1200px){
    .container{
      width:1170px;
    }
  }
  

`;
