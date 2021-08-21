import React from 'react';
import styled from 'styled-components';

const PrimaryButtonStyled = styled.button`
  background-color: #00919c;
  padding: .8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all .4s ease-in-out;
  &:after{
    position:absolute;
    content: "";
    width: 0;
    height: .3rem;
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: .7;

  }
  
  &:hover::after{
    width: 100%;
    background-color: var(--primaryColor);
  }

`;

export default function PrimaButton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  )
}

