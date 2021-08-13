import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
  }

  body{
    background-color: #2b2d42;
  }

`;

export default GlobalStyle;