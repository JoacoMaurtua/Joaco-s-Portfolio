import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const SideBarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sideDark);


`;

export default function SideBar() {
  return (
    <SideBarStyled>
        <Navigation/>
    </SideBarStyled>
  )
}
