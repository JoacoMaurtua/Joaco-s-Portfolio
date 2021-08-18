import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const SideBarStyled = styled.div`
  width: 16.5rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sideDark);
  font-size: 1.3rem !important;



`;

export default function SideBar() {
  return (
    <SideBarStyled>
        <Navigation/>
    </SideBarStyled>
  )
}
