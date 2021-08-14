import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../images/avatar.png';

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 3px solid var(--borderColor);

  .avatar{
    width: 80%;
    border-bottom: 1px solid var(--borderColor);
    text-align: center;
    padding: 2rem 0;
    img{
      width: 100%;
      border-radius: 50%;
      border: 8px solid var(--borderColor);
     
    }

    .nav-items{
      width: 100%;
      text-align:center;
      li{
        display: block;
        a{
          display: block;
        }
      }

    }
  }

`

export default function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
           <img src={avatar} alt=""/> 
      </div>
      <ul className="nav-items">
          <li className="nav-item">
              <NavLink to ="/" activeClassName="active-class">Home</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/about" activeClassName="active-class">Abaut</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/resume" activeClassName="active-class">Resume</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/portfolios" activeClassName="active-class">Portfolios</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/contact" activeClassName="active-class">Contact</NavLink>
          </li>
      </ul>
      <footer>
        <p>@2021 Welcome to our world!</p>
      </footer>
      
    </NavigationStyled>
  )
}
