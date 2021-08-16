import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
          <Title title={"About me"} span={"About me"}/>
          <ImageSection/>
      </AboutStyled>
    </MainLayout>
  )
}

const AboutStyled = styled.section`


`;
