import React from 'react';
import styled from 'styled-components';

const PrimaryButtonStyled = styled.a`
  background-color: #00919c;
  padding: .8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all .4s ease-in-out;
  
  &:hover::after{
    position:absolute;
    content: "";
    width: 100%;
    height: .3rem;
    background-color: var(--primaryColor);
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;

  }

`;

export default function PrimaButton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  )
}


