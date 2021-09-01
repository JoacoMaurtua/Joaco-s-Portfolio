import React from 'react';
import styled from 'styled-components';

const SmallTitleStyled =  styled.div`
    display: flex;
    align-items: center;
    p{
      padding-right: 1rem;
    }
    h3{
      color: var(--whiteColor);
      svg{
        font-size: 2rem;
      }
    }
`;

export default function SmallTitle({icon,title}) {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  )
}
