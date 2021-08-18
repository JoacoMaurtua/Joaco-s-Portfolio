import React from 'react';
import styled from 'styled-components';

const ServiceCardStyled = styled.div`
  border-top: 8px solid var(--borderColor); 
  img{
    width: 9rem;
  }
  .container{
    padding: 1.2rem;
    h4{
      color: var(--primaryColor);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      
      &:after{
        content: "";
        width: 4rem;
        background-color: var(--borderColor);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p{
      padding: .8rem 0;
    }
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
