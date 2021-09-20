import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
    .light-theme {
    --backGroundDark: #f1f1f1;
    --backGroundItems: #093a3e;
    --primaryColor:#00919c;
    --secondaryColor: #292929;
    --backDarkColor: #F1F1F1;
    --borderColor:  #00919c;
    --backLightColor: #f1f1f1;
    --fontLight: #a4acc4;
    --fontDark: #313131;
    --fontDrak2: #151515;
    --sideDark: #E4E4E4;
    --colorWhite: #151515;
    --hoverFont: #fff;
    --colorBars: #e4e4e4;
    --colorBoton:#00919c;
    --hoverBoton: #093a3e;
    --projectCard: #e4e4e4;
    --boxesShadow: #999;
  }   

   .dark-theme{
    --backGroundDark: #001011;
    --backGroundItems: #093a3e;
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
    --hoverFont: #fff;
    --colorBars: #093a3e;
    --colorBoton:#00919c;
    --hoverBoton: #60e9f8;
    --projectCard: #093a3e;
    --boxesShadow: #001011;
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

  .light-dark-mode{
    position: fixed;
    right: 0;
    top: 10%;
    background-color: #3aafb9;
    width: 6.5rem;
    height: 2.5rem;
    z-index:15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size:1.7rem;
      color: var(--whiteColor);
    }
  }

`;

export default GlobalStyle;