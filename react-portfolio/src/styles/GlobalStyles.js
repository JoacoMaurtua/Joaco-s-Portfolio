import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root{
    --primaryColor: #007bff;
    --secondaryColor: #6c757d;
    --backDarkColor: #10121a;
    --borderColor: #2e344e;
    --backLightColor: #f1f1f1;
    --fontLight: #a4acc4;
    --fontDark: #313131;
    --fontDrak2: #151515;
    --sideDark: #191d2b;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: #2b2d42;
  }

`;

export default GlobalStyle;