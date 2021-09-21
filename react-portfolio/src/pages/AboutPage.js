import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';
import coder from '../images/coder.svg'

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
          <Title title={"About me"} span={"About me"}/>
          <ImageSection/>
          <ServicesSection/>
          <ImageContainer>
              <img src={coder} alt=""/>
          </ImageContainer>
      </AboutStyled>
    </MainLayout>
  )
}

const AboutStyled = styled.section`
 

`;


const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sideDark);
  box-shadow: 5px 12px 10px var(--boxesShadow);
  height: 22rem;
  img{
    width: 50%;
  }
`;