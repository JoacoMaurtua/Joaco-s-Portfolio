import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root{
    --backGroundDark: #001011;
    --primaryColor:#60e9f8;
    --secondaryColor: #6c757d;
    --backDarkColor: #10121a;
    --borderColor:  #60e9f8;
    --backLightColor: #f1f1f1;
    --fontLight: #a4acc4;
    --fontDark: #313131;
    --fontDrak2: #151515;
    --sideDark: #093a3e;
    --colorWhite: #ffffff;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
  }

  h3{
    font-size: 1.5rem;
  }

  body{
    background-color: var(--backGroundDark);
    color:  white;  /* #a4acc4 */
    transition: all .4s ease-in-out;
    
  }

  body::-webkit-scrollbar{
    width: 9px;
    background-color: #001011;
  }

  body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #093a3e;
  }

  body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #6c757d;
  }

  a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
  }

  h1{
    font-size: 3rem;
    span{
      font-size: 3rem;
    }
  }

`;

export default GlobalStyle;