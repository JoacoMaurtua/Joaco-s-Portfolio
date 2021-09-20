import React, {useContext} from 'react';
import { MyContext } from '../App';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../images/avatar.png';
import avatar2 from '../images/avatar-2.png';

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 3px solid var(--borderColor);

  .avatar{
    width: 85%;
    border-bottom: 1px solid var(--borderColor);
    text-align: center;
    padding: 2rem 0;
    img{
      width: 90%;
      border-radius: 50%;
      border: 8px solid var(--borderColor);
      &:hover{
        transform: translateY(-5px);
        cursor: pointer;
        
    }
     
    }
  }

  .nav-items{
    width: 100%;
    text-align:center;
    font-size: 1.5rem !important;
    /* .active-class{
      background-color: var(--borderColor);
    } */
    li{
      display: block;
      &:hover{
        background-color: var(--primaryColor);
      }
      a{
        color: var(--colorWhite);
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 4;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        &:hover{
          cursor: pointer;
          color: var(--hoverFont);
        }
        &:before{
          content:"";
          position: absolute;
          bottom:0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primaryColor);
          transition: all 0.6s cubic-bezier(1,-0.2,.25,.95);
          z-index: 3;
          opacity: 0.20;
          transform-origin: right;
        }
      }

      a:hover::before{
        width: 100%;
        height: 100%;

      }
    }

  }

  footer{
    border-top: 1px solid var(--borderColor);
    width: 100%;
    p{
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
      color: var(--colorWhite);
    }
  }
  
`;

export default function Navigation() {

  const {theme} = useContext(MyContext);

  return (
    <NavigationStyled>
      <div className="avatar">
        {
          theme === 'dark-theme'? <img src={avatar} alt=""/>:
          <img src={avatar2} alt=""/>
        }
           
      </div>
      <ul className="nav-items">
          <li className="nav-item">
              <NavLink to ="/" activeClassName="active-class">Home</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/about" activeClassName="active-class">About</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/resume" activeClassName="active-class">Resume</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/portfolios" activeClassName="active-class">Projects</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/contact" activeClassName="active-class">Contact</NavLink>
          </li>
      </ul>
      <footer>
        <p>@2021 Hello world!</p>
      </footer>
      
    </NavigationStyled>
  )
}
