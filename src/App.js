import React from 'react';
// Import Styled Components
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      Che Che Che
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
  }

`;
