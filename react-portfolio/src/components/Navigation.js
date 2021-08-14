import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../images/avatar.png';

const NavigationStyled = styled.div`


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
