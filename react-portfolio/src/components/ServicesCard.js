import React from 'react';
import styled from 'styled-components';

const ServiceCardStyled = styled.div`
  img{
    width: 9.5rem;
  }


`;

export default function ServicesCard({image,title,paragraph}) {
  return (
    <ServiceCardStyled>
      <div className="container">
          <img src={image} alt=""/>
          <h4>{title}</h4>
          <p>{paragraph}</p>
      </div>
      
    </ServiceCardStyled>
  )
}
