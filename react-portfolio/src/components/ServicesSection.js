  import React from 'react';
  import styled from 'styled-components';
  import { InnerLayout } from '../styles/Layouts';
  import Title from './Title';
  
  const ServicesStyled = styled.div`
  
  
  
  `;

  export default function ServicesSection() {
    return (
      <InnerLayout>
        <ServicesStyled>
            <Title title={'Services'} span={'services'}/>
        </ServicesStyled>    
      </InnerLayout>
    )
  }
  